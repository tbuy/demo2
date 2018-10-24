<template>
    <div class="home">
        <div class="header">
            <div class="header-top">
                <div @click="goNavtab">菜单</div>
                <div>logo</div>
                <div @click="goLogin">登录</div>
            </div>
            <div class="header-bottom" @click="goSearch">
                <img src="../assets/search.png" alt="">
                <input type="text" placeholder="搜索商品，品牌">
            </div>
        </div>
        <div class="nav">
            <div v-for="item in 5" :key="item.id" class="nav-item">
                <img src="../assets/nav1.png" alt="">
                <div>苏宁易购</div>
            </div>
        </div>
        <div class="banner">
            <Banner :swiperContent='swiperContent'></Banner>
        </div>
        <div class="sale">
            <div class="pub-title">好货特卖</div>
            <div class="content">
                <div class="sale-title">
                    <div>限时抢购</div>
                    <div>
                        <Time></Time>
                    </div>
                </div>
                <div class="sale-content">
                    <div class="sale-item" v-for="item in 4" :key="item.id">
                        <img src="../assets/2.png" alt="">
                        <span>实惠好货</span>
                        <span class="pub-price">￥39</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="handpick">
            <div class="pub-title">为你精选</div>
            <div class="handpick-content">
                <div class="handpick-item" v-for="item in 5" :key="item.id" @click="goGoods(item)">
                    <img src="../assets/2.png" alt="">
                    <span class="title">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</span>
                    <span class="pub-price">￥39</span>
                </div>
            </div>
        </div>
        <div class="stick">
            <Stick></Stick>
        </div>
    </div>
</template>

<script>
    import {
        Banner,
        Stick,
        Time
    } from '../components';
    import image1 from '../assets/1.png'
    export default {
        data() {
            return {
                swiperContent: [{
                        image: image1
                    },
                    {
                        image: image1
                    },
                ]
            }
        },
        components: {
            Banner,
            Stick,
            Time
        },
        methods:{
            goNavtab(){
                this.$router.push('./navtab')
            },
            goLogin(){
                this.$router.push('./login')
            },
            goSearch(){
                this.$router.push('./search')
            },
            goGoods(){
                this.$router.push('./goods')
            }
        }
    }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import '../../static/pubilc.scss';
    .home {
        max-width: $maxWidth;
        margin: 0 auto;
    }

    .header {
        background-color: $red;
        padding: 0 1rem;
        & .header-top {
            height: 2rem;
            line-height: 2rem;
            display: flex;
            justify-content: space-between;
            font-size: 0.8rem;
            color: #fff;

        }
        & .header-bottom {
            height: 2rem;
            position: relative;
            & input {
                width: 100%;
                height: 1.6rem;
                line-height: 1.6rem;
                border: 0 none;
                padding-left: 1.6rem;
                box-sizing: border-box;
                border-radius: 0.2rem;
            }
            & img {
                width: 0.8rem;
                height: 0.8rem;
                position: absolute;
                left: 0.3rem;
                top: 0.4rem;
            }
        }
    }

    .nav {
        margin-top: 0.5rem;
        display: flex;
        justify-content: space-between;
        font-size: 0.7rem;
        padding: 0 1rem;
        & .nav-item {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        & img {
            width: 2.5rem;
            margin-bottom: 0.5rem;
            height: 2.5rem;
        }
    }

    .banner {
        margin-top: 0.5rem;
        padding: 0 1rem;
    }

    .pub-title {
        font-size: 1.1rem;
        font-weight: 800;
        color: rgb(51, 51, 51);
        margin: 0.6rem 0;
    }

    .pub-price {
        color: $red;
    }

    .sale {
        padding: 0 1rem;
        & .content {
            width: 100%;
            height: 10rem;
            background-color: #FFCE00;
            padding: 0 0.5rem;
            border-radius: 0.2rem;
            box-sizing: border-box;
        }
        & .sale-title {
            font-size: 0.9rem;
            height: 2.6rem;
            line-height: 2.6rem;
            font-weight: 800;
            display: flex;
        }
        & .sale-content {
            background-color: #fff;
            border-radius: 0.2rem;
            padding: 0 0.2rem;
            height: 7rem;
            display: flex;
            justify-content: space-around;
        }
        & .sale-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            font-size: 0.7rem;
        }
        & img {
            width: 3.5rem;
            height: 3.5rem;
        }
    }

    .handpick {
        padding: 0 1rem;
        font-size: 0.8rem;
        margin-bottom: 1rem;
        & .handpick-content {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        & .handpick-item {
            margin-top: 0.4rem;
            border: 1px solid $border;
            box-sizing: border-box;
            width: 48%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }

        & .title {
            @include multy_ellipsis(2)
        }

        & span {
            margin: 0.5rem 0;
            padding: 0 0.5rem;
            box-sizing: border-box;
        }

    }

</style>
