<template>
  <div id="header" class="d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-left">
      <div class="caption text-left">
        <p class="description">{{ headerValues.caption }}</p>
        <h1 class="title">{{ headerValues.title }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headerValues: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
#header {
  width: 100%;
  height: 350px;
  background-image: url('@/assets/imgs/room-image-2.jpg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}

.caption {
  color: #fff;
  line-height: 5px;
}

.caption .description {
  letter-spacing: 5px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 18px;
}

.caption .title {
  font-family: 'Gilda Display';
  font-size: 48px;
}
</style>
