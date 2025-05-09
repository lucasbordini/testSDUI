import { ActionDescriptor, ComponentAction } from "../descriptors/action.descriptor";
import { Country } from "../model/corridor";
import { Amount, Quote } from "../model/transfers";
import { Action, BaseSpecs, ButtonComponent, ColumnComponent, Component, CountryDropdownComponent, CurrencyFieldComponent, DividerComponent, HorizontalAlignment, ImageComponent, QuoteViewComponent, RowComponent, SpacerComponent, Spacing, TextComponent, VerticalAlignment } from "./components";
import { Layout } from "./layout";

export const L = {
    // TEXT -----------------------------------------------------------------------
    text: ({
        text,
        style = 'body',
        specs = {},
        action
    }: {
        text: string,
        style?: string,
        action?: Action,
        specs?: Partial<BaseSpecs>
    }): TextComponent => ({
        type: 'text',
        specs: { text, style, action, ...specs },
    }),

    // IMAGE ----------------------------------------------------------------------
    image: ({
        src,
        width,
        height,
        specs = {}
    }: {
        src: string,
        width: number,
        height: number,
        specs?: Partial<BaseSpecs>
    }): ImageComponent => ({
        type: 'image',
        specs: { src, width, height, ...specs },
    }),

    // BUTTON ---------------------------------------------------------------------
    button: ({
        text,
        action,
        style = 'primary',
        specs = {},
        isEnabled = true
    }: {
        text: string,
        action: Action,
        isEnabled?: boolean,
        style?: string,
        specs?: Partial<BaseSpecs>
    }): ButtonComponent => ({
        type: 'button',
        specs: {
            text,
            style,
            action,
            isEnabled,
            ...specs,
        },
    }),

    // SPACER ---------------------------------------------------------------------
    spacer: (): SpacerComponent => ({
        type: 'spacer'
    }),

    // DIVIDER --------------------------------------------------------------------
    divider: ({
        margin
    }: {
        margin?: Spacing
    } = {}): DividerComponent => ({
        type: 'divider',
        specs: { margin },
    }),

    // ROW ------------------------------------------------------------------------
    row: ({
        children,
        alignment = 'center',
        action,
        specs = {}
    }: {
        children: Component[],
        alignment?: VerticalAlignment,
        action?: Action,
        specs?: Partial<BaseSpecs>
    }): RowComponent => ({
        type: 'row',
        specs: { alignment, action, ...specs },
        children,
    }),

    // COLUMN ---------------------------------------------------------------------
    column: ({
        children,
        alignment = 'left',
        action,
        specs = {}
    }: {
        children: Component[],
        action?: Action,
        alignment?: HorizontalAlignment,
        specs?: Partial<BaseSpecs>
    }): ColumnComponent => ({
        type: 'column',
        specs: { alignment, action, ...specs },
        children,
    }),

    countryDropdown: ({
        data,
        selectedCountry,
        isOpen,
        action
    }: {
        data: Country[],
        action: Action,
        isOpen: boolean,
        selectedCountry?: Country,
    }): CountryDropdownComponent => ({
        type: 'country-dropdown',
        specs: { data, selectedCountry, action, isOpen }
    }),

    currencyFieldComponent: ({
        amount,
        placeholder,
        country,
        action
    }: {
        amount: Amount,
        placeholder: string,
        country: Country,
        action: Action
    }) : CurrencyFieldComponent => ({
        type: 'currency-field',
        specs: { amount, placeholder, country, action }
    }),

    quoteViewComponent: ({
        quote
    } : {
        quote: Quote
    }): QuoteViewComponent => ({
        type: 'quote-view',
        specs: { quote }
    }),

    // ON LOAD ACTION BUILDERS ------------------------------------------------------------
    actionBottomSheet: ({
        id,
        layout
    }: {
        id: string,
        layout: Layout
    }): ActionDescriptor => ({ id, type: 'bottomSheet', layout }),

    dialogAlert: ({
        id,
        layout
    }: {
        id: string,
        layout: Layout
    }): ActionDescriptor => ({ id, type: 'dialog', layout }),
};