<template>
  <div>
    <div>
      <img
        class="mx-auto h-12 w-auto"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="Workflow"
      />
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Register for free
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Or
        {{ " " }}
        <router-link
          :to="{ name: 'Login' }"
          class="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Login to your account
        </router-link>
      </p>
    </div>
    <form class="mt-8 space-y-6" @submit="register">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="full-name" class="sr-only">Full Name</label>
          <input
            id="full-name"
            name="name"
            type="text"
            autocomplete="fullName"
            required=""
            class="input rounded-t-md"
            placeholder="Full Name"
            v-model="user.name"
          />
        </div>
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            autocomplete="email"
            required=""
            class="input"
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
            class="input"
            placeholder="Password"
            v-model="user.password"
          />
        </div>
        <div>
          <label for="password_confirmation" class="sr-only"
            >Password Confirmation</label
          >
          <input
            id="password_confirmation"
            name="password_confirmation"
            type="password"
            autocomplete="current-password"
            required=""
            class="input rounded-b-md"
            placeholder="Password Confirmation"
            v-model="user.password_confirmation"
          />
        </div>
      </div>

      <div>
        <button type="submit" class="group btn">Sign up</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import store from "../store";
import { useRouter } from "vue-router";

const router = useRouter();

const user = {
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
};

function register(e) {
  e.preventDefault();

  store.dispatch("register", user).then(() => {
    router.push({
      name: "Dashboard",
    });
  });
}
</script>

<style scoped></style>
