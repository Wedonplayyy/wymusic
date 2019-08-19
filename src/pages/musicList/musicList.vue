<config>
    {
    "navigationBarTitleText": "歌单"
    }
</config>
<template>
    <div class="body">
        <div class="img">
            <img :src="musicListInfo.coverImgUrl">
        </div>
        <div class="title">
            <div class="playAll">播放全部（共{{musicListInfo.trackCount}}首）</div>
            <div class="collect">+收藏（{{musicListInfo.subscribedCount}}）</div>
        </div>
        <div v-for="(item,index) in this.songs"
             :key="item.id"
             @click="toSong(item.id)"
             style="width: 100%;padding: 5px 0px;display: flex;">
                <div style="display: flex;justify-content: center;align-items: center;width:10%;color: grey;">{{index+1}}</div>
                <div style="width: 80%;">
                    <div style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{item.name}}</div>
                    <div style="color: grey;font-size: 14px;">{{item.ar[0].name}}</div>
                </div>
                <div></div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "musicList",
        components: {},
        props: {},
        data() {
            return {
                musicListInfo:[],//歌单详情
                songs:[],//所有歌曲

            }
        },
        methods: {
            getTrackIds(list){
                let str = '';
                for(let i in list){
                    str = str + list[i].id + ',';
                }
                str = str.substring(0,str.length-1);
                this.$fly.get('/song/detail?ids=' + str).then(res =>{
                    console.log(res.data);
                    this.songs = res.data.songs;
                })
            },
            toSong(id){
                this.$store.commit('setUrlId',id);
                let temp = this.$store.state.urlId.urlId
                console.log(temp);
                wx.navigateTo({
                    url: '../play/play',
                    success: function(res) {

                    }
                })
            }
        },
        mounted() {
            this.$fly.get('/playlist/detail?id=' + this.$store.state.listId.musicListId).then(res =>{
                this.musicListInfo = res.data.playlist;
                console.log(res.data);
                this.getTrackIds(this.musicListInfo.trackIds);
            })
        },
        created() {

        },
        filters: {},
        computed: {},
        watch: {},
        directives: {}
    }
</script>

<style scoped>
    .body{
        width: 100%;
        height: 100%;
    }
    .img{
        width: 100%;
    }
    .img img{
        width:100%;
    }
    .title{
        display: flex;
        width: 100%;
        height:40px;
        text-align: center;
    }
    .playAll{
        width:60%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .collect{
        background-color: #c10d0d;
        width:40%;
        color:white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
