import axios from "axios";
import { GET_TRANSACTION, POST_TRANSACTION, PUT_TRANSACTION } from "../../config/API";
import { TransactionStatement } from "./model/TransactionStatement";
import { ResponseFormat } from "./ResponseFormat";

export class AccountStatementService {
   
    public static async putTransaction(codeUniqueTransaction: string) {
        try {
            return await axios.put(PUT_TRANSACTION(codeUniqueTransaction));
        } catch (error) {
            throw error;
        }
    }

    public static async postTransaction() {
        try {
            return await axios.post<ResponseFormat<TransactionStatement[]>>(POST_TRANSACTION());
        } catch (error) {
            throw error;
        }
    }

    public static async getTransaction(codeLocalAccount: string, fromDate: Date, toDate: Date) {
        try {
            return await axios.get(GET_TRANSACTION(codeLocalAccount, fromDate, toDate));
        } catch (error) {
            throw error;
        }
    }

}