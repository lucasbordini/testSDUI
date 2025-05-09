import { Body, Controller, Get, Post, Query, Headers } from "@nestjs/common";
import { QuoteBy } from "src/data/cache/session.state";
import { AuthRequest } from "src/domain/model/auth.request";
import { GetQuoteUseCase } from "src/domain/useCase/get.quote.usecase";
import { GetTransferUseCase } from "src/domain/useCase/get.transfer.usecase";

@Controller('transfer')
export class TransferController {

    constructor(
        private readonly getTransferUseCase: GetTransferUseCase,
        private readonly getQuoteUseCase: GetQuoteUseCase
    ) { }

    @Post()
    async auth(@Body() request: AuthRequest) {
        return this.getTransferUseCase.invoke(
            request.auth_token,
            ""
        );
    }

    @Get('select-country')
    async onSelectCountry(
        @Query('selectedCountry') selectedCountry: string,
        @Headers('Authorization') authorization: string) {
            return this.getTransferUseCase.invoke(
                authorization,
                selectedCountry
            );
    }

    @Get('fill-send-amount')
    async onFillSendAmount(
        @Query('sendAmount') sendAmount: string,
        @Headers('Authorization') authorization: string) {
            return this.getQuoteUseCase.invoke(
                authorization,
                sendAmount,
                QuoteBy.SEND_AMOUNT
            );
    }

    @Get('fill-receive-amount')
    async onFillReceiveAmount(
        @Query('receiveAmount') receiveAmount: string,
        @Headers('Authorization') authorization: string) {
            return this.getQuoteUseCase.invoke(
                authorization,
                receiveAmount,
                QuoteBy.RECEIVE_AMOUNT
            );
    }
}