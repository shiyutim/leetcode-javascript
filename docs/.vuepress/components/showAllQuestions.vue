<template>
    <div>
        <h3>目前已完成： {{writedNums}} 道题</h3>
        <section class="question-list">
            <div class="question-list__item" :class="[{'is-writed': isWrite(item)}]" v-for="item in 1000" :key="item">
                <div class="question-num">{{item}}</div>
                <hr />
                <div v-if="isWrite(item)">
                    <a :href="isWrite(item).path" class="" >✅</a>
                <div class="question-title">{{isWrite(item).title}}</div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            writeQuestionList: [],
        }
    },
    computed: {
        writedNums() {
            return this.writeQuestionList.length
        }
    },
    methods: {
        async getAllQuestions() {
            // const res = await axios.get('https://leetcode-cn.com/api/problems/all/')
            // console.log(res)
        },
        getAllWriteQuestions() {
            let pages = this.$site.pages
            let list = this.getAllwriteQuestionList(pages)
            this.writeQuestionList = list
        },
        getAllwriteQuestionList(list = []) {
            let numReg = /(^\d+\s)(.+$)/gi
            let result = []
            list.forEach(item => {
                let {title} = item
                title && title.replace(numReg, (match, $1, $2) => {
                    let template = {
                        num: $1,
                        title: $2,
                        path: item.path,
                    }
                    result.push(template)
                })
            })

            return result
        },
        isWrite(num = 0) {
            return this.writeQuestionList.find(item => item.num == num)
        }
    },
    mounted() {
        this.getAllWriteQuestions()
        console.log(this)
    }
}
</script>

<style lang="less">
.question-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    .question-list__item {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;

        position: relative;

        border: 1px solid #d9d9d9;
        padding: 10px;
        min-width: 40px;
        margin: 3px;
        .question-num {
        }
        .question-title {
            display: none;
            position: absolute;
            width: max-content;
        }
    }
}
.is-writed {
    background: #2ecc71;
    &:hover {
        opacity: .9;
    }
}
.show {
    display: block;
}
</style>