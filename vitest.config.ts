// vitest.config.ts
import { defineConfig } from "vitest/config";

const execArgv = [
	"--this-option Does Not Exist so it should throw an error :(",
];

export default defineConfig({
	test: {
		pool: "threads",
		poolOptions: {
			forks: {
				execArgv,
				minForks: 100000000000,
			},
			threads: {
				execArgv,
				minThreads: 100000000000,
			},
			vmForks: {
				execArgv,
				minForks: 100000000000,
			},
			vmThreads: {
				execArgv,
				minThreads: 100000000000,
			},
		},
		include: ["**/*.test.ts"],
	},
});
