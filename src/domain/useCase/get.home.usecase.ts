import { Injectable } from "@nestjs/common";
import { Layout } from "../layouts/layout";
import { HomeBuilder } from "../builders/home.builder";
import { CustomerFundingSource } from "../model/sender.details";
import { HomeRepository } from "src/data/repository/home.repository";
import { QuoteBy, SessionStateCache } from "src/data/cache/session.state";
import { InitialResponse } from "../model/auth.response";

@Injectable()
export class GetHomeUseCase {

    constructor(
        private readonly repository: HomeRepository,
        private readonly state: SessionStateCache
    ) { }

    async invoke(token: string): Promise<Layout> {
        const response = await this.repository.onAuth(token);
        const pending = response.transfers.transfers.filter((t) => t.status == "Pending" || t.status == "Initiated").length;
        const history = response.transfers.transfers.filter((t) => t.status != "Pending" && t.status != "Initiated").length;
        const isAFT = response.details.customerFundingSource == CustomerFundingSource.ACCOUNT
        await this._setState(token, response);
        return HomeBuilder(pending, history, isAFT);
    }

    async _setState(token: string, response: InitialResponse) {
        await this.state.set(token, {
            id: token,
            sender: response.details,
            recipientList: response.recipients,
            isAFT: response.details.customerFundingSource == CustomerFundingSource.ACCOUNT,
            corridors: response.corridors,
            quotes: [],
            selectedCorridor: undefined,
            selectedQuote: undefined,
            quoteBy: QuoteBy.SEND_AMOUNT
        })
    }
}