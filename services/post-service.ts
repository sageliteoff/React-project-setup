import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import PostRepository from "../respositories/post-repository";
import { postActions } from "../store/post-reducer";

export default class PostService {
  constructor(
    private postRepository: PostRepository,
    private store: ToolkitStore,
    private postActions: postActions
  ) {}

  async getAllPost() {
    const res = await this.postRepository.getPosts();
    return res.data;
  }
}
