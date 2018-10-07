<template>
    <div class="c-banner">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item in swiperContent" :key="item.id" class="swiperItem">
                <img :src="item.image" alt="">
            </swiper-slide>
            <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'

    import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper'

    export default {
        props: {
            swiperContent: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                swiperOption: {
                    autoplay: true,
                    speed: 300,
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination'
                    }
                },
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        mounted() {

        }
    }

</script>
<style lang="scss" scoped>
    .swiperItem img{
        width: 100%;
    }

</style>
