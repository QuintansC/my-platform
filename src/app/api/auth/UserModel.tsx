import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface User {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
}



async function createUser(user: User): Promise<User> {
    const createdUser: User = await prisma.user.create({
        data: {
            ...user,
        }
    });

    return createdUser;
}

async function getUserByEmail(email: string): Promise<User | null> {
    const user: User | null = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    return user;
}

async function updateUser(id: string, data: Partial<User>): Promise<User | null> {
    const updatedUser: User = await prisma.user.update({
        where: {
            id,
        },
        data,
    });

    return updatedUser;
}

async function deleteUser(id: string): Promise<User | null> {
    const deletedUser: User = await prisma.user.delete({
        where: {
            id,
        },
    });

    return deletedUser;
}

export { createUser, getUserByEmail, updateUser, deleteUser };