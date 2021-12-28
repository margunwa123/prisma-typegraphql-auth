import "reflect-metadata";
import { PORT, POSTGRES_USER } from '@/config/env';
import express from 'express';
import { buildSchema } from 'type-graphql';
import { FindManyUserResolver, PostCrudResolver, PostRelationsResolver, resolvers, UserCrudResolver, UserRelationsResolver } from "@tql/type-graphql";
import { graphqlHTTP } from "express-graphql";
import { PrismaClient } from "@prisma/client";
import path from "path";

async function main() {
  const app = express();

  const prisma = new PrismaClient();
  await prisma.$connect();
  console.log("prisma connected")

  const schema = await buildSchema({
    resolvers,
    validate: false,
    emitSchemaFile: path.resolve(__dirname, "../generated-schema.graphql"),
  });
  
  app.use('/graphql', graphqlHTTP({
    context: {prisma},
    schema,
    graphiql: true,
  }))

  app.get('/', (req, res) => {
    res.send(POSTGRES_USER);
  });

  app.listen(PORT, () => {
    console.log('server live in port ' + PORT);
  });
}

main();
