<config>
    "navigationBarTitleText": "歌单"
</config>
<template>
    <div class="body">
        <div class="img"></div>
        <div>
            <div>播放全部</div>
            <div>+收藏</div>
        </div>
        <div v-for="(item,index) in this.musicList" :key="index">
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
                musicList:[],//歌单列表
            }
        },
        methods: {},
        mounted() {
            const eventChannel = this.getOpenerEventChannel();
            eventChannel.on('acceptDataFromOpenerPage', function(data) {
                console.log(data)
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

</style>