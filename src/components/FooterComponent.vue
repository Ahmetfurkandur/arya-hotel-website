<template>
  <footer>
    <div class="top-footer d-flex align-items-center">
      <div class="container w-75">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-sm">
            <h3 class="title">Arya Otel</h3>
            <p>Rahat odalardaki birçok hoş ayrıntı konaklama yerinin konforunu arttırmaktadır.</p>
            <p>
              bir emanet bürosu, otel kasası, bir bankamatik, bir restoran, bir konferans salonu, bir ofis alanı ve bir çamaşırhane bulunmaktadır. Ortak alanlardaki kablosuz
              internet bağlantısı mevcuttur.
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
      <p>
        Arya Otel | Bu web sitesi <a href="https://www.linkedin.com/in/ahmet-furkan-dur-2068b8214/" class="developer-link">Ahmet Furkan Dur</a> Tarafından kuruldu. |
        <a href="https://storyset.com/web" class="illustrations-attribute-link">Web illustrations by Storyset</a>
      </p>
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

.developer-link {
  text-decoration: none;
  color: #fff;
}

.illustrations-attribute-link {
  text-decoration: none;
  color: #666;
}

footer .bottom-footer {
  height: 20%;
  background-color: #1a1a1a;
  font-size: 10px;
}

@media (max-width: 768px) {
  footer {
    height: 700px;
  }

  .row {
    vertical-align: middle;
  }
}

@media (max-width: 425px) {
  footer {
    height: 900px;
  }
}
</style>
