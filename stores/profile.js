import { defineStore } from "pinia";

export const useProfileStore = defineStore("profile", {
  state: () => {
    return {
      id: "",
      name: "",
      bio: "",
      image: "",
      post: null,
      posts: null,
      allLikes: 0,
    };
  },

  actions: {
    //
  },
  persist: true,
});
