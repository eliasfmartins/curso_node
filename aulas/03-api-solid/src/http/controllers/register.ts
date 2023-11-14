import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
import { z } from "zod";
import { FastifyRequest, FastifyReply } from "fastify";

export  async function register (request : FastifyRequest, reply: FastifyReply) {
	const registerbodySchema = z.object({
		name: z.string(),
		email: z.string().email(),
		password: z.string().min(6)
	});

	const { name, email, password} = registerbodySchema.parse(request.body);
	const password_hash =  await hash(password, 6);
	const userWitchSameEmail = await prisma.user.findUnique({
		where:{
			email,
		}
	});
	if (userWitchSameEmail){
		return reply.status(409).send();
	}

	await prisma.user.create({
		data:{
			name,
			email,
			password_hash,
		}
	});

	return reply.status(201).send();
}