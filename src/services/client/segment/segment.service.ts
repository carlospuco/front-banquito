import axios from "axios";

const baseUrl = "http://localhost:8083/api/segments";

export default class SegmentService {
  public static async getSegmentsByName(name: string) {
    const response = await axios.get(`${baseUrl}/name/${name}`);
    return response.data;
  }
}