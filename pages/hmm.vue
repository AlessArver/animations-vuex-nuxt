<template>
  <div class="wrapper">
    <div ref="titleAniamtion" class="title--animation">Animation</div>
    <div ref="titleHover" class="title--hover">Hover on me</div>

    <div>
      <!-- <img ref="heartIcon" class="heart-icon" :src="heartIcon" /> -->
      <div ref="runCircle" class="run--circle"></div>
    </div>

    <div ref="titleDark" class="title--dark">Shine on me</div>

    <div ref="cursor" class="cursor"></div>
    <div ref="aura" class="aura"></div>
  </div>
</template>

<script>
import anime from "animejs";
import HeartIcon from "~/assets/images/heart.svg";

export default {
  data: () => ({ heartIcon: HeartIcon }),
  mounted() {
    this.cursorHover();
    this.textAnimation();
  },
  methods: {
    cursorHover() {
      const cursor = this.$refs.cursor;
      const aura = this.$refs.aura;

      const editCursor = e => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";

        aura.style.left = x + "px";
        aura.style.top = y + "px";
      };
      window.addEventListener("mousemove", editCursor);
    },
    textAnimation() {
      const animeEl = this.$refs.titleAniamtion;
      const hoverEl = this.$refs.titleHover;
      const darkEl = this.$refs.titleDark;
      const runCircleEl = this.$refs.runCircle;

      animeEl.innerHTML = animeEl.innerText
        .split("")
        .map(value => {
          if (value == " ") {
            value = "&nbsp;";
          }
          return `<span style='display: inline-block;'>${value}</span>`;
        })
        .join("");

      anime({
        targets: runCircleEl,
        loop: true,
        translateX: {
          value: 40,
          duration: 1000,
          delay: 500
        },
        scaleX: [
          { value: 4, duration: 100, delay: 500, easing: "easeOutExpo" },
          { value: 1, duration: 900 },
          { value: 4, duration: 100, delay: 500, easing: "easeOutExpo" },
          { value: 1, duration: 900 }
        ],
        rotate: anime.stagger([-360, 360]),
        duration: 4000
      });
      anime({
        loop: true,
        targets: ".title--animation span",
        translateX: [(el, i) => i * -50, 0],
        opacity: [0, 1],
        delay: (el, i) => i * 200
      });
      anime({
        targets: hoverEl,
        translateX: -200,
        rotate: 50,
        fontSize: 20,
        easing: "easeInOutQuad"
      });
      anime({
        targets: darkEl,
        translateX: 100,
        duration: 3000,
        fontSize: 40,
        easing: "easeInOutQuad"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
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

.run--circle {
  width: 10px;
  height: 10px;
  background: red;
  border-radius: 50px;
}

.heart-icon {
  width: 70px;
  height: 70px;
  filter: invert(36%) sepia(92%) saturate(6593%) hue-rotate(344deg)
    brightness(92%) contrast(135%);

  &--rounded {
    width: 70px;
    height: 70px;
    background: #ff0011;
    border-radius: 50px;
  }
}

.title {
  &--animation {
    padding: 100px 0;
    width: 100%;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 5px;
    text-align: center;
  }

  &--hover {
    font-size: 25px;

    &:hover ~ .cursor,
    &:active ~ .cursor,
    &:focus ~ .cursor,
    &:active ~ .cursor {
      transform: translate(-50%, -50%) scale(8);
    }
  }

  &--dark {
    padding: 25px;
    color: #0c0c0c;

    &:hover ~ .cursor,
    &:active ~ .cursor,
    &:focus ~ .cursor,
    &:active ~ .cursor {
      display: none;
    }
    &:hover ~ .aura,
    &:active ~ .aura,
    &:focus ~ .aura,
    &:active ~ .aura {
      background: #1b1a1a;
      box-shadow: 0 0 10px 1px #464141;
      transform: translate(-50%, -50%) scale(8);
    }
  }
}

.cursor,
.aura {
  position: fixed;
  padding: 0.3rem;
  border-radius: 50%;
  mix-blend-mode: difference;
  transition: all 0.5s cubic-bezier(0.45, 0.39, 0.43, 0.82);
}
.cursor {
  background: #fff;
}
</style>
