import { PrismaClient } from "@prisma/client";
import { links } from "../data/links";

const prisma = new PrismaClient();

async function main() {
  // Create a user
  await prisma.user.create({
    data: {
      email: "testemail@gmail.com",
      role: "ADMIN",
    },
  });

  // Add some links
  await prisma.link.createMany({
    data: links,
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
