import { Action, Component } from "../layouts/components";
import { Layout } from "../layouts/layout";
import { L } from "../layouts/lego.builder";
import { Constants } from "../../core/commons/constants";

export function HomeBuilder(
    pendingTransfer: number,
    transferHistory: number,
    paymentMethods: boolean
): Layout {
    return {
        screenId: 'home',
        layoutVersion: 1,
        backgroundColor: 'rrmBackground',
        navbar: {
            title: '',
        },
        components: [
            L.column({
                alignment: 'left',
                specs: {
                    backgroundColor: 'rrmBackground',
                },
                children: [
                    L.column({
                        alignment: 'left',
                        specs: {
                            backgroundColor: 'rrmForeground',
                        },
                        children: [
                            L.text({
                                text: 'International transfers',
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
                            L.text({
                                text: 'Send funds to your recipients with convenience and flexibility',
                                style: 'rrmBody',
                                specs: {
                                    color: 'rrmTextSecondary',
                                    margin: {
                                        top: 16,
                                        left: 16,
                                        right: 16
                                    }
                                }
                            }),
                            L.button({
                                text: 'Start a transfer',
                                style: 'rrmButtonPrimary',
                                specs: {
                                    margin: {
                                        top: 16,
                                        left: 16,
                                        right: 16,
                                        bottom: 16
                                    }
                                },
                                action: {
                                    onClick: {
                                        type: 'navigate',
                                        url: `${Constants.SERVER_BASE_URL}/transfer`
                                    }
                                }
                            })
                        ]
                    }),
                    L.row({
                        alignment: 'center',
                        action: {
                            onClick: {
                                type: 'navigate',
                                url: '/#'
                            }
                        },
                        specs: {
                            backgroundColor: 'rrmForeground',
                            margin: {
                                top: 16
                            }
                        },
                        children: [
                            L.image({
                                src: 'recipients',
                                width: 20,
                                height: 20,
                                specs: {
                                    color: 'rrmIcon',
                                    margin: {
                                        top: 32,
                                        bottom: 32,
                                        left: 16
                                    }
                                }
                            }),
                            L.text({
                                text: 'Recipients',
                                style: 'rrmBodyBold',
                                specs: {
                                    color: 'rrmTextPrimary',
                                    margin: {
                                        left: 16
                                    }
                                }
                            }),
                            L.spacer(),
                            L.image({
                                src: 'chevron_right',
                                width: 20,
                                height: 20,
                                specs: {
                                    color: 'rrmIcon',
                                    margin: {
                                        right: 16
                                    }
                                }
                            })
                        ]
                    }),
                    L.column({
                        alignment: 'left',
                        specs: {
                            backgroundColor: 'rrmForeground',
                            margin: {
                                top: 16
                            }
                        },
                        action: {
                            onClick: {
                                type: 'navigate',
                                url: '/#'
                            }
                        },
                        children: homeMenu(pendingTransfer, transferHistory, paymentMethods)
                    }),
                    L.spacer(),
                    L.text({
                        text: 'To keep your money safe, only send money to those you know and trust.',
                        style: 'rrmBodySmall',
                        specs: {
                            color: 'rrmTextSecondary',
                            margin: {
                                left: 16,
                                right: 16
                            }
                        }
                    }),
                    L.text({
                        text: 'Brightwell is a technology provider and not a bank or other regulated financial institution. All regulated internation transfer services associated with ReadyRemit@ are provided by The Bancorp Bank N.A. Terms and Conditions apply.',
                        style: 'rrmBodySmall',
                        specs: {
                            color: 'rrmTextSecondary',
                            margin: {
                                left: 16,
                                right: 16,
                                top: 8
                            }
                        }
                    }),
                    L.text({
                        text: 'v10.0',
                        style: 'rrmBodySmall',
                        specs: {
                            color: 'rrmTextSecondary',
                            margin: {
                                left: 16,
                                right: 16,
                                top: 8,
                                bottom: 16
                            }
                        }
                    }),
                ],

            })
        ]
    }
}

function homeMenu(
    pendingTransfer: number,
    transferHistory: number,
    paymentMethods: boolean
): Component[] {
    var components: Component[] = [];

    if (pendingTransfer > 0) {
        components.push(
            homeMenuItem(
                "Pending transfers",
                {
                    onClick: {
                        type: 'navigate',
                        url: '/#'
                    }
                },
                pendingTransfer
            ));

        if (transferHistory > 0 || paymentMethods) {
            components.push(L.divider())
        }
    }

    if (transferHistory > 0) {
        components.push(
            homeMenuItem(
                "Transfer History",
                {
                    onClick: {
                        type: 'navigate',
                        url: '/#'
                    }
                },
                transferHistory
            ));

        if (paymentMethods) {
            components.push(L.divider())
        }
    }

    if (paymentMethods) {
        components.push(
            homeMenuItem(
                "Payment Methods",
                {
                    onClick: {
                        type: 'navigate',
                        url: '/#'
                    }
                }
            ));
    }

    components.push(
        L.divider(),
        homeMenuItem(
            "Settings",
            {
                onClick: {
                    type: 'navigate',
                        url: `${Constants.SERVER_BASE_URL}/home/settings`
                }
            }
        )
    )
    return components
}

function homeMenuItem(
    text: string,
    action: Action,
    count?: number,
): Component {
    return L.row({
        alignment: 'center',
        specs: {
            backgroundColor: 'rrmForeground',
        },
        action: action,
        children: [
            L.text({
                text,
                style: 'rrmBody',
                specs: {
                    color: 'rrmTextPrimary',
                    margin: {
                        top: 16,
                        left: 16,
                        bottom: 16
                    }
                }
            }),
            L.spacer(),
            L.text({
                text: count ? count.toString() : '',
                style: 'rrmBody',
                specs: {
                    color: 'rrmTextSecondary',
                    margin: {
                        right: 16
                    }
                }
            }),
            L.image({
                src: 'chevron_right',
                width: 20,
                height: 20,
                specs: {
                    color: 'rrmPrimary',
                    margin: {
                        right: 16
                    }
                }
            })
        ]
    })
}