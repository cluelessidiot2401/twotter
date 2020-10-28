<template>
  <form
    class="user-profile__create-twoot"
    @submit.prevent="createNewTwoot"
    :class="{ '--exceeded': newTwootCharacterCount > 180 }"
  >
    <label for="newTwoot"
      ><strong>New Twoot</strong> ({{ newTwootCharacterCount }}/180)</label
    >
    <textarea
      name=""
      id="newTwoot"
      rows="4"
      v-model="selectedTwootContent"
    ></textarea>
    <div class="user-profile__twotter-panel">
      <div class="user-profile__create-twoot-type">
        <label for="newTwootType"><strong>Type: </strong></label>
        <select id="newTwootType" v-model="selectedTwootType">
          <option
            :value="option.value"
            v-for="(option, index) in twootTypes"
            :key="index"
          >
            {{ option.name }}
          </option>
        </select>
      </div>
      <button @click="createNewTwoot" :disabled="newTwootCharacterCount > 180">
        Twoot!
      </button>
    </div>
  </form>
</template>

<script>
import allTwootTypes from "../assets/twootTypes.json";
export default {
  name: "UserProfile",
  data() {
    return {
      selectedTwootType: "instant",
      selectedTwootContent: "",
      twootTypes: allTwootTypes,
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
    createNewTwoot() {
      if (this.selectedTwootContent && this.selectedTwootType !== "draft") {
        this.$emit("create-twoot", this.selectedTwootContent);
        this.selectedTwootContent = "";
      }
    },
  },
  mounted() {
    this.followUser();
  },
};
</script>

<style lang="scss" scoped>
.user-profile__create-twoot {
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  width: 33rem;
  align-self: center;
  justify-self: center;
  margin: 0.5rem auto;

  label {
    margin: 0 auto;
  }

  #newTwoot {
    margin: 0.8rem;
  }

  .user-profile__twotter-panel {
    display: flex;
    align-items: baseline;
    justify-content: center;
    .user-profile__create-twoot-type {
      margin: 0.8rem;
    }

    button {
      margin: 0.8rem;
      background-color: #f0007f;
      color: white;
      border-radius: 0.8rem;
      padding: 0.5rem 0.8rem;
      border: none;

      &:hover,
      &:focus {
        outline: none;
        // box-shadow: 0 0 3pt 2pt black;
      }
      &:hover {
        transform: scale(1.1, 1.1);
      }
    }
  }

  &.--exceeded {
    color: red;
    border-color: red;

    button {
      background-color: red;
      border: none;
      color: white;
    }
  }
}
</style>
