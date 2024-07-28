import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Users {
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    password: string | null;
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
}

async function createUser(user: Users): Promise<Users> {
    const createdUser: Users = await prisma.user.create({
        data: {
            ...user
        }
    });

    return createdUser;
}

async function getUserByEmail(emails: string): Promise<Users> {
    const user: Users | any = await prisma.user.findUnique({
        where: {
            email: emails
        }
    });

    return user;
}

async function updateUser(email: string, data: Partial<Users>): Promise<Users> {
    const updatedUser: Users = await prisma.user.update({
        where: {
            email,
        },
        data,
    });

    return updatedUser;
}

async function deleteUser(id: string): Promise<Users> {
    const deletedUser: Users = await prisma.user.delete({
        where: {
            id,
        },
    });

    return deletedUser;
}

export { createUser, getUserByEmail, updateUser, deleteUser };