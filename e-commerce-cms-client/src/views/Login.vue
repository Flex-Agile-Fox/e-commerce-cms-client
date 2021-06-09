<template>
  <div class="container container-form">
    <h1 class="header">Login Form</h1>
    <form>
      <!-- Email input -->
      <div class="form-outline mb-4 row">
        <label class="form-label" for="email">Email address</label>
        <input
          type="email"
          id="email"
          class="form-control"
          placeholder="email@example.com"
          v-model="email"
        />
      </div>
      <!-- Password input -->
      <div class="form-outline mb-4 row">
        <label class="form-label" for="password">Password</label>
        <input
          type="password"
          id="password"
          class="form-control"
          v-model="password"
        />
      </div>
      <!-- 2 column grid layout for inline styling -->
      <div class="row mb-4">
        <div class="col d-flex justify-content-around">
          <!-- Submit button -->
          <button
            class="btn btn-primary btn-block col-sm-5"
            @click.prevent="login"
          >
            Sign in
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import Toastify from "toastify-js";

// axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.baseURL = "https://e-commerce-rendy.herokuapp.com";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios({
        method: "POST",
        url: "/users/login",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          email: this.email,
          password: this.password,
        },
      })
        .then(({ data }) => {
          const { success, access_token } = data;
          if (success) localStorage.setItem("access_token", access_token);
          Toastify({
            text: "Welcome back",
            duration: 1000,
            className: "info",
          }).showToast();
          if (this.$store.dispatch("isLoggedIn"))
            this.$router.push("/products");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
.header {
  text-transform: uppercase;
  text-align: center;
  margin: 3rem;
}
.container-form {
  border: black 1px solid;
  border-radius: 30px;
  padding: 2rem;
  margin-top: 10rem;
  width: 25vw;
}
</style>
