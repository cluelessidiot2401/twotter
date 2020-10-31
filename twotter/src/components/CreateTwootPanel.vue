<template>
  <form
    class="user-profile__create-twoot"
    :class="{ '--exceeded': newTwootCharacterCount > 180 }"
    @submit.prevent="createNewTwoot"
  >
    <label
      for="newTwoot"
    ><strong>New Twoot</strong> ({{ newTwootCharacterCount }}/180)</label>
    <textarea
      id="newTwoot"
      v-model="state.selectedTwootContent"
      name=""
      rows="4"
    />
    <div class="user-profile__twotter-panel">
      <div class="user-profile__create-twoot-type">
        <label for="newTwootType"><strong>Type: </strong></label>
        <select
          id="newTwootType"
          v-model="state.selectedTwootType"
        >
          <option
            v-for="(option, index) in state.twootTypes"
            :key="index"
            :value="option.value"
          >
            {{ option.name }}
          </option>
        </select>
      </div>
      <button
        :disabled="newTwootCharacterCount > 180"
        @click="createNewTwoot"
      >
        Twoot!
      </button>
    </div>
  </form>
</template>

<script>
import { reactive, computed } from "vue";
import allTwootTypes from "../assets/twootTypes.json";
export default {
  name: "UserProfile",
  emits: ["create-twoot"],
  setup(props, ctx) {
    const state = reactive({
      selectedTwootType: "instant",
      selectedTwootContent: "",
      twootTypes: allTwootTypes,
    });

    const newTwootCharacterCount = computed(
      () => state.selectedTwootContent.length
    );

    function createNewTwoot() {
      if (state.selectedTwootContent && state.selectedTwootType !== "draft") {
        ctx.emit("create-twoot", state.selectedTwootContent);
        state.selectedTwootContent = "";
      }
    }

    return {
      state,
      newTwootCharacterCount,
      createNewTwoot,
    };
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
