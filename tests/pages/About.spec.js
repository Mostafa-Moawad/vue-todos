import { shallowMount } from "@vue/test-utils";
import About from "../../src/pages/About.vue";

describe("testing About Page", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(About);
  });

  it("is about", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
