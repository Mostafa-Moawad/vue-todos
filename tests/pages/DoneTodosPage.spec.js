import {
    shallowMount
} from "@vue/test-utils";

import DoneTodosPage from "../../src/pages/DoneTodosPage.vue";
import TodoList from "../../src/components/TodoList.vue";

describe("Done Todos Page", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(DoneTodosPage, {});
    });

    it("should exist", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("has TodoList", () => {
        let todolist = wrapper.findComponent(TodoList);
        expect(todolist.exists()).toBe(true);
    });

    it("passes correct listName as a prop to TodoList", () => {
        let todolist = wrapper.findComponent(TodoList);
        expect(todolist.props().listName).toBe('Done todos');
    });

    it("passes doneOnly as a prop to TodoList", () => {
        let todolist = wrapper.findComponent(TodoList);
        expect(todolist.props().doneOnly).toBe(true);
    });
});