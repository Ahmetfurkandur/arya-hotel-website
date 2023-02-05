<template>
  <RoomsSection>
    <template #rooms>
      <Room />
    </template>
  </RoomsSection>
</template>

<script>
import RoomsSection from '@/components/RoomsSection.vue';
import Room from '../components/Room.vue';
export default {
  components: {
    RoomsSection,
    Room,
  },
};
</script>

<style lang="scss" scoped></style>
