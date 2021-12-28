import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  console.log(`Creating seed...`);
  // seed here
  console.log(`Seeding finished.`);
}

seed();
