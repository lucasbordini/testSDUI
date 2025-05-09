import { Injectable } from "@nestjs/common";
import { QuoteBy, SessionState, SessionStateCache } from "src/data/cache/session.state";
import { Layout } from "../layouts/layout";
import { TransferBuilder } from "../builders/transfer.builder";
import { TransferService } from "src/data/service/transfer.service";

@Injectable()
export class GetTransferUseCase {

    constructor(
        private readonly state: SessionStateCache,
        private readonly service: TransferService
    ) {}

    async _getState(token: string): Promise<SessionState | null> {
        return await this.state.get(token);
    }

    async invoke(token: string, selectedCountry: string): Promise<Layout> {
        const state = await this._getState(token);
        if (state == null) { return fail() }
        const selected = state.corridors?.find((e) => e.destinationCountry.iso3Code == selectedCountry)
        if (selected != undefined && selected != null) {
            const quote = await this.service.quote(
                token,
                selected.destinationCurrency.at(0)?.iso3Code ?? '',
                selected.destinationCountry.iso3Code,
                QuoteBy.SEND_AMOUNT,
                "10000",
                selected.transferMethod
            )
            state.quotes = [quote]
            state.selectedCorridor = selected
            state.selectedQuote = quote
            await this.state.set(token, state);
            return TransferBuilder(state.corridors ?? [], selected, quote);
        }
        return TransferBuilder(state.corridors ?? [], selected);
    }
}