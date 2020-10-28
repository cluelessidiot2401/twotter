<template>
  <div class="app">
    <nav>
      <div class="navigation__logo">
        Twooter
      </div>
      <div class="navigation__user">
        {{ user.username }}
      </div>
    </nav>
    <UserProfile />
  </div>
</template>

<script>
import UserProfile from "./components/UserProfile";
export default {
  name: "App",
  components: {
    UserProfile,
  },
  data() {
    return {
      user: {
        username: "CluelessIdiot2401",
      },
    };
  },
};
</script>

<style lang="scss">
html {
  font-size: 62.5%;
  /* 62.5% of 16px is 10px */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.6rem;
  background-color: #f3f5fa;
  box-sizing: border-box;
  height: 100%;
  overflow: auto;
  scrollbar-width: thin;

  nav {
    display: flex;
    justify-content: space-between;
    // width: 100%;
    background-color: #f0007f;
    color: white;
    padding: 0.8rem 8rem;
    position: sticky;
    top: 0%;
  }
}
</style>
