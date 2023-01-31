<template>
  <header :class="{ 'scroll-nav': scrollPosition }">
    <nav>
      <div class="branding">
        <img src="@/assets/imgs/logo.png" />
      </div>

      <ul v-show="!mobile" class="navigation">
        <li><router-link class="link" :to="{ name: 'home' }">ANA SAYFA</router-link></li>
        <li><router-link class="link" :to="{ name: 'rooms' }">ODALARIMIZ</router-link></li>
        <li><router-link class="link" :to="{ name: 'gallery' }">GALERİ</router-link></li>
        <li><router-link class="link" :to="{ name: 'contact' }">İLETİŞİM</router-link></li>
      </ul>

      <div class="icon">
        <font-awesome-icon @click="toggleMobileNav" id="inner-icon" v-show="mobile" icon="fa-solid fa-bars" :class="{ 'icon-active': mobileNav }" />
      </div>
      <Transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li><router-link class="link" :to="{ name: 'home' }">ANA SAYFA</router-link></li>
          <li><router-link class="link" :to="{ name: 'rooms' }">ODALARIMIZ</router-link></li>
          <li><router-link class="link" :to="{ name: 'gallery' }">GALERİ</router-link></li>
          <li><router-link class="link" :to="{ name: 'contact' }">İLETİŞİM</router-link></li>
        </ul>
      </Transition>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },

  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }

      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    updateNavbarOnScroll() {
      if (window.scrollY >= 10) {
        this.scrollPosition = true;
        return;
      }

      this.scrollPosition = false;
      return;
    },
  },

  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },

  mounted() {
    window.addEventListener('scroll', this.updateNavbarOnScroll);
  },
};
</script>

<style>
header {
  position: fixed;
  display: flex;
  align-items: center;
  background-color: var(--bg-color-navbar);
  z-index: 100;
  width: 100%;
  height: 8rem;
  transition: 0.5s ease all;
  color: var(--nav-item-text-color);
}
nav {
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 0.8rem 0;
  width: 90%;
  margin: 0 auto;
}
@media (min-width: 1140px) {
  nav {
    max-width: 1140px;
  }
}

nav ul,
nav .link {
  font-weight: 500;
  color: var(--nav-item-text-color);
  list-style: none;
  text-decoration: none;
}
nav li {
  text-transform: uppercase;
  padding: 0.25rem;
  margin: 0.5rem;
}
nav .link {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 16px;
  transition: 0.5s ease all;
  padding: 4px;
}
nav .link:hover {
  color: var(--nav-item-text-hover-color);
}
nav .branding {
  display: flex;
  align-items: center;
}
nav .branding img {
  width: 150px;
  transition: 0.5s ease all;
}

@media (max-width: 320px) {
  nav .branding img {
    width: 125px;
  }
}

nav .navigation {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
}

nav .icon {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 1.6rem;
  height: 100%;
}

nav .icon #inner-icon {
  cursor: pointer;
  font-size: 20px;
  transition: 0.8s ease all;
}

nav .icon-active {
  transform: rotate(180deg);
}

nav .dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 15.625rem;
  height: 100%;
  background-color: #fff;
  top: 0;
  left: 0;
}

nav .dropdown-nav li {
  margin-left: 0;
}

nav .dropdown-nav li .link {
  color: #000;
}

.scroll-nav {
  background-color: #f0f0f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.1);
}

.scroll-nav nav .navigation li .link {
  color: #000;
}

.scroll-nav nav .icon {
  color: #000;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-250px);
}

.mobile-nav-enter-to,
.mobile-nav-leave-from {
  transform: translateX(0);
}
</style>
