<template>
  <div class="app">
    <nav>
      <router-link to="/">
        <div class="navigation__logo">
          Twooter
        </div>
      </router-link>
      <div class="navigation__user" v-if="user">
        {{ user.username }}
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "App",
  setup() {
    const store = useStore();
    const user = computed(() => store.state.User.user);
    return {
      user,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.6rem;
  background-color: #f3f5fa;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  overflow: auto;
  scrollbar-width: thin;

  .app {
    width: 100%;

    nav {
      display: flex;
      justify-content: space-around;
      // width: 100%;
      // overflow: hidden;
      background-color: #f0007f;
      color: white;
      padding: 0.8rem 8rem;
      position: sticky;
      top: 0%;
      z-index: 1;
    }
  }
}
</style>
