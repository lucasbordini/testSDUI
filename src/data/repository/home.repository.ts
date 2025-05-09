import { Injectable } from "@nestjs/common";
import { InitialResponse } from "src/domain/model/auth.response";
import { HomeService } from "../service/home.service";

@Injectable()
export class HomeRepository {
    constructor(
       private readonly authService: HomeService,
    ) { }

    async onAuth(token: string): Promise<InitialResponse> {
        const [terms, recipients, details, corridors, transfers] = await Promise.all([
            this.authService.policies(token),
            this.authService.recipients(token),
            this.authService.details(token),
            this.authService.corridors(token),
            this.authService.transfers(token),
        ]);


        return new InitialResponse(
            terms,
            recipients,
            details,
            corridors,
            transfers,
        );
    }
}