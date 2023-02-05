<template>
  <section id="rooms">
    <div class="title">
      <h3>Odalarımız</h3>
    </div>
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

.title h3 {
  font-family: 'Gilda Display', sans-serif;
  font-size: 42px;
}

@media (max-width: 425px) {
  #rooms {
    padding: 4rem 0;
  }
  .title {
    width: 60%;
  }

  .title h3 {
    font-size: 36px;
  }
}
</style>
