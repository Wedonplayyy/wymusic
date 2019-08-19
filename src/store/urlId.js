const state = {
    urlId:'',//歌单id
}
const mutations={
    setUrlId(state,data){
        state.urlId = data;
    }
}
export default {
    state,
    mutations
}
