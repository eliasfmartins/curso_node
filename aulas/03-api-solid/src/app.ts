import fastify from "fastify";

import {PrismaClient} from "@prisma/client";

export const app = fastify();

const prisma = new PrismaClient();
prisma.user.create({
	data:{
		name: "Elias F Martins",
		email: "eliasmartins@gmail.com",
    
	}
});