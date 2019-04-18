<template>
  <a
    :href="link"
    target="_blank"
    class="sm:col-12 md:col-12 lg:col-6 p-md sm:my-sm md:my-sm lg:my-sm cursor-pointer no-underline hover:shadow-lg hover:rise-md font-size-lg text-black bg-white rounded-sm shadow-sm"
  >
    <span class="font-weight-medium">{{ name }}</span>
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
