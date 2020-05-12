<template>
  <todo-list done-only list-name="Done todos" />
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
