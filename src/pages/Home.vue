<template>
  <todo-list list-name="My todos" />
</template>

<script>
import TodoList from "../components/TodoList.vue";

export default {
  name: "Home",
  components: {
    TodoList
  }
};
</script>
