const HOST = "http://localhost:8080"

export const ACCOUNT_SIGNATURE_CONTROLLER_API_PUT = (identificationType: string, identification: string, codeLocalAccount: string, codeInternationalAccount: string) => `${HOST}/api/${identificationType}/${identification}/${codeLocalAccount}/${codeInternationalAccount}`;
export const ACCOUNT_SIGNATURE_CONTROLLER_API_POST = () => `${HOST}/api/account/signature`;
export const ACCOUNT_SIGNATURE_CONTROLLER_API_GET = (identificationType: string, identification: string) => `${HOST}/api/account/signature/${identificationType}/${identification}`;