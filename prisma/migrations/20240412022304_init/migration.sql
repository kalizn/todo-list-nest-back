-- CreateTable
CREATE TABLE "tb_users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "idGoogle" TEXT NOT NULL,

    CONSTRAINT "tb_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_priority" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "tb_priority_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_todo" (
    "id" SERIAL NOT NULL,
    "idUser" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "finalDate" TEXT NOT NULL,
    "finally_at" TEXT,
    "priorityId" INTEGER NOT NULL,

    CONSTRAINT "tb_todo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tb_todo" ADD CONSTRAINT "tb_todo_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "tb_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_todo" ADD CONSTRAINT "tb_todo_priorityId_fkey" FOREIGN KEY ("priorityId") REFERENCES "tb_priority"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
