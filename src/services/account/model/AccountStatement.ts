export interface AccountStament {
    fullname: string
    accountCode: string
    clientIdentification: string,
    lastCutOffDate: Date,
    actualCutOffDate: Date,
    lastBalance: number,
    interestRate: number,
    presentBalance: number,
    promBalance: number,
    transactions: {
        type: string,
        description: string,
        movement: string,
        amount: number,
        balance: number
    }[]
}