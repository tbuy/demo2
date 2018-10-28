<template>
    <div class="home">
        <div class="header">
            <div class="header-wrapper" :style="{height: headerHeight + 'rem'}">
                <div @click="goNavtab" class="menu">
                    <img src="../assets/menu.png" alt="">
                </div>
                <div class="middle">
                    <div class="logo" :style="{height: headerHeight==4?'2rem': '0'}">商城</div>
                    <div class="search" @click="goSearch" :style="{width: headerHeight==4?'100%': '80%'}">
                        <img src="../assets/search.png">
                        <input type="text" placeholder="搜索商品，品牌">
                    </div>
                </div>
                <div @click="goLogin" class="login">
                    <img src="../assets/login.png" alt="">
                </div>
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
                        <Time time="02:30:00"></Time>
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
                ],
                headerHeight: 4
            }
        },
        components: {
            Banner,
            Stick,
            Time
        },
        methods: {
            goNavtab() {
                this.$router.push('./navtab')
            },
            goLogin() {
                this.$router.push('./login')
            },
            goSearch() {
                this.$router.push('./search')
            },
            goGoods() {
                this.$router.push('./goods')
            },
            handleScroll() {
                var _scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                if (_scrollTop > 80) {
                    this.headerHeight = 2
                } else {
                    this.headerHeight = 4
                }
            },
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
        },
    }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import '../../static/pubilc.scss';
    .home {
        max-width: $maxWidth;
        margin: 0 auto;
    }

    .header {
        max-width: $maxWidth;
        margin: 0 auto;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9;
        background-color: $red;
        padding: 0 1rem;
        overflow: hidden;
        & .header-wrapper {
            position: relative;
            width: 100%;
            height: 4rem;
            transition: all 0.2s;
            & .menu {
                line-height: 2rem;
                font-size: 0.8rem;
                position: absolute;
                left: 0;
                z-index: 2;
                cursor: pointer;
                & img {
                    width: 0.8rem;
                    height: 0.8rem;
                    vertical-align: middle;
                }
            }
            & .login {
                line-height: 2rem;
                font-size: 0.8rem;
                position: absolute;
                right: 0;
                z-index: 2;
                cursor: pointer;
                & img {
                    width: 0.8rem;
                    height: 0.8rem;
                    vertical-align: middle;
                }
            }
            & .middle {
                width: 100%;
                height: 4rem;
                position: absolute;
            }
            & .logo {
                margin: 0 auto;
                width: 80%;
                color: #fff;
                height: 2rem;
                line-height: 2rem;
                font-size: 0.8rem;
                text-align: center;
                transition: all 0.2s;
            }
            & .search {
                margin: 0 auto;
                height: 2rem;
                position: relative;
                width: 80%;
                transition: all 0.2s;
                & input {
                    width: 100%;
                    height: 1.6rem;
                    line-height: 1.6rem;
                    border: 0 none;
                    padding-left: 1.6rem;
                    box-sizing: border-box;
                    border-radius: 0.2rem;
                    margin-top: 0.2rem;
                }
                & img {
                    width: 0.8rem;
                    height: 0.8rem;
                    position: absolute;
                    left: 0.3rem;
                    top: 0.6rem;
                }
            }
        }




    }

    .nav {
        margin-top: 4.5rem;
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
