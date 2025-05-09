import { AdditionalField } from "./additional.field";

export enum CustomerFundingSource {
    PREFUNDING = 'PREFUNDING',
    ACCOUNT = 'ACCOUNTFUNDING'
}

export interface SenderDetails {
    requestId?: string;
  fields: AdditionalField[];
  senderId: string;
  senderType: string;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  kycStatus?: string;
  customerId?: string;
  customerName?: string;
  customerFundingSource?: CustomerFundingSource;
}