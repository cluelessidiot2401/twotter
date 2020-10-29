<template>
  <div class="twoot-item" @click="favouriteTwoot(twoot)">
    <div class="user-profile__twoot">
      <div class="twoot-item__user">@{{ username }}</div>
      <div class="user-profile__twoot-content">
        {{ twoot.content }}
      </div>
      <img
        v-if="twoot.favourited"
        src="../assets/iconmonstr-favorite-3.svg"
        alt=""
      />
      <!-- <div class="user-profile__twoot-like">
        <button>
          <img src="../assets/iconmonstr-facebook-like-1.svg" alt="" />Like
        </button>
        {{ twoot.likes }}
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "TwootItem",
  props: {
    username: {
      type: String,
      required: true,
    },
    twoot: {
      type: Object,
      required: true,
    },
  },
  setup(props, ctx) {
    function favouriteTwoot(twoot) {
      ctx.emit("favourite", twoot);
    }

    return {
      favouriteTwoot,
    };
  },
};
</script>

<style lang="scss" scoped>
.twoot-item {
  margin: 1rem auto;
  background-color: white;
  border-radius: 0.4rem;
  border: 0.1rem solid #dfe3f8;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.25s ease;
  width: 80%;
  text-align: center;

  .user-profile__twoot {
    margin-top: 2rem;

    .twoot-item__user {
      font-weight: bold;
    }

    .user-profile__twoot-content {
      /* border: 0.3rem solid lightgray; */
      /* background: lightsteelblue; */
      /* width: 20rem; */
      padding: 1rem;
      margin-top: 1rem;
      white-space: pre-wrap;
      // min-height: 2rem;
      // overflow: hidden;
      max-width: 50rem;
      margin-left: auto;
      margin-right: auto;
    }

    .user-profile__twoot-like,
    .user-profile__twoot-like button {
      padding: 0.2rem 1rem;
      font-size: 1.6rem;
      display: flex;
      justify-content: end;
    }
  }

  &:hover {
    transform: scale(1.1, 1.1);
  }
}
</style>
