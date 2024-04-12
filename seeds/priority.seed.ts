// seeds/users.seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.tb_priority.createMany({
    data: [
      {
        name: 'Alta',
      },
      {
        name: 'Média',
      },
      {
        name: 'Baixa',
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
