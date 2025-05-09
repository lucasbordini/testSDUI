import { ComponentAction } from "../descriptors/action.descriptor";
import { Country } from "../model/corridor";
import { Amount, Quote } from "../model/transfers";

export interface BaseSpecs {
    margin?: Spacing;
    color?: string;
    backgroundColor?: string;
}

export type VerticalAlignment = 'top' | 'center' | 'bottom';
export type HorizontalAlignment = 'left' | 'center' | 'right';

export type Component =
    | ColumnComponent
    | RowComponent
    | ImageComponent
    | ButtonComponent
    | TextComponent
    | SpacerComponent
    | DividerComponent
    | CountryDropdownComponent
    | CurrencyFieldComponent
    | QuoteViewComponent;

export interface TextComponent { type: 'text'; specs: BaseSpecs & { text: string; style: string, action?: Action } }
export interface ImageComponent { type: 'image'; specs: BaseSpecs & { src: string; width: number; height: number } }
export interface ButtonComponent { type: 'button'; specs: BaseSpecs & { text: string; style: string; action: Action, isEnabled: boolean } }
export interface RowComponent { type: 'row'; specs: BaseSpecs & { alignment: VerticalAlignment; action?: Action }; children: Component[] }
export interface ColumnComponent { type: 'column'; specs: BaseSpecs & { alignment: HorizontalAlignment; action?: Action }; children: Component[] }
export interface SpacerComponent { type: 'spacer' }
export interface DividerComponent { type: 'divider'; specs: BaseSpecs }
export interface CountryDropdownComponent { type: 'country-dropdown'; specs: BaseSpecs & { data: Country[], selectedCountry?: Country, action: Action, isOpen: boolean } }
export interface CurrencyFieldComponent { type: 'currency-field'; specs: BaseSpecs & { amount: Amount, placeholder: string, country: Country, action: Action }}
export interface QuoteViewComponent { type: 'quote-view'; specs: BaseSpecs & { quote: Quote }}

export interface Action {
    onClick?: ComponentAction;
    onChange?: ComponentAction;
    onDebounceChange?: ComponentAction;
}

export interface Spacing {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
}