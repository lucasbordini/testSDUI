import { Global, Module } from "@nestjs/common";
import Redis from "ioredis";
import { SessionStateCache } from "src/data/cache/session.state";

@Global()
@Module({
    providers: [
        {
            provide: 'REDIS',
            useFactory: () => new Redis(process.env.REDIS_URL ?? 'redis://localhost:6379', { enableAutoPipelining: true })
        },
        SessionStateCache
    ],
    exports: ['REDIS', SessionStateCache]
})
export class RedisModule { }