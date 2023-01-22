import AccountStatementJSON from "./accountStatement.json";

export class AccountStatementService {

    public static async getStatement(accountCode: string) {
        return AccountStatementJSON.find(data => data.accountCode === accountCode);
    }

}