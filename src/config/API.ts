const HOST = "https://7a43-157-100-141-217.sa.ngrok.io"

export const GET_ACCOUNT_STATEMENT_API = (accountCode: string) =>
`${HOST}/api/account/statement/${accountCode}`;

export const POST_CREATE_ACCOUNT_API = () =>
`${HOST}/api/account`;