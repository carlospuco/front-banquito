import axios from "axios";
import { GET_ACCOUNT_CONTROLLER_API, GET_INTEREST_CONTROLLER_API, GET_INVESTMENT_INTEREST_CONTROLLER_API } from "../../config/API";
import { ResponseFormat } from "./ResponseFormat";
import { PaymentDebitCard } from "./model/PaymentDebitCard";
import { PaymentCheckbook } from "./model/PaymentCheckbook";

export class PaymentCheckbookService {
    public static async getPaymentCheckbook(codeLocalAccount: string, from: string, to: string) {
        try {
            return await axios.get<ResponseFormat<PaymentCheckbook[]>>(GET_INTEREST_CONTROLLER_API(codeLocalAccount, from, to));
        } catch (error) {
            throw error;
        }
    }
}