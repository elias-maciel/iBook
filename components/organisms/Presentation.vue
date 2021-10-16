<template>
  <div class="presentation">
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis maiores ipsum
    doloremque inventore magnam harum veritatis illum vero. Quas inventore
    numquam eligendi ex, sint saepe natus necessitatibus quo dolore.
    Repudiandae?
    </p>

    <img src="@/assets/img/presentation.svg" alt="Apresentação do iBook">
  </div>
</template>

<style scoped lang="scss">
.presentation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  align-items: center;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
  p {
    line-height: 26px;
  }
  img {
    max-width: 100%;
  }
}
</style>
