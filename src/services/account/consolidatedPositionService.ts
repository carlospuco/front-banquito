import axios from "axios";
import { GET_ACCOUNT_CONTROLLER_API } from "../../config/API";
import { ResponseFormat } from "./ResponseFormat";
import { ConsolidatedPosition } from "./model/ConsolidatedPosition";

export class ConsolidatedPositionService {
    public static async getConsolidatedPosition(typeIdentification: string, identification: string) {
        try {
            return await axios.get<ResponseFormat<ConsolidatedPosition[]>>(GET_ACCOUNT_CONTROLLER_API(typeIdentification, identification));
        } catch (error) {
            throw error;
        }
    }
}