import { shallowMount } from "@vue/test-utils";

import CreateTodo from "../../src/components/CreateTodo.vue";

describe("CreateTodo Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CreateTodo);
  });

  it("should exist", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should bind newTodo data with user input", () => {
    const inputData = "sample todo";
    let input = wrapper.find("input");
    input.setValue(inputData);

    expect(wrapper.vm.$data.newTodo).toBe(inputData);
  });

  it("should emit on-new-todo event on form submit", async () => {
    const inputData = "sample todo";
    let input = wrapper.find("input");
    let form = wrapper.find("form");

    input.setValue(inputData);
    form.trigger("submit.prevent");

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted("on-new-todo").length).toEqual(1);
    expect(wrapper.emitted("on-new-todo")[0]).toEqual([inputData]);
  });

  it("should not emit on-new-todo event if input is empty", async () => {
    let input = wrapper.find("input");
    let form = wrapper.find("form");

    input.setValue("");
    form.trigger("submit.prevent");

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted("on-new-todo")).toBeUndefined();
  });
});
