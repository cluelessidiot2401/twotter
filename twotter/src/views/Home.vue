<template>
  <div class="home">
    <h1>Heading home, eh?</h1>
    <div class="users-list">
      <router-link
        v-for="user in userdata"
        :to="{ name: 'UserProfile', params: { userId: user.userId } }"
        :key="user.userId"
      >
        {{ user.username }}
      </router-link>
    </div>
  </div>
</template>

<script>
import userdata from "@/assets/users.json";
export default {
  name: "Home",
  setup() {
    return {
      userdata,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin: 5rem 5rem;
  padding: 2rem;

  .users-list {
    display: flex;
    flex-direction: column;

    a {
      margin: 0.5rem;
    }
  }
}
</style>
