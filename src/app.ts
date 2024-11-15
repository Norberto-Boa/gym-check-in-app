import fastify from "fastify";
import { appRoutes } from "./http/routes";
import { ZodError } from "zod";
import { env } from "./env";
import { UserAlreadyExistsError } from "./services/Errors/user-already-exists-error";

export const app = fastify();

app.register(appRoutes);

app.setErrorHandler((error, _, reply) => {
	if (error instanceof ZodError) {
		return reply.status(400).send({
			message: "Validation error",
			issues: error.format(),
		});
	}

	if (error instanceof UserAlreadyExistsError) {
		return reply.code(409).send(error);
	}

	if (env.NODE_ENV !== "production") {
		console.error(error);
	} else {
		// TODO: Here we should log an external tool like DataDog/NewRelic/Sentry
	}

	return reply.status(500).send({ message: "Internal server Error" });
});
