<template>
  <div class="text-center text-[28px] mb-4 font-bold">Log in</div>
  <div class="px-6 pb-1.5 text-15px[]">Email Address</div>
  <div class="px-6 pb-2">
    <TextInput
      placeholder="Email"
      v-model:input="email"
      inputType="email"
      :autoFocus="true"
      error=""
    />
  </div>

  <div class="px-6 pb-2">
    <TextInput
      placeholder="Password"
      v-model:input="password"
      inputType="password"
    />
  </div>
  <div class="px-6 text-[12px] text-gray-600">Forgot password?</div>
  <div class="px-6 pb-2 mt-6">
    <button
      @click="($event) => login()"
      class="w-full text-[17px] bg-red-500 font-semibold text-white py-3 rounded-sm"
    >
      Log in
    </button>
  </div>
</template>

<script setup>
const { $axios } = useNuxtApp();

let email = ref(null);
let password = ref(null);
let errors = ref(null);

const login = async () => {
  try {
    await $axios.get("/sanctum/csrf-cookie");

    await $axios.post("/login", {
      email: "john@m.com",
      password: "123123123",
    });

    let res = await $axios.get("/api/user");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
</script>
