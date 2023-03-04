<template>
  <PageHeader :headerValues="{ caption: 'Sayfa Bulunamadı!', title: 'Hata' }" />
  <NotFoundSection />
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import NotFoundSection from '@/components/NotFoundSection.vue';
export default {
  components: {
    PageHeader,
    NotFoundSection,
  },
};
</script>

<style></style>
