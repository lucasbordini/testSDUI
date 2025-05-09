import { Corridor } from "./corridor";
import { RecipientList } from "./recipient.list";
import { SenderDetails } from "./sender.details";
import { SenderPolicies } from "./sender.polocies";
import { Transfers } from "./transfers";

export class InitialResponse {
    policies: SenderPolicies;
    recipients: RecipientList;
    details: SenderDetails;
    corridors: Corridor[];
    transfers: Transfers;

    constructor(policies: SenderPolicies, recipients: RecipientList, details: SenderDetails, corridors: Corridor[], transfers: Transfers) {
        this.policies = policies;
        this.recipients = recipients;
        this.details = details;
        this.corridors = corridors;
        this.transfers = transfers;
    }
}