<template>
    <div>
        <div>
            {{songdata.url}}
        </div>
    </div>

</template>

<script>
    export default {
        name: "play",
        components: {},
        props: {},
        data() {
            return {
                songdata:{},
            }
        },
        methods: {
            getUrl(){
                this.$fly.get('/song/url?id=' + this.$store.state.urlId.urlId).then(res =>{
                    console.log(res.data);
                    this.songdata = res.data.data[0];
                    console.log(this.songdata);
                })
            },
        },
        mounted() {
            this.getUrl();
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
