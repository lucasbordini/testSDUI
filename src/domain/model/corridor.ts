export interface Corridor {
    destinationCountry: Country;
    sourceCurrency: Currency[];
    destinationCurrency: Currency[];
    transferMethod: string;
  }
  
  export interface Country {
    name: string;
    iso3Code: string;
  }
  
  export interface Currency {
    name: string;
    iso3Code: string;
    symbol: string;
    decimalPlaces: number;
    currencyConfigurations?: CurrencyConfiguration[];
  }
  
  export interface CurrencyConfiguration {
    rspName: string;
    decimalPlaces: number;
    roundDirection: string;
  }