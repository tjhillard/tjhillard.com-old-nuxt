export default {
  name: 'on-scrolled-to',
  isFn: true,
  bind(element, binding) {
    const isInViewport = () => {
      const bounding = element.getBoundingClientRect();
      return (
        bounding.top >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
    };

    element.onScroll = () => {
      if (isInViewport()) {
        binding.value();
        document.removeEventListener('scroll', element.onScroll);
      }
    };

    window.addEventListener('scroll', element.onScroll);
  },
  unbind(element) {
    if (element.onScroll) {
      document.removeEventListener('scroll', element.onScroll);
    }
  },
};
