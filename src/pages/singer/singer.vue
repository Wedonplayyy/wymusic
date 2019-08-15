<config>
    {
      "usingComponents":{
        "van-tab":"../../native/lib/vant/tab/index",
        "van-tabs":"../../native/lib/vant/tabs/index"
      },
    }
</config>
<template>
    <div class="body">
        <van-tabs :active="this.active">
            <van-tab title="入驻歌手"></van-tab>
            <van-tab title="华语男歌手">
                <singerList></singerList>
            </van-tab>
            <van-tab title="华语女歌手"></van-tab>
            <van-tab title="华语组合/乐队"></van-tab>
            <van-tab title="欧美男歌手"></van-tab>
            <van-tab title="欧美女歌手"></van-tab>
            <van-tab title="欧美组合/乐队"></van-tab>
            <van-tab title="日本男歌手"></van-tab>
            <van-tab title="日本女歌手"></van-tab>
            <van-tab title="日本组合/乐队"></van-tab>
            <van-tab title="韩国男歌手"></van-tab>
            <van-tab title="韩国女歌手"></van-tab>
            <van-tab title="韩国组合/乐队"></van-tab>
            <van-tab title="其他男歌手"></van-tab>
            <van-tab title="其他女歌手"></van-tab>
            <van-tab title="其他组合/乐队"></van-tab>
        </van-tabs>
    </div>
    
</template>

<script>
    import singerList from "../../components/singerList.vue"
    export default {
        name: "singer",
        components: {
            singerList
        },
        props: {},
        data() {
            return {
                active:0,
                artistCat:[],//
            }
        },
        methods: {},
        mounted() {
            this.$fly.get("/artist/list?cat=1001&initial=b").then(res =>{
                console.log(res);
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

<style scoped lang="scss">

</style>