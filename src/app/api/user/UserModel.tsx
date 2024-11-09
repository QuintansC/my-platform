import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface Users {
    name: string;
    email: string;
    emailVerified: Date | null;
    password: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
}

async function createUser(user: Users){
    const createdUser = await prisma.user.create({
        data: {
            ...user
        }
    });

    return createdUser;
}

async function getUserByEmail(emails: string) {
    const user = await prisma.user.findUnique({where: {email: emails}})
    return user?.id;
}

async function updateUser(email: string, data: Partial<Users>) {
    const updatedUser = await prisma.user.update({
        where: {
            email,
        },
        data,
    });

    return updatedUser;
}

async function deleteUser(id: string) {
    const deletedUser = await prisma.user.delete({
        where: {
            id,
        },
    });

    return deletedUser;
}

export { createUser, getUserByEmail, updateUser, deleteUser };