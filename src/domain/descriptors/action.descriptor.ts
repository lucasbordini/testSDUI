import { Layout } from "../layouts/layout";

export interface ActionDescriptor {
    id: string;
    type: 'bottomSheet' | 'dialog' |  'none';
    layout?: Layout;
}

export interface BaseComponentAction {
    type: 'navigate' | 'url' | 'bottomSheet' | 'dialog';
}

export interface NavigateAction extends BaseComponentAction {
    type: 'navigate';
    url: string;
    
}

export interface UrlAction extends BaseComponentAction {
    type: 'url';
    url: string;
    query?: String
    body?: String
}

export interface BottomSheetAction extends BaseComponentAction {
    type: 'bottomSheet';
    layout: Layout;
}

export interface DialogAction extends BaseComponentAction {
    type: 'dialog';
    layout: Layout;
}

export type ComponentAction = NavigateAction | UrlAction | BottomSheetAction | DialogAction;