<template>
    <div class="list-item">
        <div class="title">
            <div>{{title}}</div>
            <div>{{button}}</div>
        </div>
        <div class="grid" >
            <div class="grid-item" v-for="(item, index) in array" :key="index" @click="toMusicList(item.id)">
                <img :src="item.picUrl" class="list-img">
                <div class="list-title">{{item.name}}</div>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: "list",
        components: {},
        props: {
            array:{
                type:Array
            },
            title:{
                type:String
            },
            button:{
                type:String
            }
        },
        data() {
            return {
                id:"",//歌单id
            }
        },
        methods: {
            toMusicList(id){
                wx.navigateTo({
                    url: '../musicList/musicList?id='+id,
                    events: {
                        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
                        acceptDataFromOpenedPage: function(data) {
                            console.log(data)
                        },
                        someEvent: function(data) {
                            console.log(data)
                        }
                    },
                    success: function(res) {
                        // 通过eventChannel向被打开页面传送数据
                        res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
                    }
                })
            }
        },
        mounted() {
            // id=this.array;
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
    .list-item{
        width:94%;
        padding: 3%;
    }
    .title{
        display: flex;
        padding:2% 0;
        justify-content: space-between;
    }
    .grid{
        width:100%;
        display: grid;
        grid-template-columns: repeat(3,33%);
        text-align: center;
    }
    .grid-item{
    }
    .list-img{
        width:90%;
        height:100px;
        border-radius: 5px;
    }
    .list-title{
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width:105px;
    }
</style>