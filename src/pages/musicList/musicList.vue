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
        <div v-for="(item,index) in this.musicListInfo.tracks" :key="index">
            <div></div>
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
            }
        },
        methods: {},
        mounted() {
            this.$fly.get('/playlist/detail?id=' + this.$store.state.listId.musicListId).then(res =>{
                this.musicListInfo = res.data.playlist;
                console.log(res.data);
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
