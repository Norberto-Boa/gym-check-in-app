import { describe, it, expect, beforeEach } from "vitest";
import { InMemoryCheckInsRepository } from "@/repositories/in-memory/in-memory-check-ins-repository";
import { GetUserMetricsService } from "./get-user-metrics.service";

let checkInsRepository: InMemoryCheckInsRepository;
let sut: GetUserMetricsService;

describe("get check-ins metrics Service", () => {
  beforeEach(async () => {
    checkInsRepository = new InMemoryCheckInsRepository();
    sut = new GetUserMetricsService(checkInsRepository);

  })

  it("Should be able to get check-ins count from metrics", async () => {

    await checkInsRepository.create({
      gym_id: "gym-01",
      user_id: "user-01",
    })

    await checkInsRepository.create({
      gym_id: "gym-02",
      user_id: "user-01",
    })

    await checkInsRepository.create({
      gym_id: "gym-03",
      user_id: "user-01",
    })

    const { checkInsCount } = await sut.execute({
      userId: "user-01",
      page: 1
    });

    expect(checkInsCount).toEqual(3);
  });

});