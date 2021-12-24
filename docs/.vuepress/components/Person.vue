<template>
    <a class="person" :href="url" target=”_blank”>
      <img :src="$withBase(`/people/${img}`)" :alt="name" @error="noPersonImage" />
      <div class="name">{{name}}</div>
      <div class="title">{{title}}</div>
      <div><OutboundLink/></div>
    </a>
</template>

<script>
export default {
    props: ['url', 'name', 'img', 'title'], 
    data() {
        return {
            ready: false
        };
    },
    methods: {
        noPersonImage(event) {
            event.target.src = this.$withBase("/anon.png")
        }
    },
    beforeMount() {
        this.ready = [this.url, this.name, this.title].every(p => p)
    }
}
</script>
<style lang="less" scoped>

</style>