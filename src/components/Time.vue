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
                default: '00:00:00'
            }
        },
        data() {
            return {
                hour: '00',
                minute: '00',
                second: '00',
            }
        },
        computed: {

        },
        methods: {
            countDown(isLocalStorageTime) {
                var _hour = parseInt(this.hour);
                _hour = _hour > 0 ? (isLocalStorageTime ? _hour : _hour - 1) : 0;
                var _minute = parseInt(this.minute);
                _minute = _minute == 0 ? (this.hour > 0 ? 59 : 0) : (isLocalStorageTime ? _minute : _minute - 1);
                var _second = parseInt(this.second);
                _second = _second == 0 ? 60 : _second;
                this._timer = setInterval(() => {
                    if (_second == 0) {
                        _second = 59
                        if (_minute == 0) {
                            if (_hour > 0) {
                                _hour--;
                                _minute = 59
                            }
                        } else {
                            _minute--;
                        }
                    } else {
                        _second--;
                    }
                    this.second = _second > 9 ? _second + '' : '0' + _second;
                    this.minute = _minute > 9 ? _minute + '' : '0' + _minute;
                    this.hour = _hour > 9 ? _hour + '' : '0' + _hour;
                    localStorage.setItem('seckill', this.hour + ':' + this.minute + ':' + this.second)
                }, 1000)
            },
        },
        destroyed() {
            clearInterval(this._timer)
        },
        mounted() {
            if (localStorage.getItem('seckill') && localStorage.getItem('seckill') != '00:00:00') {
                this.hour = localStorage.getItem('seckill').slice(0, 2);
                this.minute = localStorage.getItem('seckill').slice(3, 5);
                this.second = localStorage.getItem('seckill').slice(6, 8);
                this.countDown(true);
            } else {
                localStorage.setItem('seckill', this.time)
                this.hour = this.time.slice(0, 2);
                this.minute = this.time.slice(3, 5);
                this.second = this.time.slice(6, 8);
                this.countDown(false);
            }

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
