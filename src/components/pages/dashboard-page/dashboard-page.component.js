export default {
  name: 'dashboardPage',
  computed: {
    username() {
      return this.$store.getters.USER.firstName
    }
  },
};