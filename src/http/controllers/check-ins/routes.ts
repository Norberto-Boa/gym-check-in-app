import { FastifyInstance } from "fastify";
import { verifyJWT } from "@/http/middlewares/verify-jwt";
import { create } from "./create.controller";
import { validate } from "./validate.controller";
import { history } from "./history.controller";
import { metrics } from "./metrics.controller";
import { verifyUserRole } from "@/http/middlewares/verify-user-role";

export async function checkInsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT);

  app.get('/check-ins/history', history)
  app.get('/check-ins/metrics', metrics)

  app.post("/gyms/:gymId/checkins", create);
  app.patch("/check-ins/:checkInId/validate", { onRequest: [verifyUserRole('ADMIN')] }, validate);
}