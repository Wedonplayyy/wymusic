const state = {
    musicListId:'',//歌单id
}
const mutations={
    setListId(state,data){
        state.musicListId = data;
    }
}
export default {
    state,
    mutations
}
