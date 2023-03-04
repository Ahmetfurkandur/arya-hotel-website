<template>
  <img class="image" :src="imageSource" />
</template>

<script>
export default {
  props: ['imageSource'],
};
</script>

<style scoped>
.image {
  width: 16.667rem;
  height: 13.333rem;
  object-fit: cover;
  transition: 0.5s ease all;
}

.image:hover {
  width: 16rem;
  height: 13rem;
}
</style>
