import { AdditionalField } from "./additional.field";

export interface RecipientList {
    recipients: Recipient[];
}

export interface Recipient {
    recipientId: string;
    senderId?: string;
    firstName?: string;
    lastName?: string;
    fields?: AdditionalField[];
    recipientAccounts?: RecipientAccount[];
}

export interface RecipientAccount {
    recipientAccountId?: string;
    accountNumber?: string;
    transferMethod?: string;
    fields: AdditionalField[];
    dstCurrencyIso3Code?: string;
    dstCountryIso3Code?: string;
  }