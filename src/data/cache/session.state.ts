import { Inject, Injectable } from "@nestjs/common";
import Redis from "ioredis";
import { Corridor } from "src/domain/model/corridor";
import { RecipientList } from "src/domain/model/recipient.list";
import { SenderDetails } from "src/domain/model/sender.details";
import { Quote } from "src/domain/model/transfers";

export interface SessionState {
    id: string;
    sender?: SenderDetails;
    recipientList?: RecipientList;
    isAFT: boolean;
    corridors?: Corridor[];
    quotes?: Quote[];
    selectedCorridor?: Corridor;
    selectedQuote?: Quote;
    quoteBy: QuoteBy;
}

export enum QuoteBy {
    SEND_AMOUNT = "SEND_AMOUNT",
    RECEIVE_AMOUNT = "RECEIVE_AMOUNT"
}

const TTL_SECONDS = 60 * 60 * 8; // 8 hours

@Injectable()
export class SessionStateCache {
    constructor(@Inject('REDIS') private readonly redis: Redis) {}

    private key(sid: string) {
        return `session:${sid}`;
    }

    async get(sid: string): Promise<SessionState | null> {
        const raw = await this.redis.get(this.key(sid));
        return raw ? JSON.parse(raw) : null;
    }

    async set(sid: string, state: SessionState) {
        const saved = await this.redis.set(this.key(sid), JSON.stringify(state), 'EX', TTL_SECONDS);
        console.log(`REDIS STATUS: ${saved}`)
    }

    async delete(sid: string) {
        this.redis.del(this.key(sid));
    }
}