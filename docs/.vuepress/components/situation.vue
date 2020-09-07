<template>
    <div>
        <ul>
            <li>
                时间复杂度：
                <slot name="time"></slot>
            </li>

            <li>
                空间复杂度：
                <slot name="space"></slot>
            </li>
            <li>
                最好情况：
                <slot name="good"></slot>
            </li>
            <li>
                最坏情况：
                <slot name="bad"></slot>
            </li>
        </ul>
    </div>

</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style></style>