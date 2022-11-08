import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const matches = [
  {
    date: "2022-11-20T16:00:00Z",
    homeTeamCountryCode: "QA",
    awayTeamCountryCode: "EC",
  },
  {
    date: "2022-11-21T13:00:00Z",
    homeTeamCountryCode: "GB-ENG",
    awayTeamCountryCode: "IR",
  },
  {
    date: "2022-11-21T16:00:00Z",
    homeTeamCountryCode: "SN",
    awayTeamCountryCode: "NL",
  },
  {
    date: "2022-11-21T19:00:00Z",
    homeTeamCountryCode: "US",
    awayTeamCountryCode: "GB-WLS",
  },
  {
    date: "2022-11-22T10:00:00Z",
    homeTeamCountryCode: "AR",
    awayTeamCountryCode: "SA",
  },
  {
    date: "2022-11-22T13:00:00Z",
    homeTeamCountryCode: "DK",
    awayTeamCountryCode: "TN",
  },
  {
    date: "2022-11-22T16:00:00Z",
    homeTeamCountryCode: "MX",
    awayTeamCountryCode: "PL",
  },
  {
    date: "2022-11-22T19:00:00Z",
    homeTeamCountryCode: "FR",
    awayTeamCountryCode: "AU",
  },
  {
    date: "2022-11-23T10:00:00Z",
    homeTeamCountryCode: "MA",
    awayTeamCountryCode: "HR",
  },
  {
    date: "2022-11-23T13:00:00Z",
    homeTeamCountryCode: "DE",
    awayTeamCountryCode: "JP",
  },
  {
    date: "2022-11-23T16:00:00Z",
    homeTeamCountryCode: "ES",
    awayTeamCountryCode: "CR",
  },
  {
    date: "2022-11-23T19:00:00Z",
    homeTeamCountryCode: "BE",
    awayTeamCountryCode: "CA",
  },
  {
    date: "2022-11-24T10:00:00Z",
    homeTeamCountryCode: "CH",
    awayTeamCountryCode: "CM",
  },
  {
    date: "2022-11-24T13:00:00Z",
    homeTeamCountryCode: "UY",
    awayTeamCountryCode: "KR",
  },
  {
    date: "2022-11-24T16:00:00Z",
    homeTeamCountryCode: "PT",
    awayTeamCountryCode: "GH",
  },
  {
    date: "2022-11-24T19:00:00Z",
    homeTeamCountryCode: "BR",
    awayTeamCountryCode: "RS",
  },
  {
    date: "2022-11-25T10:00:00Z",
    homeTeamCountryCode: "GB-WLS",
    awayTeamCountryCode: "IR",
  },
  {
    date: "2022-11-25T13:00:00Z",
    homeTeamCountryCode: "QA",
    awayTeamCountryCode: "SN",
  },
  {
    date: "2022-11-25T16:00:00Z",
    homeTeamCountryCode: "NL",
    awayTeamCountryCode: "EC",
  },
  {
    date: "2022-11-25T19:00:00Z",
    homeTeamCountryCode: "GB-ENG",
    awayTeamCountryCode: "US",
  },
  {
    date: "2022-11-26T10:00:00Z",
    homeTeamCountryCode: "TN",
    awayTeamCountryCode: "AU",
  },
  {
    date: "2022-11-26T13:00:00Z",
    homeTeamCountryCode: "PL",
    awayTeamCountryCode: "SA",
  },
  {
    date: "2022-11-26T16:00:00Z",
    homeTeamCountryCode: "FR",
    awayTeamCountryCode: "DK",
  },
  {
    date: "2022-11-26T19:00:00Z",
    homeTeamCountryCode: "AR",
    awayTeamCountryCode: "MX",
  },
  {
    date: "2022-11-27T10:00:00Z",
    homeTeamCountryCode: "JP",
    awayTeamCountryCode: "CR",
  },
  {
    date: "2022-11-27T13:00:00Z",
    homeTeamCountryCode: "BE",
    awayTeamCountryCode: "MA",
  },
  {
    date: "2022-11-27T16:00:00Z",
    homeTeamCountryCode: "HR",
    awayTeamCountryCode: "CA",
  },
  {
    date: "2022-11-27T19:00:00Z",
    homeTeamCountryCode: "ES",
    awayTeamCountryCode: "DE",
  },
  {
    date: "2022-11-28T10:00:00Z",
    homeTeamCountryCode: "CM",
    awayTeamCountryCode: "RS",
  },
  {
    date: "2022-11-28T13:00:00Z",
    homeTeamCountryCode: "KR",
    awayTeamCountryCode: "GH",
  },
  {
    date: "2022-11-28T16:00:00Z",
    homeTeamCountryCode: "BR",
    awayTeamCountryCode: "CH",
  },
  {
    date: "2022-11-28T19:00:00Z",
    homeTeamCountryCode: "PT",
    awayTeamCountryCode: "UY",
  },
  {
    date: "2022-11-29T15:00:00Z",
    homeTeamCountryCode: "EC",
    awayTeamCountryCode: "SN",
  },
  {
    date: "2022-11-29T15:00:00Z",
    homeTeamCountryCode: "NL",
    awayTeamCountryCode: "QA",
  },
  {
    date: "2022-11-29T19:00:00Z",
    homeTeamCountryCode: "GB-WLS",
    awayTeamCountryCode: "GB-ENG",
  },
  {
    date: "2022-11-29T19:00:00Z",
    homeTeamCountryCode: "IR",
    awayTeamCountryCode: "US",
  },
  {
    date: "2022-11-30T15:00:00Z",
    homeTeamCountryCode: "AU",
    awayTeamCountryCode: "DK",
  },
  {
    date: "2022-11-30T15:00:00Z",
    homeTeamCountryCode: "TN",
    awayTeamCountryCode: "FR",
  },
  {
    date: "2022-11-30T19:00:00Z",
    homeTeamCountryCode: "PL",
    awayTeamCountryCode: "AR",
  },
  {
    date: "2022-11-30T19:00:00Z",
    homeTeamCountryCode: "SA",
    awayTeamCountryCode: "MX",
  },
  {
    date: "2022-12-01T15:00:00Z",
    homeTeamCountryCode: "HR",
    awayTeamCountryCode: "BE",
  },
  {
    date: "2022-12-01T15:00:00Z",
    homeTeamCountryCode: "CA",
    awayTeamCountryCode: "MA",
  },
  {
    date: "2022-12-01T19:00:00Z",
    homeTeamCountryCode: "JP",
    awayTeamCountryCode: "ES",
  },
  {
    date: "2022-12-01T19:00:00Z",
    homeTeamCountryCode: "CR",
    awayTeamCountryCode: "DE",
  },
  {
    date: "2022-12-02T15:00:00Z",
    homeTeamCountryCode: "GH",
    awayTeamCountryCode: "UY",
  },
  {
    date: "2022-12-02T15:00:00Z",
    homeTeamCountryCode: "KR",
    awayTeamCountryCode: "PT",
  },
  {
    date: "2022-12-02T19:00:00Z",
    homeTeamCountryCode: "RS",
    awayTeamCountryCode: "CH",
  },
  {
    date: "2022-12-02T19:00:00Z",
    homeTeamCountryCode: "CM",
    awayTeamCountryCode: "BR",
  },
];

async function seedMatches() {
  await Promise.all(
    matches.map((item) =>
      prisma.match.create({
        data: item,
      })
    )
  )
    .then(() => console.log("Success"))
    .catch((error) => console.log(error));
}

/* As prisma.createMany doesn't work with SQLite, here's the function for others dbs */

// async function seedMatches() {
//   await prisma.match.createMany({
//     data: matches
//   })
// }

seedMatches();
