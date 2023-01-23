import axios from "axios";
import { AccountPost } from "./model/AccountPost";
import { POST_CREATE_ACCOUNT_API, PUT_STATUS_ACCOUNT_API } from "../../config/API";

export class AccountService {
    public static async postAccount(account: AccountPost) {
        try {
            return await axios.post(POST_CREATE_ACCOUNT_API(), account);
        } catch (error) {
            throw error;
        }
    }

    public static async putAccountStatus(codeLocalAccount: string, codeInternationalAccount: string) {
        try {
            return await axios.put(PUT_STATUS_ACCOUNT_API(codeLocalAccount, codeInternationalAccount));
        } catch (error) {
            throw error;
        }
    }
}