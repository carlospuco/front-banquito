const HOST = "http://localhost:9002"

export const GET_ACCOUNT_STATEMENT_API = (accountCode: string) =>
`${HOST}/api/account/statement/${accountCode}`;

export const POST_CREATE_ACCOUNT_API = () =>
`${HOST}/api/account`;

export const PUT_TRANSACTION = (codeUniqueTransaction: string) =>
`${HOST}/api/transaction/${codeUniqueTransaction}`;

export const POST_TRANSACTION = () =>
`${HOST}/api/transaction`;

export const GET_TRANSACTION = (codeLocalAccount: string, fromDate: Date, toDate: Date) =>
`${HOST}/api/transaction/${codeLocalAccount}/${fromDate}/${toDate}`;
