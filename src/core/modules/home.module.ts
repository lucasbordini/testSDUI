import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { HomeRepository } from "src/data/repository/home.repository";
import { HomeService } from "src/data/service/home.service";
import { GetHomeUseCase } from "src/domain/useCase/get.home.usecase";
import { HomeController } from "src/interface/controllers/home.controller";
import { RedisModule } from "./redis.module";

@Module({
    imports: [HttpModule, RedisModule],
    controllers: [HomeController],
    providers: [HomeService, HomeRepository, GetHomeUseCase]
})
export class HomeModule { }