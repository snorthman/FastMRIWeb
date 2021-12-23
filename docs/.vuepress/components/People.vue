<template>
  <div class="people">
    <a :href="person.url" target=”_blank” v-for="person in people" :key="person.name">
      <img :src="$withBase(person.img)" :alt="person.name" @error="noPersonImage" />
      <div class="name">{{person.name}}</div>
      <div class="title">{{person.title}}</div>
      <div><OutboundLink/></div>
    </a>
  </div>
</template>

<script>
export default {
data() {
    return {
      people: []
    };
  },
  methods: {
    noPersonImage(event) {
        event.target.src = this.$withBase("/anon.png")
    }
  },
  mounted () {
    for (let page of this.$site.pages) {
      if (page.path.startsWith(this.$page.path) && page != this.$page) {
          let person = page.frontmatter
          person.img = '/people/' + person.img
          this.people.push(person)
      }
    }
  }
}
</script>