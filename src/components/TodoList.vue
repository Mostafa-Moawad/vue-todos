<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 py-5">
          <h1>{{ listName }}</h1>
        </div>
      </div>
      <div class="row mb-3">
        <create-todo @on-new-todo="addTodo($event)" />
      </div>
      <div class="row">
        <div class="col-12 col-sm-10 col-lg-6">
          <ul class="list-group">
            <todo
              v-for="(todo, index) in listableTodos"
              :key="index"
              :description="todo.description"
              :completed="todo.completed"
              @on-toggle="toggleTodo(todo)"
              @on-delete="deleteTodo(todo)"
              @on-edit="editTodo(todo, $event)"
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const STORAGE_KEY = "todo-storage";

import Todo from "./Todo.vue";
import CreateTodo from "./CreateTodo.vue";

const localStorageService = {
 
  save(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }
};

export default {
  props: {
    listName: String,
    doneOnly: Boolean
  },

  data() {
    return {
      todos: JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
    };
  },

  computed: {
    listableTodos() {
      const filterFunction = this.doneOnly
        ? item => item.completed
        : item => !item.completed;

      return this.todos.filter(filterFunction);
    }
  },

  watch: {
    todos: {
      handler(todos) {
        localStorageService.save(todos);
      },
      deep: true
    }
  },

  methods: {
    addTodo(newTodo) {
      this.todos.push({
        description: newTodo,
        completed: false
        
      });
    },
    toggleTodo(todo) {
      todo.completed = !todo.completed;
    },
    deleteTodo(deletedTodo) {
      this.todos = this.todos.filter(todo => todo !== deletedTodo);
    },
    editTodo(todo, newTodoDescription) {
      todo.description = newTodoDescription;
    }
  },
  components: { Todo, CreateTodo }
};
</script>

<style scoped lang="scss"></style>
