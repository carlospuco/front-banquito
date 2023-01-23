const HOST = "http://localhost:9002"

export const PUT_TRANSACTION = (codeUniqueTransaction: string) =>
`${HOST}/api/transaction/${codeUniqueTransaction}`;

export const POST_TRANSACTION = () =>
`${HOST}/api/transaction`;

export const GET_TRANSACTION = (codeLocalAccount: string, fromDate: Date, toDate: Date) =>
`${HOST}/api/transaction/${codeLocalAccount}/${fromDate}/${toDate}`;