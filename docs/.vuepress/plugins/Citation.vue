<template>
    <div>
    citation needed
    </div>
</template>

<script>

export default {
    name: 'Citation',
    props: ['doi'],
    data() {
            return {
                citation: {},
                count: 0
            };
        },
    methods: {},
    mounted() {
        // console.log(Cite)
        // this.citation = Cite('10.5281/zenodo.1005176')
    }
}
</script>