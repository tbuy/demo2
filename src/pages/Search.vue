<template>
    <div class="wrapper">
        <div class="search">
            <input type="text" placeholder="搜索商品/店铺/品牌">
            <img src="../assets/search.png" alt="">
        </div>
    </div>
</template>
<script>
    export default {
        methods: {

        }
    }

</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    @import '../../static/pubilc.scss';
    .wrapper {
        max-width: $maxWidth;
        margin: 0 auto;
        background-color: #fff;
        height: 100vh;
        & .search {
            height: 2.2rem;
            background-color: #000;
            text-align: center;
            position: relative;
        }
        & img {
            width: 1rem;
            height: 1rem;
            position: absolute;
            left: 5%;
            top: 0.6rem;
        }
        & input {
            border: 0 none;
            outline: none;
            width: 95%;
            line-height: 1.6rem;
            margin-top: 0.3rem;
            padding-left: 2rem;
            box-sizing: border-box;
        }
        & input::-webkit-input-placeholder {
            color: #ccc;
            font-size: 0.6rem;
        }
        & input::-moz-placeholder {
            color: #ccc;
            font-size: 0.6rem;
        }
        & input::-moz-placeholder {
            color: #ccc;
            font-size: 0.6rem;
        }
        & input:-ms-input-placeholder {
            color: #ccc;
            font-size: 0.6rem;
        }
    }

</style>
