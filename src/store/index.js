import Vuex from 'vuex'
import counter from './counter'
import listId from './listId'

export default new Vuex.Store({
  modules: {
    counter,
    listId
  }
})
