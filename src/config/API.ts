const HOST = "http://localhost:8080"

export const GET_ACCOUNT_STATEMENT_API = (accountCode: string) =>
`${HOST}/api/account/statement/${accountCode}`;

export const POST_CREATE_ACCOUNT_API = () =>
`${HOST}/api/account`;