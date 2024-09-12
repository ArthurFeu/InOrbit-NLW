import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getWeekPendingGoals } from "../../services/getWeekPendingGoals";

export const getWeekPendingGoalsRoute: FastifyPluginAsyncZod = async (app) => {
	app.get("/pending-goals", async () => {
		const { pendingGoals } = await getWeekPendingGoals();

		return { pendingGoals };
	});
};