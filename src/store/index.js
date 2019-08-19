import Vuex from 'vuex'
import counter from './counter'
import listId from './listId'
import urlId from './urlId'

export default new Vuex.Store({
  modules: {
    counter,
    listId,
    urlId,
  }
})
