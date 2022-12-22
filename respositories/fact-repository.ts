import { AxiosClient } from "../utils/clients";

export type Fact = {
  text: string;
  number: number;
  found: boolean;
  type: string;
};

export default class FactRepository {
  client: AxiosClient;
  constructor(client: AxiosClient) {
    this.client = client;
  }

  async getRandomFact(): Promise<{
    data: Fact;
  }> {
    return this.client.get(`random/trivia?json`);
  }

  async getFact(id: number): Promise<{
    data: Fact;
  }> {
    return this.client.get(`${id}?json`);
  }

  async saveFact(fact: Fact) {
    console.log(fact);

    console.log("saved");
  }
}
