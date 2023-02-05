<template>
  <SliderComponent />
  <AboutSection>
    <template #default>
      <About />
    </template>
  </AboutSection>

  <RoomsSection>
    <template #rooms>
      <Room />
    </template>
  </RoomsSection>
</template>

<script>
import SliderComponent from '@/components/SliderComponent.vue';
import AboutSection from '@/components/AboutSection.vue';
import About from '@/components/About.vue';
import RoomsSection from '@/components/RoomsSection.vue';
import Room from '@/components/Room.vue';

export default {
  components: {
    SliderComponent,
    AboutSection,
    About,
    RoomsSection,
    Room,
  },
};
</script>

<style scoped></style>
