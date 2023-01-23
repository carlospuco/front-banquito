import axios from "axios";
import { AccountStament } from "./model/AccountStatement";
import { GET_ACCOUNT_STATEMENT_API } from "../../config/API";
import { ResponseFormat } from "./ResponseFormat";

export class AccountStatementService {

    public static async getStatements(accountNumber: string) {
        try {
            return await axios.get<ResponseFormat<AccountStament[]>>(GET_ACCOUNT_STATEMENT_API(accountNumber));
        } catch (error) {
            throw error;
        }
    }

}