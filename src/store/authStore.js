import { defineStore } from "pinia";

/*
    You can name the return value of `defineStore()` anything you want,
    but it's best to use the name of the store and surround it with `use`
    and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
*/
export const useAuthStore = defineStore("auth", {
    // these actions are like actions + mutations, you can use these async as well
    actions: {
        addAuthToken() {
        },
        delAuthToken() {
        }
    },
    // these are basically computed properties for our store,
    // I am not sure, but I think getters is to mutate?
    getters: {
        getAuthToken: (state) => state.authToken,
    },
    // this is our state
    state: () => {
        return {
            authToken: null
        };
    }
});
