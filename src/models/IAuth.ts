export type TControl = 'email' | 'number' | 'text' | 'select' | 'multiline';

export default interface IAuthState {
    token: string;
    form: IAuthFormRecord[]
}

export interface IAuthLogin {
    phone: string;
    otp?: number
}

export interface IAuthFormRecord {
    fieldName: string;
    type: TControl
    value: string
    options?: string[]
}

