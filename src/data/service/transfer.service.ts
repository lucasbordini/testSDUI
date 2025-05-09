import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { Constants } from "src/core/commons/constants";
import { Quote } from "src/domain/model/transfers";
import { QuoteBy } from "../cache/session.state";
import { firstValueFrom } from "rxjs";

@Injectable()
export class TransferService {

    private baseURL: string

    constructor(
        private readonly http: HttpService,
    ) {
        this.baseURL = Constants.BASE_URL;
    }

    async quote(
        token: string,
        currency: string,
        country: string,
        quoteBy: QuoteBy,
        amount: string,
        method: string
    ): Promise<Quote> {
        const url = this.baseURL + `/quote?srcCurrencyIso3Code=USD&dstCurrencyIso3Code=${currency}&dstCountryIso3Code=${country}&quoteBy=${quoteBy}&transferMethod=${method}&amount=${amount}`
        const { data } = await firstValueFrom(
            this.http.get(url, {
                headers: { Authorization: `Bearer ${token}`}
            })
        );
        return data;
    }
}