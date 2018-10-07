<template>
    <div class="c-time">
        <div class="hour public">{{hour}}</div>
        <div>:</div>
        <div class="minute public">{{minute}}</div>
        <div>:</div>
        <div class="second public">{{second}}</div>
    </div>
</template>

<script>
    export default {
        props: {
            time: {
                type: String,
                default: '01:00:00'
            }
        },
        data() {
            return {
                hour: '01',
                minute: '00',
                second: '00',
            }
        },
        computed: {

        },
        methods: {
            countDown() {

            },
        },
        mounted() {
            this.countDown();
        }
    }

</script>
<style lang="scss" scoped>
    @import '../../static/pubilc.scss';
    .c-time {
        display: flex;
        margin-left: 0.2rem;
        & .public {
            background-color: #000;
            color: #fff;
            height: 1rem;
            line-height: 1rem;
            margin-top: 0.9rem;
            border-radius: 0.3rem;
            width: 1.4rem;
            text-align: center;
            font-size: 0.6rem;
        }
    }

</style>
