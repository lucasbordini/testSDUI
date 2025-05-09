import { Injectable } from "@nestjs/common";
import { QuoteBy, SessionStateCache } from "src/data/cache/session.state";
import { TransferService } from "src/data/service/transfer.service";
import { Layout } from "../layouts/layout";
import { TransferBuilder } from "../builders/transfer.builder";

@Injectable()
export class GetQuoteUseCase {

    constructor(
        private readonly state: SessionStateCache,
        private readonly service: TransferService
    ) {}

    async invoke(token: string, amount: string, quoteBy: QuoteBy): Promise<Layout> {
        const state = await this.state.get(token);
        if (state == null) { return fail() }
        console.log(JSON.stringify(state.selectedCorridor));
        const quote = await this.service.quote(
            token,
            state?.selectedCorridor?.destinationCurrency.at(0)?.iso3Code ?? '',
            state?.selectedCorridor?.destinationCountry.iso3Code ?? '',
            quoteBy,
            amount,
            state?.selectedCorridor?.transferMethod ?? ""
        );
        state.quotes = [quote];
        state.selectedQuote = quote;
        await this.state.set(token, state);
        return TransferBuilder(state.corridors ?? [], state.selectedCorridor, quote)
    }
}