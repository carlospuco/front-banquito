const HOST = "http://localhost:9002"

export const GET_ACCOUNT_STATEMENT_API = (accountCode: string) =>
`${HOST}/api/account/statement/${accountCode}`;

export const POST_CREATE_ACCOUNT_API = () =>
`${HOST}/api/account`;

export const GET_ACCOUNT_CONTROLLER_API = (identificationType: string, identification: string) =>
`${HOST}/api/account/id/${identificationType}/${identification}`;

export const GET_INVESTMENT_INTEREST_CONTROLLER_API = (codeLocalAccount: string, days: number, capital: number, ear: number) =>
`${HOST}/api/transaction/interest/investment/${codeLocalAccount}/${days}/${capital}/${ear}`;

export const GET_INTEREST_CONTROLLER_API = (codeLocalAccount: string, from: string, to: string) =>
`${HOST}/api/transaction/interest/${codeLocalAccount}/${from}/${to}`;

export const GET_TRANSACTION_CONTROLLER_API = (codeLocalAccount: string, from: string, to: string) =>
`${HOST}/api/transaction/${codeLocalAccount}/${from}/${to}`;

export const POST_TRANSACTION_API = () =>
`${HOST}/api/account`;
export const PUT_TRANSACTION = (codeUniqueTransaction: string) =>
`${HOST}/api/transaction/${codeUniqueTransaction}`;

export const POST_TRANSACTION = () =>
`${HOST}/api/transaction`;

export const GET_TRANSACTION = (codeLocalAccount: string, fromDate: Date, toDate: Date) =>
`${HOST}/api/transaction/${codeLocalAccount}/${fromDate}/${toDate}`;
