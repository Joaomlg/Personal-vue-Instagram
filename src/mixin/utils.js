const utils = {
  computed: {
    $isMobile() {
      if(window.innerWidth < 640)
        return true;
      return false;
    },
    $theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light';
    },
    $dark() {
      return this.$vuetify.theme.dark;
    }
  }
}

export default utils;