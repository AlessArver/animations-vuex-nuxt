<template>
  <div class="hmm__wrapper">
    <h1 ref="title" class="page__title hmm__title">
      <span ref="titleText">Hover on me</span>
    </h1>
    <div ref="cursor" class="cursor"></div>
    <div ref="aura" class="aura"></div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  mounted() {
    this.cursorHover();
  },
  methods: {
    cursorHover() {
      const cursor = this.$refs.cursor;
      const aura = this.$refs.aura;

      const editCursor = e => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";

        // aura.style.left = x + "px";
        // aura.style.top = y + "px";
      };
      window.addEventListener("mousemove", editCursor);
    }
  }
};
</script>

<style lang="scss" scoped>
.hmm {
  &__wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: black;
    color: white;
    cursor: none;
  }

  &__title {
    transition: all 0.3s ease;

    span {
      pointer-events: none;
      transition: transform 0.3s linear;
    }
  }
  &__title:hover ~ .cursor,
  &__title:active ~ .cursor,
  &__title:focus ~ .cursor {
    transform: translate(-50%, -50%) scale(8);
  }
}

.cursor {
  padding: 0.3rem;
  position: fixed;
  background: #fff;
  border-radius: 50%;
  mix-blend-mode: difference;
  transition: all 0.3s ease;
}
</style>
