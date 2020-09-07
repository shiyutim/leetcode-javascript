<template>
    <div>
    执行用时：{{list[0]}} ms, 在所有 JavaScript 提交中击败了 {{list[1]}}% 的用户
    <br />
    内存消耗：{{list[2]}} MB, 在所有 JavaScript 提交中击败了 {{list[3]}}% 的用户
    </div>
</template>

<script>

export default {
    props: {
        list: {
            type: Array,
            required: true
        }
    },
    data() {
        return {}
    }
}
</script>