<template>
    <div class="wrapper">
        <div class="login_header">某宝账户登录</div>
        <div class="form">
            <div class="account">
                <div class="left">账户</div>
                <input type="text" placeholder="手机号/邮箱/会员名">
            </div>
            <div class="password">
                <div class="left">登录密码</div>
                <input type="text" placeholder="请输入密码">
            </div>
        </div>
        <div class="login_bg_red">登录</div>
        <div class="other">
            <div class="note" @click="goNoteLogin">短信校验码登录</div>
            <div class="register">免费注册</div>
        </div>
        <div class="login_border_red">手机快捷登录</div>
    </div>
</template>
<script>
    export default {
        methods: {
            goNoteLogin(){
                this.$router.push('./noteLogin')
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



    .other {
        display: flex;
        padding: 0 0.8rem;
        justify-content: space-between;
        color: #f40;
    }

</style>
