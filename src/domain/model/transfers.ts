import { AdditionalField } from "./additional.field";
import { Corridor, Currency } from "./corridor";
import { CustomerFundingSource } from "./sender.details";

export interface Transfers {
  requestId?: string;
  transfers: Transfer[];
  pagination: Pagination;
}

export interface Pagination {
  offset: number;
  limit: number;
  count: number;
  total: number;
}

export interface Transfer {
  transferId: string;
  confirmationNumber?: string;
  createdAt?: string;
  dateAvailable?: string;
  quote?: Quote;
  senderDetails?: SenderDetails;
  recipientDetails?: RecipientDetails;
  recipientAccountDetails?: RecipientAccount;
  customer?: Customer;
  disclaimers?: string[];
  fields?: AdditionalField[];
  status?: string;
  sendAmount?: number;
  receiveAmount?: number;
  destinationCurrency?: Currency;
  canCancel?: boolean;
  corridor?: Corridor;
}

export interface Quote {
  sourceCurrencyIso3Code: string;
  destinationCountryISO3Code: string;
  destinationCurrencyISO3Code: string;
  sendAmount: Amount;
  receiveAmount: Amount;
  rate: number;
  adjustments: Adjustment[];
  totalCost: Amount;
  disclosures: Disclosure[];
  deliverySLA: DeliverySLA;
  quoteHistoryId?: string;
  transferMethod: string;
  rsp?: string;
}

export interface Amount {
  value: number;
  currency: Currency;
}

export interface Adjustment {
  label: string;
  amount: Amount;
}

export interface Disclosure {
  dummy: string;
}

export interface DeliverySLA {
  id: string;
  name: string;
}

export interface SenderDetails {
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

export interface RecipientDetails {
  fields: AdditionalField[];
  senderId: string;
  recipientId: string;
  recipientType: string;
  firstName: string;
  lastName: string;
}

export interface RecipientAccount {
  recipientAccountId?: string;
  accountNumber?: string;
  transferMethod?: string;
  fields: AdditionalField[];
  dstCurrencyIso3Code?: string;
  dstCountryIso3Code?: string;
}

export interface Customer {
  name?: string;
  addressLine1?: string;
  addressCity?: string;
  addressState?: string;
  addressCountry?: string;
  addressZipCode?: string;
  phoneNumber?: string;
  website?: string;
}

