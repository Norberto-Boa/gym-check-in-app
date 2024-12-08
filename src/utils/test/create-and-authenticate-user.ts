import type { FastifyInstance } from "fastify";
import request from "supertest";


export async function createAndAuthenticateUser(app: FastifyInstance) {
  await request(app.server).post('/users').send({
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password123"
  });

  const authResponse = await request(app.server).post('/sessions').send({
    email: "john.doe@example.com",
    password: "password123"
  });


  const { token } = authResponse.body;

  return { token };
}