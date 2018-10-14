<template>
    <div class="navtab">
        <div class="top">全部分类</div>
        <div class="bottom">
            <div class="nav">
                <div class="nav-item" v-for="(item,index) in tab" :key="item.id" @click="select(item,index)" :class="{selectTab: item.isSelect}">为你推荐</div>
            </div>
            <div class="content">{{content.title}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tab: [{
                        title: '为你推荐'
                    },
                    {
                        title: '为你推荐'
                    },
                    {
                        title: '为你推荐'
                    },
                    {
                        title: '为你推荐'
                    },
                    {
                        title: '为你推荐'
                    },
                    {
                        title: '为你推荐'
                    },
                    {
                        title: '为你推荐'
                    },
                    {
                        title: '为你推荐'
                    },
                    {
                        title: '为你推荐'
                    },
                    {
                        title: '为你推荐'
                    },
                    {
                        title: '为你推荐'
                    },
                    {
                        title: '为你推荐'
                    },
                    {
                        title: '为你推荐'
                    },
                    {
                        title: '为你推荐'
                    },
                    {
                        title: '为你推荐'
                    },
                ],
                data: [{
                        title: 1111
                    },
                    {
                        title: 222
                    },
                    {
                        title: 1111
                    },
                    {
                        title: 555
                    },
                    {
                        title: 1111
                    },
                    {
                        title: 1111
                    },
                    {
                        title: 1111
                    },
                    {
                        title: 1111
                    },
                    {
                        title: 1111
                    },
                    {
                        title: 1111
                    },
                    {
                        title: 1111
                    },
                    {
                        title: 1111
                    },
                    {
                        title: 1111
                    },
                    {
                        title: 1111
                    },
                    {
                        title: 1111
                    },
                    {
                        title: 1111
                    },
                ],
                content: {}
            }
        },
        computed: {

        },
        components: {},
        methods: {
            select(item, index) {
                this.tab.forEach(val => {
                    val.isSelect = false;
                })
                item.isSelect = true;
                this.content = this.data[index]
            }
        },
        mounted() {
            this.tab.forEach(item => {
                this.$set(item, 'isSelect', false);
            })
            this.tab[0].isSelect = true;

            this.content = this.data[0]
        }
    }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import '../../static/pubilc.scss';
    .navtab {
        max-width: 21rem;
        margin: 0 auto;
        background-color: #eee;
        height: 100vh;
        font-size: 0.8rem;
        overflow: hidden;
    }

    .top {
        padding: 0 1rem;
        height: 2rem;
        line-height: 2rem;
        border-bottom: 1px solid $border;
    }

    .bottom {
        display: flex;
    }

    .nav {
        height: 100vh;
        overflow-y: auto;
        & .nav-item {
            padding: 0 1rem;
            height: 3rem;
            line-height: 3rem;
            border-bottom: 1px solid $border;
            border-right: 1px solid $border;
        }
        & .selectTab {
            background-color: #fff;
            border-right: 0 none;

        }
    }

    .content {
        padding: 1rem;
        background-color: #fff;
        box-sizing: border-box;
    }

</style>
