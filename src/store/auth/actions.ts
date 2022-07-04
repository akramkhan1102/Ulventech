import { IAuthFormRecord } from "~/models/IAuth"

export enum ActionTypes {
    AUTH_FORM_GET = 'AUTH_FORM_GET',
    AUTH_FORM_SET = 'AUTH_FORM_SET',
    AUTH_FORM_POST = 'AUTH_FORM_POST'
}

export interface IActionFormGet {
    type: ActionTypes.AUTH_FORM_GET,
}

export interface IActionFormSet {
    type: ActionTypes.AUTH_FORM_SET,
    payload: IAuthFormRecord[]
}

export interface IActionFormPost {
    type: ActionTypes.AUTH_FORM_POST,
    payload: Record<string, string>
}

export function getForm (): IActionFormGet {
    return {
        type: ActionTypes.AUTH_FORM_GET
    }
}

export function setForm (payload: IAuthFormRecord[]): IActionFormSet {
    return {
        type: ActionTypes.AUTH_FORM_SET,
        payload
    }
}

export function postForm (payload: Record<string, string>): IActionFormPost {
    return {
        type: ActionTypes.AUTH_FORM_POST,
        payload
    }
}


export type Action =
IActionFormGet | 
IActionFormSet |
IActionFormPost