<template>
  <a
    :href="link"
    target="_blank"
    class="col-sm-12 col-md-12 col-lg-6 p-md sm:my-md md:my-sm lg:my-sm cursor-pointer no-underline hover:shadow-md hover:rise-md font-size-lg bg-white rounded-sm shadow-sm"
  >
    <span class="hover:grow-sm font-family-secondary">{{ name }}</span>
    <span class="float-right">{{ emoji }} </span>

    <div class="mt-md font-size-sm text-black z-10">
      <slot />
    </div>
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    emoji: {
      type: String,
      required: true,
    },
  },
};
</script>
