import {
  shallowMount
} from "@vue/test-utils";

import Todo from "../../src/components/Todo.vue";

describe("Todo Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Todo, {
      propsData: {
        description: "test",
        completed: false
      }
    });
  });

  it("should exist", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should emit on-togole event on click", async () => {
    const btn = wrapper.find("#toggle_button");
    btn.trigger("click");

    await wrapper.vm.$nextTick();
    expect(wrapper.vm.isEditing).toBe(false);
    expect(wrapper.emitted("on-toggle")).toBeTruthy();
  });

  it("passes description as a prop to Todo", () => {
    const btn = wrapper.find("#toggle_button");
    const descriptionInput = btn.find("span").text();
    expect(descriptionInput).toEqual("test");
  });

  it("should emit on-delete event on click", async () => {
    const btn = wrapper.find("#delete_button");
    btn.trigger("click");

    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("on-delete")).toBeTruthy();
  });

  it("emit on-edit event when finishEditing", () => {
    wrapper.setData({
      isEditing: true
    });
    wrapper.vm.finishEditing();

    expect(wrapper.vm.isEditing).toBe(false);
    expect(wrapper.emitted("on-edit")).toBeTruthy();
  });

  describe('methods/startEditing', () => {
    it("should start the editing mode", () => {
      const sampleInput = 'editing a description';
      wrapper.setProps({
        description: sampleInput
      });

      expect(wrapper.vm.isEditing).toBe(false);

      wrapper.vm.startEditing();

      expect(wrapper.vm.isEditing).toBe(true);
      expect(wrapper.vm.newTodoDescription).toEqual(sampleInput);
    });

    it("should finalize the editing mode", () => {
      const sampleInput = 'editing a description';
      wrapper.setProps({
        description: sampleInput
      });

      wrapper.setData({
        isEditing: true
      });

      const finishEditingSpy = jest.spyOn(wrapper.vm, 'finishEditing');

      wrapper.vm.startEditing();

      expect(finishEditingSpy.mock.calls.length).toBe(1);
    });
  });


  // startEditing() {
  //   if (this.isEditing) {
  //     this.finishEditing();
  //   } else {
  //     this.newTodoDescription = this.description;
  //     this.isEditing = true;
  //     this.$nextTick(() => this.$refs.newTodo.focus());
  //   }
  // },
});