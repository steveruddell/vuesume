<template>
  <div class="return-top is-hidden-mobile animated fadeIn" v-show="visible" @click="returnTop">
    <span class="icon return-top-text"><i class="fa fa-caret-up"></i></span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      visibleOffset: 300,
      text: '^'
    }
  },
  created () {
    let catchScroll = () => {
      this.visible = (window.pageYOffset > parseInt(this.visibleOffset))
    }
    window.smoothscroll = () => {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothscroll)
        window.scrollTo(0, currentScroll - (currentScroll / 10))
      }
    }
    window.onscroll = catchScroll
  },
  methods: {
    returnTop () {
      window.smoothscroll()
    }
  }
}
</script>

<style scoped>
.return-top {
  width: 2.5em;
  height: 2.5em;
  background-color: #3273dc;
  position: fixed;
  bottom: 50px;
  right: 50px;
  border-radius: 25px;
  z-index: 1000;
  cursor:pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align:center;
}
.return-top:hover {
  background-color: #235ebc;
  /*-webkit-filter: grayscale(50%);*/
}
.return-top-text {
  color: #ffffff;
  font-size: 2em;
  margin-top: 5px;
  vertical-align: middle;
}
</style>
