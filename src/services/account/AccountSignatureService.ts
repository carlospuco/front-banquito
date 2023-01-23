import axios from "axios";
import {
    GET_ACCOUNT_SIGNATURE_API,
  POST_CREATE_ACCOUNT_API,
  PUT_ACCOUNT_SIGNATURE_API,
} from "../../config/API";
import { AccountSignaturePost } from "./AccountSignaturePost";
import { AccountSignaturePut } from "./AccountSignaturePut";

export class AccountSignature {
  public static async putAccountSignature(
    identificationType: string,
    identification: string,
    codeLocalAccount: string,
    codeInternationalAccount: string,
    accountSigature: AccountSignaturePut
  ) {
    try {
      return await axios.put(
        PUT_ACCOUNT_SIGNATURE_API(
          identificationType,
          identification,
          codeLocalAccount,
          codeInternationalAccount
        ),
        accountSigature
      );
    } catch (error) {
      throw error;
    }
  }

  public static async postAccountSignature(
    accountSigature: AccountSignaturePost
  ) {
    try {
      return await axios.post(POST_CREATE_ACCOUNT_API(), accountSigature);
    } catch (error) {
      throw error;
    }
  }

  public static async getAccountSignature(identificationType: string, identification: string) {
    try {
      return await axios.get(GET_ACCOUNT_SIGNATURE_API(identificationType, identification));
    } catch (error) {
      throw error;
    }
  }

}
