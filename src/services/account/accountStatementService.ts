import axios from "axios";
import AccountStatementJSON from "./accountStatement.json";
import { AccountStament } from "./model/AccountStatement";
import { ResponseFormat } from "./ResponseFormat";
import { ACCOUNT_SIGNATURE_CONTROLLER_API_POST, ACCOUNT_SIGNATURE_CONTROLLER_API_PUT } from "../../config/API";

export class AccountStatementService {

    public static async getStatements(identificationType: string, identification: string, codeLocalAccount: string, codeInternationalAccount: string, body: { role: string, status: string }) {
        return await axios.put(ACCOUNT_SIGNATURE_CONTROLLER_API_PUT(identificationType, identification, codeLocalAccount, codeInternationalAccount), body)
        // return AccountStatementJSON.filter(data => data.accountCode === accountCode);
    }

    public static async postSignatur(body: {
        codeLocalAccount: string, codeInternationalAccount: string, identificationType: string, identification: string, role: string, startDate: Date,
    }) {
        return await axios.post(ACCOUNT_SIGNATURE_CONTROLLER_API_POST(), body);
    }

}