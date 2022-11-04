import Fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";
import { poolRoutes } from "./routes/pool";
import { userRoutes } from "./routes/user";
import { betRoutes } from "./routes/bet";
import { authRoutes } from "./routes/auth";
import { matchRoutes } from "./routes/match";
import jwt from "@fastify/jwt";

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });

  //PUT THIS IN .ENV
  await fastify.register(jwt, {
    secret: process.env.JWT_SECRET,
  });

  //Import routes from files
  await fastify.register(poolRoutes);
  await fastify.register(userRoutes);
  await fastify.register(betRoutes);
  await fastify.register(matchRoutes);
  await fastify.register(authRoutes);

  await fastify.listen({ port: 3333, host: "0.0.0.0" });
}

bootstrap();
