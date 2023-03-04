<template>
  <PageHeader :headerValues="{ caption: 'Derinlere Dalın', title: 'Galeri' }" />
  <GallerySection>
    <template #images>
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-md-3 m-3" v-for="source in imageSources" :key="source">
            <GalleryImage :imageSource="source" />
          </div>
        </div>
      </div>
    </template>
  </GallerySection>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import GallerySection from '../components/GallerySection.vue';
import GalleryImage from '../components/GalleryImage.vue';
export default {
  data() {
    return {
      imageSources: [
        '/assets/room-image-1.jpg',
        '/assets/room-image-2.jpg',
        '/assets/room-image-3.jpg',
        '/assets/room-image-4.jpg',
        '/assets/room-image-5.jpg',
        '/assets/room-image-6.jpg',
        '/assets/room-image-7.jpg',
      ],
    };
  },
  components: {
    PageHeader,
    GallerySection,
    GalleryImage,
  },
};
</script>

<style scoped></style>
