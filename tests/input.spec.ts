import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Input from "@/shared/ui/input/Input.vue";

describe("Input", () => {
  it("renders input element", () => {
    const wrapper = mount(Input);
    expect(wrapper.find("input").exists()).toBe(true);
  });

  it("binds v-model correctly", async () => {
    const wrapper = mount(Input, {
      props: { modelValue: "test value" },
    });

    expect(wrapper.find("input").element.value).toBe("test value");
  });

  it("updates model value on input", async () => {
    const wrapper = mount(Input);
    const input = wrapper.find("input");

    await input.setValue("new value");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["new value"]);
  });

  it("supports different input types", () => {
    const wrapper = mount(Input, {
      props: { type: "email" },
    });

    expect(wrapper.find("input").attributes("type")).toBe("email");
  });

  it("renders placeholder", () => {
    const wrapper = mount(Input, {
      props: { placeholder: "Enter text..." },
    });

    expect(wrapper.find("input").attributes("placeholder")).toBe("Enter text...");
  });

  it("disables input when disabled prop is true", () => {
    const wrapper = mount(Input, {
      props: { disabled: true },
    });

    expect(wrapper.find("input").attributes("disabled")).toBeDefined();
  });

  it("applies error styles when error prop is true", () => {
    const wrapper = mount(Input, {
      props: { error: true },
    });

    expect(wrapper.find("input").attributes("aria-invalid")).toBe("true");
  });

  it("emits focus event", async () => {
    const wrapper = mount(Input);

    await wrapper.find("input").trigger("focus");
    expect(wrapper.emitted("focus")).toBeTruthy();
  });

  it("emits blur event", async () => {
    const wrapper = mount(Input);

    await wrapper.find("input").trigger("blur");
    expect(wrapper.emitted("blur")).toBeTruthy();
  });

  it("supports different sizes", async () => {
    const sizes = ["sm", "md", "lg"] as const;

    for (const size of sizes) {
      const wrapper = mount(Input, {
        props: { size },
      });

      const classes = wrapper.find("input").classes();
      expect(classes.length).toBeGreaterThan(0);
    }
  });

  it("forwards form attributes only to the input element", () => {
    const wrapper = mount(Input, {
      attrs: {
        id: "email",
        name: "email",
        required: true,
      },
    });

    const input = wrapper.find("input");

    expect(wrapper.attributes("id")).toBeUndefined();
    expect(input.attributes("id")).toBe("email");
    expect(input.attributes("name")).toBe("email");
    expect(input.attributes("required")).toBeDefined();
  });
});
