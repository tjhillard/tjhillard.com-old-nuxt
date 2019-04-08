<template>
  <div class="layout-default">
    <transition name="fade-extra-slow">
      <navbar v-if="showNavbar" />
    </transition>

    <!-- Pages -->
    <nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/base/navbar';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      showNavbar: false,
    };
  },
  created() {
    setTimeout(() => {
      this.showNavbar = true;
    }, 10);
  },
};
</script>
