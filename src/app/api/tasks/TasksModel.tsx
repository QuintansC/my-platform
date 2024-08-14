import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Tasks {
    id_task: string,     
    index: string,     
    draggableId: string,    
    authorId: string,
    qntCheck: number,
    createdAt: Date, 
    updatedAt: Date  
}

async function createTask(user: Tasks) {
    const createdTasks: Tasks = await prisma.tasks.create({
        data: {
            ...user
        }
    });

    return createdTasks;
}

async function getTaskById(id: string) {
    const tasks = await prisma.tasks.findUnique({
        where: {
            id_task: id
        }
    });

    return tasks;
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

export { createTask, getTaskById, updateTask, deleteTask };