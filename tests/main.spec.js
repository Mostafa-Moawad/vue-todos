import { shallowMount } from "@vue/test-utils";

import { routes, router, app } from "../src/main";

import Todo from "../src/pages/TodoPage.vue";
import DoneTodos from "../src/pages/DoneTodosPage.vue";
import About from "../src/pages/About.vue";

describe("main.js", () => {
  describe("routes definitions", () => {
    it("route paths", () => {
      expect(routes).toBeInstanceOf(Array);

      expect(routes).toEqual([
        {
          path: "/",
          component: Todo
        },
        {
          path: "/done",
          component: DoneTodos
        },
        {
          path: "/about",
          component: About
        }
      ]);
    });
  });

//   describe("addTodo", () => {
//     test("creates a new todo");
//     test("creates a new todo without description");
//     test("fails to create a todo on undefined input");
//   });
});
