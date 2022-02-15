<template>
    <div >
        <h2>{{header}}</h2>
        <div class="people">
        <slot />
        </div>
    </div>
</template>

<script>
export default {
    props:['header']
}
</script>