<template>
  <div class="research">
    <a :href="project.url" v-for="project in research" :key="project.title">
      <img v-if="project.img" :src="$withBase(project.img)" :alt="project.title" />
      <div class="title">{{project.title}}</div>
      <div class="description">{{project.description}}</div>
    </a>
  </div>
</template>

<script>
export default {
data() {
    return {
      research: []
    };
  },
  methods: {
  },
  mounted () {
    for (let page of this.$site.pages) {
      if (page.path.startsWith(this.$page.path) && page != this.$page) {
        let project = page.frontmatter
        project.url = page.regularPath
        project.img = project.img ? '/research/' + project.img : null
        if (!project.draft)
            this.research.push(project)
      }
    }
  }
}
</script>