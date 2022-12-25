import axios from "axios";
import { AxiosClient } from "./utils/clients";

import { store } from "./store";
import FactRepository from "./respositories/fact-repository";
import FactsService from "./services/fact-service";
import PostRepository from "./respositories/post-repository";
import PostService from "./services/post-service";
import { postActions } from "./store/post-reducer";
import { factActions } from "./store/fact-reducer";

// client
const client = new AxiosClient(axios);

// Repositoris
const factRepository = new FactRepository(client);
const postRepository = new PostRepository(client);

// services
const factService = new FactsService(factRepository, store, factActions);
const postService = new PostService(postRepository, store, postActions);

const DI = {
  factService,
  postService,
};

export default DI;
