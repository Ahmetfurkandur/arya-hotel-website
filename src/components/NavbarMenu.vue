<template>
  <div class="nav d-flex justify-content-around align-items-center">
    <div id="logo">
      <h1>LOGO</h1>
    </div>

    <div id="nav-items">
      <ul class="nav d-flex align-items-center">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Ana Sayfa</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/odalarimiz">Odalarımız</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/galeri">Galeri</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/rezervasyon">Rezervasyon</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/iletisim">İletişim</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav {
  z-index: 10;
  height: 7rem;
  width: 100%;
  background-color: var(--bg-color-navbar);
}

#logo {
  color: var(--nav-item-text-color);
}

.nav-link {
  color: var(--nav-item-text-color);
}
</style>
