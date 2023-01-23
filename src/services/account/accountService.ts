import axios from "axios";
import { AccountPost } from "./model/AccountPost";
import { POST_CREATE_ACCOUNT_API } from "../../config/API";

export class AccountService {
    public static async postAccount(account: AccountPost) {
        try {
            return await axios.post(POST_CREATE_ACCOUNT_API(), account);
        } catch (error) {
            throw error;
        }
    }
}