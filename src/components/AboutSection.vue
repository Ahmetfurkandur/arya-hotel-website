<template>
  <section id="about">
    <slot></slot>
  </section>
</template>

<style>
#about {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--about-section-bg-color);
  padding: 8rem 0;
  width: 100%;
}

@media (max-width: 425px) {
  #about {
    padding: 4rem 0;
  }
}
</style>
