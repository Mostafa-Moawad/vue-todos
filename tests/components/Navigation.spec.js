import { shallowMount } from "@vue/test-utils";
import Navigation from "../../src/components/Navigation.vue";

describe("Navigation Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Navigation, {
      stubs: ["router-link", "router-view"]
    });
  });

  it("is Navigation exact", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("has 3 navigation links", () => {
    let navigationLinks = wrapper.findAll(".nav-item");
    expect(navigationLinks.length).toEqual(3);
  });
});
