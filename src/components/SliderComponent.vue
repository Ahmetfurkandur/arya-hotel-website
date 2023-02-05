<template>
  <div id="carousel" class="carousel slide" data-bs-ride="true">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="carousel-control active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" class="carousel-control" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" class="carousel-control" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img src="@/assets/imgs/room-image-1.jpg" class="d-block w-100" />
        <div class="carousel-caption d-flex flex-column justify-content-center align-items-center w-100">
          <h2 class="title">Arya Otel</h2>
          <a class="contact-now" href="https://wa.me/905446255054?text=Merhaba,%20fiyat%20bilgisi%20alabilir%20miyim?">Hemen Ulaşın</a>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="10000">
        <img src="@/assets/imgs/room-image-2.jpg" class="d-block w-100" />
        <div class="carousel-caption d-flex flex-column justify-content-center align-items-center w-100">
          <h2 class="title">Arya Otel</h2>
          <a class="contact-now" href="https://wa.me/905446255054?text=Merhaba,%20fiyat%20bilgisi%20alabilir%20miyim?">Hemen Ulaşın</a>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="10000">
        <img src="@/assets/imgs/room-image-3.jpg" class="d-block w-100" />
        <div class="carousel-caption d-flex flex-column justify-content-center align-items-center w-100">
          <h2 class="title">Arya Otel</h2>
          <a class="contact-now" href="https://wa.me/905446255054?text=Merhaba,%20fiyat%20bilgisi%20alabilir%20miyim?">Hemen Ulaşın</a>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#carousel {
  position: relative;
  top: 0;
  width: 100%;
  /* z-index: -5 !important; */
}

.carousel-control:hover {
  color: var(--nav-item-text-hover-color) !important;
}

.carousel-caption {
  right: 0 !important;
  left: 0 !important;
  height: 100%;
  /* z-index: 1; */
}

.carousel-item img {
  height: 100vh !important;
  object-fit: cover;
}
.title {
  font-family: 'Gilda Display', serif;
  font-size: 55px;
}

.contact-now {
  display: inline-block;
  height: 2.5rem;
  width: 10rem;
  border: 1px solid var(--contact-now-border-color);
  border-radius: 5px;
  color: var(--contact-now-text-color);
  text-decoration: none;
  padding-top: 0.313rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px !important;
}

.contact-now:hover {
  transition: 0.8s;
  background-color: var(--contact-now-bg-color);
  color: var(--contact-now-hover-text-color);
}

@media (max-width: 768px) {
  #carousel {
    /* position: fixed; */
    /* top: 100%; */
    /* overflow: hidden; */
    min-height: 100%;
    height: 100%;
  }

  .title {
    font-size: 32px;
  }

  .contact-now {
    height: 2rem;
    width: 8rem;
    font-size: 14px !important;
  }
}
</style>
