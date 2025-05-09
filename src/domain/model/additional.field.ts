export type DynamicValue =
    | { type: 'string', value: string }
    | { type: 'number', value: number }
    | { type: 'phoneNumber', value: PhoneNumber };

export interface PhoneNumber {
    countryIso3Code: string;
    countryPhoneCode: string;
    number: string;
};

export interface AdditionalField {
    type: string;
    id: string;
    name?: string;
    value: DynamicValue;
    displayValue?: string;
}