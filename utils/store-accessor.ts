import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import { RootState } from '../store'
import FactStoreModule from '../store/facts'

let FactStore: FactStoreModule

function initialiseStores(store: Store<RootState>): void {
  FactStore = getModule(FactStoreModule, store)
}

export { initialiseStores, FactStore }
