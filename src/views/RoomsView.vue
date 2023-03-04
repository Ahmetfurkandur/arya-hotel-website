<template>
  <PageHeader :headerValues="{ caption: 'Bizi Keşfedin', title: 'Odalarımız' }" />

  <RoomsSection>
    <template #rooms>
      <Room />
    </template>
  </RoomsSection>
</template>

<script>
import RoomsSection from '@/components/RoomsSection.vue';
import Room from '@/components/Room.vue';
import PageHeader from '@/components/PageHeader.vue';
export default {
  components: {
    RoomsSection,
    Room,
    PageHeader,
  },
};
</script>

<style lang="scss" scoped></style>
