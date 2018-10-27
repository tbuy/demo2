<template>
    <div class="wrapper">
        <div class="address">地址</div>
        <div class="infor">ddddd</div>
        <div class="footer">
            <div class="total">
                共1件，总金额￥168.00
            </div>
            <div class="submit">提交订单</div>
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
        font-size: $fontSize;
        background-color: #f0f0f0;
        height: 100vh;
        max-width: $maxWidth;
        margin: 0 auto;
    }

    .address {
        height: 5rem;
        background-color: pink;
    }

    .infor {
        margin-top: 0.5rem;
        background-color: yellow;
    }

        .footer {
        width: 100%;
        height: 2.4rem;
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        position: fixed;
        bottom: 0;
        & .total {
            line-height: 2.4rem;
            margin-left: 6rem;
            font-size: 0.7rem;
        }
        & .submit {
            text-align: center;
            background-color: #FF0036;
            color: #fff;
            width: 30%;
            font-size: 0.8rem;
            line-height: 2.4rem;
        }
    }
</style>
