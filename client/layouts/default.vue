<template>
  <div class="layout-default">
    <!-- Pages -->
    <nuxt />
  </div>
</template>

<script>
export default {
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
