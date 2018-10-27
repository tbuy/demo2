<template>
    <div class="wrapper">
        <div class="header">
            <div class="back">
                <img src="../assets/search.png" alt="">
            </div>
            <div class="tab">
                <div class="tab-item active">商品</div>
                <div class="tab-item">评价</div>
                <div class="tab-item">详情</div>
            </div>
            <div class="cart">
                <img src="../assets/search.png" alt="">
            </div>
        </div>
        <div class="content">
            <div class="banner">
                <Banner :swiperContent='swiperContent'></Banner>
            </div>
            <div class="goods">
                <div class="price"><span>￥</span>15.9<span class="icon-text">活动促销</span> </div>
                <div class="old-price">价格：
                    <del>￥32.8</del>
                </div>
                <div class="title">好巴食 金针菇/藕片香辣小包装258g麻辣零食小吃下饭菜四川特产</div>
                <div class="infor">
                    <div>快递 0.00</div>
                    <div>月销量 61件</div>
                    <div>四川成都</div>
                </div>
            </div>
            <div class="evaluate">
                <div class="title">
                    <div class="fl">商品评价（22）</div>
                    <div class="fr">查看全部></div>
                </div>
                <div class="tag">
                    <span>商品评价（22）</span>
                    <span>商品评价（22）</span>
                    <span>商品评价（22）</span>
                </div>
                <div class="evaluate-item">
                    <div>
                        <img src="../assets/search.png" alt="">
                        <span class="name">樱木**花道</span>
                    </div>
                    <div class="evaluate-content">四周是皮的，白色区域感觉是化纤面料的，不知道脏了是否容易清洗或是用化学物品能否伤及面料 美观达标 轻便达标 舒适度达标</div>
                    <div class="time">2018-10-22 颜色分类:5858米白内里加绒;尺码:38</div>
                </div>
            </div>
            <div class="details">
                <div class="title">—————— 详情 ——————</div>
                <div class="content">
                    <div class="subtitile">商品图片</div>
                    <img src="../assets/3.png" v-for="item in 5" :key="item.id">
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="left">
                <div class="public">
                    <img src="../assets/search.png" alt="">
                    <span>店铺</span>
                </div>
                <div class="public">
                    <img src="../assets/search.png" alt="">
                    <span>客服</span>
                </div>
                <div class="public">
                    <img src="../assets/search.png" alt="">
                    <span>收藏</span>
                </div>
            </div>
            <div class="addCart">加入购物车</div>
            <div class="buy">立即购买</div>
        </div>

    </div>
</template>
<script>
    import {
        Banner,
    } from '../components';
    import image1 from '../assets/3.png'
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
        },
        methods: {

        }
    }

</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    @import '../../static/pubilc.scss';
    .wrapper {
        max-width: $maxWidth;
        margin: 0 auto;
        height: 100vh;
        background-color: #eee;
    }

    .header {
        display: flex;
        justify-content: space-between;
        height: 2.2rem;
        line-height: 2.2rem;
        padding: 0 1rem;
        background-color: #fff;
        & .tab {
            display: flex;
            justify-content: space-between;
            font-size: 0.7rem;

        }
        & .tab-item {
            width: 4rem;
            text-align: center;
        }
        & img {
            width: 1rem;
            height: 1rem;
        }
        & .active {
            color: $red;
            border-bottom: 1px solid $red;
        }
    }

    .goods {
        padding: 0.6rem;
        box-sizing: border-box;
        background-color: #fff;
        & .price {
            font-size: 1.2rem;
            color: #fb6878;
            & span {
                font-size: 0.8rem;
            }
            & .icon-text {
                background-color: #fb6878;
                color: #FFF;
                font-size: 0.5rem;
                padding: 0.05rem 0.1rem;
                margin-left: 0.4rem;
            }
        }
        & .old-price {
            font-size: 0.6rem;
            height: 1rem;
            line-height: 1rem;
            color: #888;
            margin-top: 0.3rem;
        }
        & .title {
            font-size: 0.7rem;
            color: #051B28;
            line-height: 1rem;
            @include multy_ellipsis(2);
            margin-top: 0.3rem;
        }
        & .infor {
            display: flex;
            font-size: 0.5rem;
            justify-content: space-between;
            margin-top: 0.3rem;
            color: #888;
        }

    }

    .evaluate {
        padding: 0.5rem;
        margin-top: 0.5rem;
        box-sizing: border-box;
        background-color: #fff;
        & .title {
            font-size: 0.7rem;
            line-height: 1rem;
            height: 1rem;
        }
        & .tag {
            display: flex;
            font-size: 0.5rem;
            margin-top: 0.5rem;
            & span {
                background-color: #FEE;
                color: #666;
                padding: 0.2rem 0.5rem;
                border-radius: 0.5rem;
                margin-right: 0.3rem;

            }
        }
        & .evaluate-item {
            line-height: 2rem;
            & img {
                width: 1rem;
                height: 1rem;
                vertical-align: middle;
            }
            & .name {
                margin-left: 0.2rem;
                font-size: 0.6rem;
                vertical-align: middle;
            }
        }
        & .evaluate-content {
            @include multy_ellipsis(2);
            font-size: 0.6rem;
            line-height: 0.8rem;
        }
        & .time {
            font-size: 0.5rem;
            color: #999;
            @include ellipsis;
            line-height: 1.2rem;
        }
    }

    .details {
        background-color:#eee;
        .title {
            line-height:1.8rem;
            text-align: center;
            font-size: 0.7rem;
        }
        .content {
            background-color: #fff;
            font-size: 0.7rem;
            & .subtitile {
                line-height: 2rem;
                padding: 0 0.5rem;
            }
            & img {
                width: 100%;
                height: auto;

            }
        }
    }

    .footer {
        width: 100%;
        height: 2.4rem;
        display: flex;
        background-color: #fff;
        position: fixed;
        bottom: 0;
        & .left {
            display: flex;
            justify-content: space-around;
            width: 40%;
            & .public {
                display: flex;
                width: 33%;
                flex-direction: column;
                align-items: center;
                padding-top: 0.3rem;
            }
            & img {
                width: 1rem;
                height: 1rem;
            }
            & span {
                font-size: 0.6rem;
            }
        }
        & .addCart {
            text-align: center;
            background-color: #FF9500;
            color: #fff;
            width: 30%;
            font-size: 0.8rem;
            line-height: 2.4rem;
        }
        & .buy {
            text-align: center;
            background-color: #FF0036;
            color: #fff;
            width: 30%;
            font-size: 0.8rem;
            line-height: 2.4rem;
        }
    }

</style>
