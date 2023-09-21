import prisma from "./database";

(async () => {
  const students = await prisma.students.groupBy({
    by: ["class"],
    _count: {
      id: true
    },
    where: {
      jobId: null
    }
  });
  console.log(students);
})