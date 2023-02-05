<template>
  <div class="container d-flex justify-content-center">
    <div class="card">
      <img src="@/assets/imgs/room-image-1.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h3 class="card-title">Suit Oda</h3>
        <p class="card-text">1+0 klasik suit odalarımızla konforlu bir konaklama deneyimi yaşayın.</p>
        <ul class="room-features">
          <li class="room-feature">
            <font-awesome-icon icon="fa-solid fa-check" class="icon" size="xl" />
            Ücretsiz Wi-Fi
          </li>
          <li class="room-feature">
            <font-awesome-icon icon="fa-solid fa-check" class="icon" size="xl" />
            Sıcak Su
          </li>
          <li class="room-feature">
            <font-awesome-icon icon="fa-solid fa-check" class="icon" size="xl" />
            Temiz Havlu
          </li>
        </ul>

        <router-link :to="{ name: 'contact' }" class="btn btn-contact">Bizimle İletişime Geçin</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container-xxl {
  width: 90%;
}

.card-title {
  font-family: 'Gilda Display', sans-serif;
  font-size: 36px;
}

.card-text {
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  color: #666;
}

.room-features {
  display: flex;
  justify-content: space-around;
  list-style: none;
  border-bottom: 1px solid #ececec;
}

.room-feature {
  width: 10rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #666;
}

.icon {
  color: #e38610;
  margin: 5px;
}

.btn-contact {
  border-radius: 0;
  border: 1px solid #e38610;
  background-color: #e38610;
  color: #fff;
  transition: 0.5s ease all;
}

.btn-contact:hover {
  border-radius: 5;
  border: 1px solid #2f2f2f;
  background-color: #2f2f2f;
  color: #fff;
}

@media (max-width: 425px) {
  .room-features {
    flex-direction: column;
    justify-content: flex-start;
    padding: 0;
  }
}
</style>
