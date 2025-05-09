import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { firstValueFrom } from "rxjs";
import { Constants } from "src/core/commons/constants";
import { Corridor } from "src/domain/model/corridor";
import { RecipientList } from "src/domain/model/recipient.list";
import { SenderDetails } from "src/domain/model/sender.details";
import { SenderPolicies } from "src/domain/model/sender.polocies";
import { Transfers } from "src/domain/model/transfers";

@Injectable()
export class HomeService {
    private baseURL: string

    constructor(
        private readonly http: HttpService,
    ) { 
        this.baseURL = Constants.BASE_URL;
    }

    async policies(token: string): Promise<SenderPolicies> {
        const { data } = await firstValueFrom(
            this.http.get(this.baseURL + '/accept-policies', {
                headers: { Authorization: `Bearer ${token}` }
            }));
        return data;
    };

    async recipients(token: string): Promise<RecipientList> {
        const { data } = await firstValueFrom(
            this.http.get(this.baseURL + '/recipients-with-accounts', {
                headers: { Authorization: `Bearer ${token}` }
            }));
        return data;
    }

    async details(token: string): Promise<SenderDetails> {
        const { data } = await firstValueFrom(
            this.http.get(this.baseURL + '/senders/authenticated', {
                headers: { Authorization: `Bearer ${token}` }
            }));
        return data;
    }

    async corridors(token: string): Promise<Corridor[]> {
        const { data } = await firstValueFrom(
            this.http.get(this.baseURL + '/corridors', {
                headers: { Authorization: `Bearer ${token}` }
            }));
        return data;
    }

    async transfers(token: string): Promise<Transfers> {
        const { data } = await firstValueFrom(
            this.http.get(this.baseURL + '/transfers', {
                headers: { Authorization: `Bearer ${token}` }
            }));
        return data;
    }
}