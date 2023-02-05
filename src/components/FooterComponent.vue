<template>
  <footer>
    <div class="top-footer d-flex align-items-center">
      <div class="container w-75">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-sm">
            <h3 class="title">Arya Otel</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam perferendis dignissimos maiores at ratione, molestias, maxime aliquid quia ut perspiciatis, ullam
              iste eveniet? Voluptatibus iure saepe reiciendis ullam consequatur. Error!
            </p>
          </div>
          <div class="col m-5">
            <h3 class="title">Menü</h3>
            <ul class="menu-list">
              <li><router-link :to="{ name: 'home' }" class="link">Ana Sayfa</router-link></li>
              <li><router-link :to="{ name: 'rooms' }" class="link">Odalarımız</router-link></li>
              <li><router-link :to="{ name: 'gallery' }" class="link">Galeri</router-link></li>
              <li><router-link :to="{ name: 'contact' }" class="link">İletişim</router-link></li>
            </ul>
          </div>
          <div class="col-sm">
            <h3 class="title">İletişim</h3>
            <p>Tacettin Veli, Seyyid Burhanettin Blv. No:12, 38050 Melikgazi/Kayseri</p>
            <div class="reservation">
              <div class="icon">
                <font-awesome-icon class="call-icon" icon="fa-solid fa-phone" size="2x" />
              </div>
              <div class="text">
                <a href="tel:+90 544 625 50 54">+90 544 625 50 54</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-footer d-flex justify-content-center align-items-center">
      <p>&copy; Telif Hakkı 2023 Arya Otel | Bu web sitesi, Ahmet Furkan Dur tarafından yapılmıştır.</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  width: 100%;
  height: 450px;
  color: #666;
  font-size: 14px;
}

footer .top-footer {
  height: 80%;
  background-color: #1f1f1f;
}

footer .top-footer .title {
  color: #fff;
  font-family: 'Gilda Display', sans-serif;
  font-size: 32px;
}

footer .top-footer .menu-list {
  list-style: none;
  padding: 0;
}

footer .top-footer .menu-list li {
  margin-bottom: 10px;
}

footer .top-footer .menu-list li .link {
  text-decoration: none;
  color: #666;
}

.reservation {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 250px;
}

.reservation .icon {
  margin-right: 10px;
  font-size: 12px;
  color: #fff;
}

.reservation .text {
  display: flex;
  flex-direction: column;
}

.reservation .text a {
  font-size: 21px;
  text-decoration: none;
  color: #fff;
  font-family: 'Barlow Condensed', sans-serif;
}

footer .bottom-footer {
  height: 20%;
  background-color: #1a1a1a;
  font-size: 10px;
}
</style>
