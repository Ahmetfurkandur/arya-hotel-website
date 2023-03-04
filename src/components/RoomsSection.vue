<template>
  <section id="rooms">
    <slot name="rooms-title"></slot>
    <slot name="rooms"></slot>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#rooms {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-items: space-around;
  padding: 8rem 0;
  width: 100%;
}

.title {
  width: 50%;
  height: 5rem;
}

@media (max-width: 425px) {
  #rooms {
    padding: 4rem 0;
  }
}
</style>
