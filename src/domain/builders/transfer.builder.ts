import { platform } from "os";
import { ActionDescriptor } from "../descriptors/action.descriptor";
import { Component } from "../layouts/components";
import { Layout } from "../layouts/layout";
import { L } from "../layouts/lego.builder";
import { Corridor, Country } from "../model/corridor";
import { Quote } from "../model/transfers";
import { Constants } from "../../core/commons/constants";

export function TransferBuilder(
    corridors: Corridor[],
    selectedCorridor?: Corridor,
    quote?: Quote
): Layout {
    return {
        screenId: 'transfer',
        layoutVersion: 1,
        backgroundColor: 'rrmBackground',
        navbar: {
            title: ''
        },
        components: [
            L.column({
                alignment: 'left',
                specs: {
                    backgroundColor: 'rrmBackgroundColor'
                },
                children: [
                    L.column({
                        specs: {
                            backgroundColor: 'rrmForeground'
                        },
                        children: [
                            L.text({
                                text: "Start a transfer",
                                style: 'rrmScreenTitle',
                                specs: {
                                    color: 'rrmTextPrimary',
                                    margin: {
                                        top: 16,
                                        left: 16,
                                        right: 16
                                    }
                                }
                            }),
                            L.countryDropdown({
                                data: getUniqueDestinationCountries(corridors),
                                selectedCountry: selectedCorridor?.destinationCountry,
                                isOpen: false,
                                action: {
                                    onChange: {
                                        type: 'url',
                                        url: `${Constants.SERVER_BASE_URL}/transfer/select-country`,
                                        query: 'selectedCountry'
                                    }
                                },
                            }),
                            ...getCurrencyFields(selectedCorridor?.destinationCountry, quote),
                            L.image({
                                src: 'close',
                                width: 20,
                                height: 16,
                                specs: {
                                    color: 'rrmTransparent',
                                }
                            })
                        ]
                    }),
                    L.spacer()
                ]
            }),
            ...footer(selectedCorridor?.destinationCountry)
        ]
    }
}

function getUniqueDestinationCountries(corridors: Corridor[]): Country[] {
    const uniqueCountriesMap = corridors.reduce((map, corridor) => {
        const iso3Code = corridor.destinationCountry.iso3Code;

        if (!map.has(iso3Code)) {
            map.set(iso3Code, corridor.destinationCountry);
        }

        return map;
    }, new Map<string, Country>());

    return Array.from(uniqueCountriesMap.values());
}


function getCurrencyFields(selected?: Country, quote?: Quote): Component[] {
    if (selected == undefined || selected == null || quote == undefined || quote == null) {
        return [];
    } else {
        return [
            L.currencyFieldComponent({
                amount: quote.sendAmount,
                placeholder: "You send",
                country: {
                    iso3Code: "USA",
                    name: "United States"
                },
                action: {
                    onChange: {
                        type: 'url',
                        url: `${Constants.SERVER_BASE_URL}/transfer/fill-send-amount`,
                        query: 'sendAmount'
                    }
                }
            }),
            L.currencyFieldComponent({
                amount: quote.receiveAmount,
                placeholder: "They Receive",
                country: selected,
                action: {
                    onChange: {
                        type: 'url',
                        url: `${Constants.SERVER_BASE_URL}/transfer/fill-receive-amount`,
                        query: 'receiveAmount'
                    }
                }
            }),
            L.quoteViewComponent({
                quote: quote
            })
        ];
    }
}

function footer(selected?: Country): Component[] {
    if (selected == undefined || selected == null) {
        return [];
    }

    return [
        L.spacer(),
        L.button({
            text: "Continue",
            style: "rrmPrimary",
            isEnabled: true,
            action: {
                onClick: {
                    type: 'navigate',
                    url: ''
                }
            },
            specs: {
                margin: {
                    top: 24,
                    left: 16,
                    right: 16
                }
            }
        }),
        L.text({
            text: "¹ Funds tipically arrive whithin 30 minutes but may take up to 2 business days. Timing varies based on the destination country and is subject to banking hours and regulatory compliance.",
            style: 'rrmBodySmall',
            specs: {
                color: "rrmTextSecondary",
                margin: {
                    top: 24,
                    left: 16,
                    right: 16
                }
            }
        }),
        L.row({
            alignment: 'center',
            children: [
                L.text({
                    text: "² Fees vary depending on the destination country and the amount you are sending. Some banks may charge additional fees upon deposit. Foreign taxes may apply",
                    style: 'rrmBodySmall',
                    specs: {
                        color: "rrmTextSecondary",
                        margin: {
                            top: 16,
                            left: 16,
                            right: 16
                        }
                    }
                }),
                L.spacer()
            ]
        }),
        L.row({
            alignment: 'center',
            specs: {
                margin: {
                    top: 24,
                    left: 16,
                    right: 16
                }
            },
            children: [
                L.text({
                    text: "Learn more",
                    style: "rrmBodySmall",
                    specs: {
                        color: 'rrmPrimary',
                    }, 
                    action: {
                        onClick: {
                            type: 'bottomSheet',
                            layout: {
                                screenId: "learn-more-modal",
                                layoutVersion: 1,
                                backgroundColor: "rrmBackgroundColor",
                                navbar: {
                                    title: ''
                                },
                                components: [
                                    L.column({
                                        children: [
                                            L.row({
                                                specs: {
                                                    backgroundColor: 'rrmPrimary'
                                                },
                                                children: [
                                                    L.image({
                                                        src: 'close',
                                                        width: 20,
                                                        height: 20,
                                                        specs: {
                                                            color: 'rrmForeground',
                                                            margin: {
                                                                left: 16
                                                            }
                                                        }
                                                    }),
                                                    L.spacer(),
                                                    L.text({
                                                        text: "Learn more",
                                                        style: 'rrmBodyBold',
                                                        specs: {
                                                            color: "rrmForeground",
                                                            margin: {
                                                                top: 16,
                                                                bottom: 16
                                                            }
                                                        }
                                                    }),
                                                    L.spacer(),
                                                    L.image({
                                                        src: 'close',
                                                        width: 20,
                                                        height: 20,
                                                        specs: {
                                                            color: 'rrmTransparent',
                                                            margin: {
                                                                right: 16
                                                            }
                                                        }
                                                        
                                                    }),
                                                ]
                                            }),
                                            L.text({
                                                text: "Deposit via debit card: \n\n• Ensure you are prepared with the recipient's debit card details, including the cardholder name, card number, and expiration date\n\n• Recipient's card must be a Visa or Mastercard debit card.\n\n• Funds are securely deposited into the linked bank account of the debit card/\n\n• Transfers usually complete in less than 30 minutes, though it may take up to 2 business days. Weekends and holidays may afffect this timeframe.",
                                                style: 'rrmBodySmall',
                                                specs: {
                                                    color: 'rrmTextSecondary',
                                                    margin: {
                                                        top: 16,
                                                        bottom: 16,
                                                        right: 16,
                                                        left: 16
                                                    }
                                                }
                                            })
                                        ]
                                    })
                                ]
                            }
                        }
                    }
                }),
                L.text({
                    text: "about delivery methods.",
                    style: "rrmBodySmall",
                    specs: {
                        color: "rrmTextSecondary",
                        margin: {
                            left: 4
                        }
                    }
                }),
                L.spacer()
            ]
        })
    ]
}