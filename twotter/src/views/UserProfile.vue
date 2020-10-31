<template>
  <div class="user-profile">
    <div class="user-profile__container">
      <div class="user-profile__user-panel">
        <h1 class="user-profile__username">@{{ state.user.username }}</h1>
        <h2>{{ userId }}</h2>
        <div v-if="state.user.isAdmin" class="user-profile__admin-badge">
          Admin
        </div>
        <div v-else class="user-profile__admin-badge">
          User
        </div>
        <div class="user-profile__follower-count">
          <strong>Followers: </strong> {{ state.user.followers }}
        </div>
      </div>
      <CreateTwootPanel @create-twoot="createNewTwoot" />
    </div>
    <div class="user-profile__twoots-wrapper">
      <TwootItem
        v-for="twoot in state.user.twoots"
        :twoot="twoot"
        :username="state.user.username"
        :key="twoot.id"
        @favourite="toggleFavourite"
      />
    </div>
  </div>
</template>

<script>
import TwootItem from "@/components/TwootItem";
import CreateTwootPanel from "@/components/CreateTwootPanel";
import userdata from "@/assets/users.json";
import { useRoute } from "vue-router";
import { onMounted, reactive, watch, computed } from "vue";

export default {
  name: "UserProfile",
  components: { TwootItem, CreateTwootPanel },

  setup() {
    const route = useRoute();
    const userId = computed(() => route.params.userId);

    const state = reactive({
      user: getUserById(userId),
    });

    onMounted(() => {
      state.followers = 25;
    });

    watch(
      () => state.user.followers,
      (newFollowerCount, oldFollowerCount) => {
        if (oldFollowerCount < newFollowerCount) {
          console.log(
            `${state.user.username}'s followers increased to ${newFollowerCount}!`
          );
        } else if (oldFollowerCount > newFollowerCount) {
          console.log(
            `${state.user.username}'s followers decreased to ${newFollowerCount}`
          );
        }
      }
    );

    function followUser() {
      state.user.followers++;
    }

    function unfollowUser() {
      state.user.followers--;
    }

    function toggleFavourite(twoot) {
      twoot.favourited = !twoot.favourited;
    }

    function createNewTwoot(twootContent) {
      state.user.twoots.unshift({
        id: state.user.twoots.length + 1,
        content: twootContent,
        likes: 0,
        favourited: false,
      });
    }

    function getUserById(userId) {
      return userdata.find((entry) => entry.userId == userId.value);
    }

    return {
      state,
      followUser,
      unfollowUser,
      toggleFavourite,
      createNewTwoot,
      userId,
      getUserById,
    };
  },
};
</script>

<style lang="scss" scoped>
.user-profile {
  display: flex;
  flex-wrap: wrap;
  // padding: 5rem 5%;
  height: 100%;
  align-items: baseline;

  .user-profile__container {
    flex-grow: 1;
    margin: 5rem 0.5rem;

    .user-profile__user-panel {
      display: flex;
      flex-direction: column;
      margin: 0.5rem auto;
      padding: 2rem;
      background-color: white;
      border-radius: 0.8rem;
      border: 0.1rem solid #dfe3e8;
      width: 33rem;

      .user-profile__follower-count {
        margin-top: 1rem;
      }

      h1 {
        margin: 0;
      }

      .user-profile__admin-badge {
        background: rebeccapurple;
        margin-top: 0.8rem;
        margin-right: auto;
        border-radius: 0.5rem;
        padding: 0.2rem 0.5rem;
        color: white;
      }
    }
  }

  .user-profile__twoots-wrapper {
    // width: 90%;
    min-width: 20rem;
    margin: 0.5rem 2.5rem;
    flex-grow: 3;
  }
}
</style>
