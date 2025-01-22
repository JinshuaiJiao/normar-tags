<template>
    <div class="svg-icon">
        <IconifyIcon :icon="icon" />
    </div>
</template>

<script>
import { Icon as IconifyIcon } from '@iconify/vue';
export default {
    components: {
        IconifyIcon
    },
    props: {
        icon: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="css" scoped>
.svg-icon {
    display: inline-block;
    width: 22px;
    height: 22px;
    overflow: hidden;

    svg {
        fill: currentcolor;
        width: 100%;
        height: 100%;
    }
}
</style>