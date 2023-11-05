import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
	NODE_ENV: z.enum(["dev","test","production"]).default("dev"),
	//ja valida o node_env e da intelicenc ele pode ser dos 3 tipos  sendo dev ja vem por padrao
	PORT: z.coerce.number().default(3333),
	//define a porta por padrao pra number caso esteja como string  e com valor padrao de 3333
});
// verifica se tem os dados do formato correto
const _env = envSchema.safeParse(process.env);
if (_env.success === false) {
	console.error("❌ Invalid environment variables", _env.error.format());
	// nao deixa a aplicacao executar ja mata aqui mesmo
	throw new Error("Invalid environment variables.");
}
// caso n de nenhum erro a variavel data vai ser exportada
export const env = _env.data;