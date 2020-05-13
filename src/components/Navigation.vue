<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item ">
          <router-link class="nav-link" to="/">Todo</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/done">DoneTodos</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {};
  }
};
</script>
