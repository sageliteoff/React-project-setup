import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import FactRepository, { Fact } from "../respositories/fact-repository";
import { FactsActions } from "../store/fact-reducer";

export default class FactsService {
  constructor(
    private factRepository: FactRepository,
    private store: ToolkitStore,
    private factActions: FactsActions
  ) {
    this.factRepository = factRepository;
    this.factActions = factActions;
  }

  async getFact(factId?: number) {
    let res;
    if (!factId) {
      res = await this.factRepository.getRandomFact();
    } else {
      res = await this.factRepository.getFact(factId);
    }

    // save to store
    this.store.dispatch(this.factActions.saveFact(res.data));
    return res;
  }

  saveFact(fact: Fact) {
    this.factRepository.saveFact(fact);
  }
}
