import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface Tasks {
    id_task: string,        
    authorId: string,
    qntCheck: number,
    status: string,
    createdAt: Date, 
    updatedAt: Date  
}

async function createTask(tasks: Tasks) {
    const createdTasks: Tasks = await prisma.tasks.create({
        data: {
          ...tasks
        }
    });
    
    return createdTasks;
}

async function getTaskByEmailStatus(email: string,  status: string) {

    const em = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
    if(em){
        const tasks = await prisma.tasks.findMany({
            where: {
                authorId: em.id,
                status: status
            }
        });
        return tasks;
    };    
}

async function updateTask(id: string, data: Partial<Tasks>){
    const updatedUser: Tasks = await prisma.tasks.update({
        where: {
            id_task: id,
        },
        data,
    });

    return updatedUser;
}

async function deleteTask(id: string): Promise<Tasks> {
    const deletedTask: Tasks = await prisma.tasks.delete({
        where: {
            id_task: id,
        },
    });

    return deletedTask;
}

export { createTask, getTaskByEmailStatus, updateTask, deleteTask };