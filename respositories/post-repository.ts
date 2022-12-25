import { AxiosClient } from "../utils/clients";

export type PostEntity = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default class PostRepository {
  private BASE_URL = "https://jsonplaceholder.typicode.com";

  constructor(private client: AxiosClient) {}

  async getPosts(): Promise<{ data: PostEntity[] }> {
    return this.client.get(`${this.BASE_URL}/posts`);
  }
}
