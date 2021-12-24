<template>
    <a v-if="ready" :href="$withBase(path)">
      <img v-if="img" :src="$withBase(`/research/${img}`)" :alt="title" />
      <div class="title">{{title}}</div>
      <div class="description">{{description}}</div>
    </a>
</template>

<script>
export default {
props: ['slug'],
data() {
        return {
            path: "",
            img: "",
            title: "",
            description: "",
            ready: false
        };
    },
    methods: {},
    beforeMount() {
        var project = this.$site.pages.find(p => p.regularPath.startsWith(`/research/${this.slug}`)) || {}
        var fm = project.frontmatter || {}

        this.path = project.path || false
        this.img = fm.img || false
        this.title = project.title || false
        this.description = fm.description || false
        this.ready = [this.path, this.title, this.description].every(p => p)
    }
}
</script>