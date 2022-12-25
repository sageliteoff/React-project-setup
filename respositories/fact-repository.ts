import { AxiosClient } from "../utils/clients";

export type Fact = {
  text: string;
  number: number;
  found: boolean;
  type: string;
};

export default class FactRepository {
  private BASE_URL = "http://numbersapi.com";
  constructor(private client: AxiosClient) {}

  async getRandomFact(): Promise<{
    data: Fact;
  }> {
    return this.client.get(`${this.BASE_URL}/random/trivia?json`);
  }

  async getFact(id: number): Promise<{
    data: Fact;
  }> {
    return this.client.get(`${this.BASE_URL}/${id}?json`);
  }

  async saveFact(fact: Fact) {
    console.log(fact);

    console.log("saved");
  }
}
