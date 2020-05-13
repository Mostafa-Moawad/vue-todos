import { shallowMount } from "@vue/test-utils";
import App from "../src/App.vue";

describe("App Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(App, {
      stubs: ["router-link", "router-view"]
    });
  });

  it("is a Vue instance", () => {
    expect(wrapper).toBeTruthy();
  });
});
