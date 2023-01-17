<!-- eslint-disable max-len -->
<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="../assets/imgs/room-image-1.jpg" alt="First slide" />
      </div>
    </div>
    <a class="carousel-control-prev" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    </a>
    <a class="carousel-control-next" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [{ src: '../assets/imgs/room-image-1.jpg' }, { src: '../assets/imgs/room-image-2.jpg' }, { src: '../assets/imgs/room-image-3.jpg' }],
    };
  },
};
</script>

<style></style>
