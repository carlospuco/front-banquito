const HOST = "http://localhost:8080"

export const GET_ACCOUNT_STATEMENT_API = (accountCode: string) =>
`${HOST}/api/account/statement/${accountCode}`;