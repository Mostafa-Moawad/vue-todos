import { shallowMount } from "@vue/test-utils";

import TodoList from "../../src/components/TodoList.vue";

describe("TodoList Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TodoList, {
      propsData: {
        listName: "Todos Application"
      }
    });
  });

  it("should exist", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("passes listName as a prop to TodoList", () => {
    expect(wrapper.props().listName).toBe("Todos Application");
  });

  it("passes Todos as an array", () => {
    expect(wrapper.vm.todos).toBeInstanceOf(Array);
  });

  it("adds todo", () => {
    wrapper.setData({
        todos: []
      });
    wrapper.vm.addTodo("test");
    expect(wrapper.vm.todos[0].description).toBe("test");
  });
});
