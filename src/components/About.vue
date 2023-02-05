<template>
  <div class="container">
    <div class="about-description">
      <div class="title">Arya Otel</div>
      <p>Rahat odalardaki birçok hoş ayrıntı konaklama yerinin konforunu arttırmaktadır.</p>
      <p>
        bir emanet bürosu, otel kasası, bir bankamatik, bir restoran, bir konferans salonu, bir ofis alanı ve bir çamaşırhane bulunmaktadır. Ortak alanlardaki kablosuz internet
        bağlantısı sayesinde misafirler, (ücretsiz) dış dünya ile iletişimlerini sağlayabilirler. Gezi rezervasyonları hakkında detaylı bilgi tur kayıt masalarında sunulmaktadır.
        Özel aracıyla seyahat eden misafirlerin ihtiyaç halinde kullanılabilecekleri park yerleri (ücretsiz) mevcuttur.
      </p>

      <div class="reservation">
        <div class="icon">
          <font-awesome-icon class="call-icon" icon="fa-solid fa-phone" size="2x" />
        </div>
        <div class="text">
          <span>Hemen Arayın</span>
          <a href="tel:+90 544 625 50 54">+90 544 625 50 54</a>
        </div>
      </div>
    </div>
    <div class="about-image">
      <img src="@/assets/imgs/room-image-4.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  /* width: 50%; */
}

.container .about-description {
  width: 500px;
}

.container .about-description .title {
  font-size: 45px;
  font-family: 'Gilda Display', sans-serif;
  margin-bottom: 10px;
  color: #222;
}

.container .about-description p {
  color: #666;
  font-family: 'Barlow', sans-serif;
}

.container .about-description .reservation {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 250px;
}

.container .about-description .reservation .icon {
  margin-right: 10px;
  font-size: 18px;
  color: #e38610;
}

.container .about-description .reservation .text {
  display: flex;
  flex-direction: column;
}

.container .about-description .reservation .text span {
  color: #666;
  font-size: 18px;
}

.container .about-description .reservation .text a {
  font-size: 24px;
  text-decoration: none;
  color: #ec9626;
}

.container .about-image {
  height: 360px;
  width: 275px;
  margin-left: 75px;
}

.container .about-image img {
  border-radius: 10px;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 425px) {
  .container {
    flex-direction: column;
    justify-content: flex-start;
  }

  .container .about-description {
    width: 100%;
  }

  .container .about-image {
    margin: 50px 50px 50px 0;
  }
}
</style>
