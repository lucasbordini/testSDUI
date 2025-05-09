import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { GetTransferUseCase } from "src/domain/useCase/get.transfer.usecase";
import { TransferController } from "src/interface/controllers/transfer.controller";
import { RedisModule } from "./redis.module";
import { TransferService } from "src/data/service/transfer.service";
import { GetQuoteUseCase } from "src/domain/useCase/get.quote.usecase";

@Module({
    imports: [HttpModule, RedisModule],
    controllers: [TransferController],
    providers: [TransferService, GetTransferUseCase, GetQuoteUseCase]
})
export class TransferModule { }