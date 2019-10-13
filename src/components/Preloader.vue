<template>
    <svg :style="(size? `width:${size}px;height:${size}px`: '')"
         id="preloader" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="50" r="40" fill="none" stroke-width="8" stroke="#398BFF" stroke-linecap="round" class="svg-circle">
            <animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" to="0" from="502"></animate>
            <animate attributeName="stroke-dasharray" dur="2s" repeatCount="indefinite" values="150.6 100.4;1 250;150.6 100.4"></animate>
        </circle>
    </svg>
</template>

<script>
    export default {
        name: "Preloader",
        props: {
            size: {
                type: Number,
                require: false
            }
        },
        created() {
            this.size = this.size || false;
        }
    }
</script>

<style scoped>

</style>