import { shallowMount } from "@vue/test-utils";
import TodoPage from "../../src/pages/TodoPage.vue";
import TodoList from "../../src/components/TodoList.vue";

describe("testing Todo Page", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TodoPage);
  });

  it("should exist", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders a TodoList component", () => {
    let todolist = wrapper.findComponent(TodoList);
    expect(todolist.exists()).toBe(true);
  });

  it("passes correct listName as a prop to TodoList", () => {
    let todolist = wrapper.findComponent(TodoList);
    expect(todolist.props().listName).toBe("My todos");
  });
});
