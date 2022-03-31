<template>
    <p class="component action">        
        <a :href="link.startsWith('/') ? $withBase(link) : `//${link}`" class="nav-link action-button">
            {{action}} →
        </a>
    </p>
</template>

<script>
export default {
    props: {
        link: {
            default: '/'      
        },
        action: {
            default: 'Action'      
        }
    }
}
</script>