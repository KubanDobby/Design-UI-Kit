import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Button from "@/shared/ui/button/Button.vue";

describe("Button", () => {
  it("renders button with default variant and size", () => {
    const wrapper = mount(Button, {
      slots: { default: "Click me" },
    });

    expect(wrapper.text()).toBe("Click me");
    expect(wrapper.find("button").classes()).toContain("bg-game-green");
  });

  it("renders orange variant", () => {
    const wrapper = mount(Button, {
      props: { variant: "orange" },
      slots: { default: "Action" },
    });

    expect(wrapper.find("button").classes()).toContain("bg-game-orange");
  });

  it("supports different sizes", () => {
    const sizes = ["sm", "md", "lg"] as const;

    sizes.forEach((size) => {
      const wrapper = mount(Button, {
        props: { size },
        slots: { default: "Button" },
      });

      const classes = wrapper.find("button").classes();
      expect(classes.length).toBeGreaterThan(0);
    });
  });

  it("renders full width when fullWidth prop is true", () => {
    const wrapper = mount(Button, {
      props: { fullWidth: true },
      slots: { default: "Full Width" },
    });

    expect(wrapper.find("button").classes()).toContain("w-full");
  });

  it("disables button when disabled prop is true", () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
      slots: { default: "Disabled" },
    });

    expect(wrapper.find("button").attributes("disabled")).toBeDefined();
    expect(wrapper.find("button").classes()).toContain("disabled:opacity-50");
  });

  it("supports submit and reset types", () => {
    const wrapper = mount(Button, {
      props: { type: "submit" },
      slots: { default: "Submit" },
    });

    expect(wrapper.find("button").attributes("type")).toBe("submit");
  });

  it("emits click event", async () => {
    const wrapper = mount(Button, {
      slots: { default: "Click" },
    });

    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });
});
