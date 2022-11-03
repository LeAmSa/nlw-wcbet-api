import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { authenticate } from "../plugins/authenticate";

export async function betRoutes(fastify: FastifyInstance) {
  //get count of bets
  fastify.get("/bets/count", async () => {
    const count = await prisma.bet.count();

    return { count };
  });

  //create bet
  fastify.post(
    "/pools/:poolId/matches/:matchId/bets",
    {
      onRequest: [authenticate],
    },
    async (request, reply) => {
      const createBetsParams = z.object({
        poolId: z.string(),
        matchId: z.string(),
      });

      const createBetsBody = z.object({
        homeTeamGoals: z.number(),
        awayTeamGoals: z.number(),
      });

      const { poolId, matchId } = createBetsParams.parse(request.params);
      const { homeTeamGoals, awayTeamGoals } = createBetsBody.parse(
        request.body
      );

      const participant = await prisma.participant.findUnique({
        where: {
          userId_poolId: {
            poolId,
            userId: request.user.sub,
          },
        },
      });

      if (!participant) {
        return reply.status(400).send({
          message: "You're not allowed to create a bet into this poll.",
        });
      }

      const bet = await prisma.bet.findUnique({
        where: {
          participantId_matchId: {
            participantId: participant.id,
            matchId,
          },
        },
      });

      if (bet) {
        return reply.status(400).send({
          message: "You already send a bet for this game on this pol.",
        });
      }

      const match = await prisma.match.findUnique({
        where: {
          id: matchId,
        },
      });

      if (!match) {
        return reply.status(400).send({
          message: "Match not found.",
        });
      }

      if (match.date < new Date()) {
        return reply.status(400).send({
          message: "You cannot send bets after the game date.",
        });
      }

      await prisma.bet.create({
        data: {
          matchId,
          participantId: participant.id,
          homeTeamGoals,
          awayTeamGoals,
        },
      });

      return reply.status(201).send();
    }
  );
}
