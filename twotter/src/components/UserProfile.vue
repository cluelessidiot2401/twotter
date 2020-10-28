<template>
  <div class="user-profile">
    <div class="user-profile__container">
      <div class="user-profile__user-panel">
        <h1 class="user-profile__username">@{{ user.username }}</h1>
        <div v-if="user.isAdmin" class="user-profile__admin-badge">
          Admin
        </div>
        <div v-else class="user-profile__admin-badge">
          User
        </div>
        <div class="user-profile__follower-count">
          <strong>Followers: </strong> {{ followers }}
        </div>
      </div>
      <CreateTwootPanel @create-twoot="createNewTwoot" />
    </div>
    <div class="user-profile__twoots-wrapper">
      <TwootItem
        v-for="twoot in user.twoots"
        :twoot="twoot"
        :username="user.username"
        :key="twoot.id"
        @favourite="toggleFavourite"
      />
    </div>
  </div>
</template>

<script>
import TwootItem from "./TwootItem";
import CreateTwootPanel from "./CreateTwootPanel";
import userdata from "../assets/users.json";

export default {
  name: "UserProfile",
  components: { TwootItem, CreateTwootPanel },
  data() {
    return {
      followers: 0,
      user: userdata,
    };
  },
  watch: {
    followers(newFollowerCount, oldFollowerCount) {
      if (oldFollowerCount < newFollowerCount) {
        console.log(`${this.user.username} has gained followers!`);
      } else if (oldFollowerCount > newFollowerCount) {
        console.log(`${this.user.username} has lost followers!`);
      }
    },
  },
  computed: {
    newTwootCharacterCount() {
      return this.selectedTwootContent.length;
    },
  },
  methods: {
    followUser() {
      this.followers++;
    },
    unfollowUser() {
      this.followers--;
    },
    toggleFavourite(twoot) {
      twoot.favourited = !twoot.favourited;
    },
    createNewTwoot(twootContent) {
      this.user.twoots.unshift({
        id: this.user.twoots.length + 1,
        content: twootContent,
        likes: 0,
        favourited: false,
      });
    },
  },
  mounted() {
    this.followUser();
  },
};
</script>

<style lang="scss" scoped>
.user-profile {
  display: flex;
  flex-wrap: wrap;
  padding: 5rem 5%;
  height: 100%;
  align-items: baseline;

  .user-profile__container {
    min-width: 35rem;
    flex-grow: 1;

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
    margin: 0.5rem 2.5rem;
    flex-grow: 3;
  }
}
</style>
