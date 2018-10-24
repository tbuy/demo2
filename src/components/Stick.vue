<template>
    <div class="c-stick" @click="backTop">
        <img src="../assets/stick.png" alt="">
    </div>
</template>

<script>
    export default {
        methods: {
            backTop(){
                setInterval(()=>{

                },100)
                window.scrollTo(0,0)
            }
        }
    }

</script>
<style lang="scss" scoped>
@import '../../static/pubilc.scss';
  .c-stick {
      position: fixed;
      right: 1rem;
      bottom: 1rem;
      background-color: rgba(255,255,255,0.7);
      width: 2rem;
      height: 2rem;
      line-height: 2rem;
      border-radius: 50%;
      overflow: hidden;
      border: 1px solid $border;
          text-align: center;
          cursor: pointer;
      & img{
          width: 70%;
          height: 70%;
          vertical-align: middle;
      }
  }

</style>
