<template>
    <div class="body">
        <div class="search">
            <div>音乐馆</div>
            <div>
                <input type="text" placeholder="请输入搜索内容" bindcomfirm="search"/>
            </div>
            <div style="display: flex">
                <div>搜索</div>
                <img style="width:24px;height:24px;vertical-align:middle;"
                     src="native/icons/top音乐.png">
            </div>
        </div>
        <div class="swipe">
            <swiper autoplay indicator-dots>
                <swiper-item  v-for="item in banners" :key="item.encodeId">
                    <img :src="item.pic" class="slide-image"/>
                </swiper-item>
            </swiper>
        </div>
        <div class="cat">
            <div class="cat-item">
                <div class="cat-title">每日推荐</div>
                <img class="cat-icon" src="native/icons/推荐报表.png">
            </div>
            <div class="cat-item">
                <div class="cat-title">歌单</div>
                <img class="cat-icon" src="native/icons/音乐2.png">
            </div>
            <div class="cat-item">
                <div class="cat-title">排行榜</div>
                <img class="cat-icon" src="native/icons/排行榜.png">
            </div>
            <div class="cat-item">
                <div class="cat-title">电台</div>
                <img class="cat-icon" src="native/icons/蚂蚁-电台.png">
            </div>
            <div class="cat-item">
                <div class="cat-title">直播</div>
                <img class="cat-icon" src="native/icons/直播.png">
            </div>
        </div>
<!--        <div class="list-item">-->
<!--            <div class="title">-->
<!--                <div>推荐歌单</div>-->
<!--                <div>歌单广场</div>-->
<!--            </div>-->
<!--            <div class="grid">-->
<!--                <div class="grid-item" v-for="(item, index) in personalized" :key="index">-->
<!--                    <img :src="item.picUrl" class="list-img">-->
<!--                    <div class="list-title">{{item.name}}</div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
        <list class="list-item" :array="personalized" title="推荐歌单" button="歌单广场"></list>
        <list class="list-item" :array="this.arrSlice(album)" title="新碟" button="更多新碟"></list>
        <list class="list-item" :array="this.arrSlice(newsong)" title="音乐新势力" button="新音乐"></list>
        <list class="list-item" :array="this.arrSlice(djprogram)" title="推荐电台" button="电台广场"></list>
        <list class="list-item" :array="this.arrSlice(program)" title="推荐节目" button="更多节目"></list>
    </div>
    
</template>

<script>
    import list from "../../components/list.vue"
    export default {
        name: "home",
        components: {
            list
        },
        props: {},
        data() {
            return {
                banners:[],//轮播图
                personalized:[],//推荐歌单\
                album:[],//新碟
                newsong:[],//新歌
                djprogram:[],//推荐电台
                program:[],//推荐节目
            }
        },
        methods: {
            arrSlice(arr){
                return arr.slice(0,6);
            },
            getBanner(){//获得轮播图数据
                this.$fly.get('/banner?type=2')
                    .then(response=> {
                        let res = response.data;
                        this.banners = res.banners;
                        console.log(res);
                    }).catch(err=> {
                    console.log(err);
                })
            },
            getPersonalized(){//推荐歌单
                this.$fly.get("/personalized?limit=6")
                    .then(res =>{
                        this.personalized = res.data.result;
                        console.log(res);
                    })
            },
            getAlbum(){//新碟
                this.$fly.get("/album/newest")
                    .then(res =>{
                        this.album = res.data.albums;
                        console.log(res);
                    })
            },
            getNewsong(){
                this.$fly.get("/personalized/newsong")
                    .then(res =>{
                        this.newsong = res.data.result;
                        console.log(res);
                    })
            },
            getDjprogram(){
                this.$fly.get("/personalized/djprogram")
                    .then(res =>{
                        this.djprogram = res.data.result;
                        console.log(res);
                    })
            },
            getProgram(){
                this.$fly.get("/program/recommend")
                    .then(res =>{
                        this.program = res.data.programs;
                        console.log(res);
                    })
            },
            search(){},//搜索
        },
        mounted() {
            this.getBanner();
            this.getPersonalized();
            this.getAlbum();
            this.getNewsong();
            this.getDjprogram();
            this.getProgram();
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
        width:98%;
        padding:1%;
        text-align: center;
    }
    .search{
        display: flex;
        justify-content: space-between;
        width:96%;
        padding:2%;
    }
    .swipe{
        width: 100%;
    }
    .slide-image{
        width:96%;
        height:150px;
        border-radius: 5px;
    }
    .cat{
        display: flex;
        padding: 2% 0;
    }
    .cat-item{
        width:20%;
        text-align: center;
    }
    .cat-title{
        margin:3px 0;
    }
    .cat-icon{
        width:30px;
        height:30px;
        vertical-align:middle;
        margin:3px 0;
    }
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