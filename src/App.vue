<template>
  <NavbarMenu />
  <router-view />
  <FooterComponent />
</template>

<script>
import NavbarMenu from '@/components/NavbarMenu.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
  components: {
    NavbarMenu,
    FooterComponent,
  },
};
</script>
