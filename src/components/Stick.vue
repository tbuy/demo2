<template>
    <div class="c-stick">
        <div class="stick" @click="backTop" :style="{opacity: isShowStick? 1: 0}">
            <img src="../assets/stick.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isShowStick: false
            }
        },
        methods: {
            backTop() {
                var _scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                this._timer = setInterval(() => {
                    if (_scrollTop < 0) {
                        _scrollTop = 0
                        clearInterval(this._timer)
                    } else {
                        _scrollTop -= 100;
                    }
                    window.scrollTo(0, _scrollTop)
                }, 20)
            },
            handleScroll() {
                var _scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                if (_scrollTop > 200) {
                    this.isShowStick = true;
                } else {
                    this.isShowStick = false;
                }

            },
        },
        destroyed() {
            clearInterval(this._timer)
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
        },
    }

</script>
<style lang="scss" scoped>
    @import '../../static/pubilc.scss';
    .c-stick {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
        right: 0;
        max-width: $maxWidth;
        margin: 0 auto;
        & .stick {
            background-color: rgba(255, 255, 255, 0.7);
            position: absolute;
            right: 1rem;
            bottom: 1rem;
            width: 2rem;
            height: 2rem;
            line-height: 2rem;
            border-radius: 50%;
            overflow: hidden;
            border: 1px solid $border;
            text-align: center;
            cursor: pointer;
            transition: all 0.2s;
        }
        & img {
            width: 70%;
            height: 70%;
            vertical-align: middle;
        }
    }

</style>
