<template>
  <div>
    <div>
      <img
        class="mx-auto h-12 w-auto"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="Workflow"
      />
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Sign in to your account
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Or
        {{ " " }}
        <router-link
          :to="{ name: 'Register' }"
          class="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Register fro free
        </router-link>
      </p>
    </div>
    <form class="mt-8 space-y-6" @submit="login">
      <div
        v-if="errorMsg"
        class="
          flex
          items-center
          justify-between
          py-3
          px-5
          bg-red-500
          text-white
          rounded
        "
      >
        {{ errorMsg }}

        <span
          @click="errorMsg = ''"
          class="
            w-8
            h-8
            flex
            items-center
            justify-center
            rounded-full
            transition-colors
            cursor-pointer
            hover:bg-[rgba(0,0,0,0.2)]
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </div>
      <input type="hidden" name="remember" value="true" />
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            autocomplete="email"
            required=""
            class="input rounded-t-md"
            placeholder="Email address"
            v-model="user.email"
          />
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            required=""
            class="input rounded-b-md"
            placeholder="Password"
            v-model="user.password"
          />
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            class="
              h-4
              w-4
              text-indigo-600
              focus:ring-indigo-500
              border-gray-300
              rounded
            "
            v-model="user.remember"
          />
          <label for="remember-me" class="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>
      </div>

      <div>
        <button type="submit" class="group btn">Sign in</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import store from "../store";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const user = {
  email: "",
  password: "",
  remember: false,
};

let errorMsg = ref("");

function login(e) {
  e.preventDefault();
  store
    .dispatch("login", user)
    .then(() => {
      router.push({
        name: "Dashboard",
      });
    })
    .catch((err) => {
      errorMsg.value = err.response.data.error;
    });
}
</script>

<style scoped></style>
