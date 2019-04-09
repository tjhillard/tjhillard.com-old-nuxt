<template>
  <nav class="p-md">
    <transition name="fade-slow">
      <div class="container flex justify-between">
        <span class="font-size-xl">
          _tjhillard
        </span>
        <span class="font-size-lg pt-sm">
          <a
            href="https://github.com/tjhillard"
            target="_blank"
            class="
              sm:pl-sm md:pl-lg cursor-pointer no-underline text-black hover:underline"
          >
            <fa :icon="['fab', 'github']" />
          </a>

          <a
            href="https://twitter.com/_tjhillard"
            target="_blank"
            class="
              sm:pl-sm md:pl-lg cursor-pointer no-underline text-black hover:underline
            "
          >
            <fa :icon="['fab', 'twitter']" />
          </a>

          <a
            href="https://www.linkedin.com/in/tjhillard"
            target="_blank"
            class="
              sm:pl-sm md:pl-lg cursor-pointer no-underline text-black hover:underline
            "
          >
            <fa :icon="['fab', 'linkedin']" />
          </a>
        </span>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showNavbar: false,
      showNavbarItemOne: false,
      showNavbarItemTwo: false,
      showNavbarItemThree: false,
    };
  },
  created() {
    setTimeout(() => {
      this.showNavbar = true;
    }, 1000);

    setTimeout(() => {
      this.showNavbarItemOne = true;
    }, 250);

    setTimeout(() => {
      this.showNavbarItemTwo = true;
    }, 550);

    setTimeout(() => {
      this.showNavbarItemThree = true;
    }, 900);
  },
};
</script>

<style>
.invisible-fade {
  transition: visibility 0s, opacity 0.5s linear;
}
</style>
