<template>
    <div class="wrapper">
        <div class="login_header">某宝账户登录</div>
        <div class="form">
            <div class="account">
                <div class="left">手机号码</div>
                <input type="text" placeholder="请输入手机号码">
            </div>
            <div class="password">
                <div class="left code">短信校验码</div>
                <input type="text" placeholder="短信校验码" class="codeInput">
                <div class="getCode">获取短信校验码</div>
            </div>
        </div>
        <div class="login_bg_red">登录</div>
        <div class="register">免费注册</div>
        <div class="login_border_red" @click="goLogin">账户密码登录</div>
    </div>
</template>
<script>
    export default {
        methods: {
            goLogin() {
                this.$router.push('./login')
            }
        }
    }

</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    @import '../../static/pubilc.scss';
    .wrapper {
        font-size: $fontSize;
        background-color: #f0f0f0;
        height: 100vh;
    }

    .form {
        margin-top: 1rem;
        background-color: #fff;
        text-align: left;
        & .account {
            padding: 0 0.8rem;
            border-bottom: 1px solid #ddd;
            display: flex;
            height: 2.5rem;
            line-height: 2.5rem;
            box-sizing: border-box;
        }
        & .password {
            padding: 0 0.8rem;
            display: flex;
            height: 2.5rem;
            line-height: 2.5rem;
            box-sizing: border-box;
        }
        & .left {
            width: 4rem;
            color: #6c6c6c;
        }
        & .getCode {
            border-left: 1px solid #ccc;
            color: #f40;
            height: 1.1rem;
            line-height: 1.1rem;
            margin-top: 0.7rem;
            padding-left: 1rem;
        }
        & .code {
            width: 5rem;
        }
        & .codeInput {
            width: 5rem;
        }
        & input {
            border: 0 none;
            outline: none;
        }
        & input::-webkit-input-placeholder {
            color: #ccc;
            font-size: $fontSize;
        }
        & input::-moz-placeholder {
            color: #ccc;
            font-size: $fontSize;
        }
        & input::-moz-placeholder {
            color: #ccc;
            font-size: $fontSize;
        }
        & input:-ms-input-placeholder {
            color: #ccc;
            font-size: $fontSize;
        }

    }



    .register {
        padding: 0 0.8rem;
        color: #6c6c6c;
    }

</style>
