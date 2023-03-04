<template>
  <SliderComponent />
  <AboutSection>
    <template #default>
      <About />
    </template>
  </AboutSection>

  <RoomsSection>
    <template #rooms-title>
      <div class="title">
        <h3>Odalarımız</h3>
      </div>
    </template>
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

<style scoped>
.title {
  width: 50%;
  height: 5rem;
}

.title h3 {
  font-family: 'Gilda Display', sans-serif;
  font-size: 42px;
  margin: 0;
}

@media (max-width: 425px) {
  .title {
    width: 60%;
  }

  .title h3 {
    font-size: 36px;
    margin: 0;
  }
}
</style>
