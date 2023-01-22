import axios from 'axios';
import IInterestRate  from '../models/interestRate.model';

const baseUrl = 'http://localhost:8081/api/interest-rate';

export default class InterestRateService {
    public static async getInterestRates(): Promise<IInterestRate[]> {
        const response = await axios.get(baseUrl);
        return response.data;
    }

    public static async getInterestRatesByName(name: string): Promise<IInterestRate[]> {
        const response = await axios.get(`${baseUrl}/name/${name}`);
        return response.data;
    }


}