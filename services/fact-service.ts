import {
  ActionCreatorWithPayload,
  AnyAction,
  Dispatch,
} from "@reduxjs/toolkit";
import FactRepository, { Fact } from "../respositories/fact-repository";

export default class FactsService {
  private dispatch: Dispatch<AnyAction>;
  private factActions: {
    saveFact: ActionCreatorWithPayload<Fact, "fact/saveFact">;
  };
  private factRepository: FactRepository;
  constructor(
    factRepository: FactRepository,
    dispatch: Dispatch<AnyAction>,
    factActions: { saveFact: ActionCreatorWithPayload<Fact, "fact/saveFact"> }
  ) {
    this.factRepository = factRepository;
    this.dispatch = dispatch;
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
    this.dispatch(this.factActions.saveFact(res.data));
    return res;
  }

  saveFact(fact: Fact) {
    this.factRepository.saveFact(fact);
  }
}
