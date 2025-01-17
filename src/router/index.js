import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import Home from "@/views/Home.vue";
import UserProfile from "@/views/UserProfile.vue";
import Admin from "@/views/Admin.vue";
import users from "@/assets/users.json";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user/:userId",
    name: "UserProfile",
    component: UserProfile,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: {
      requiresAdmin: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const user = store.state.User.user;

  if (!user) {
    // get it from API, etc.
    await store.dispatch("User/setUser", users[0]);
  }

  const isAdmin = false;
  const requiresAdmin = to.matched.some((record) => record.meta.requiresAdmin);

  if (requiresAdmin && !isAdmin) next({ name: "Home" });
  else next();
});

export default router;
