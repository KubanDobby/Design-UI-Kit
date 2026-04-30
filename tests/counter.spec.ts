import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { Counter } from "@/patterns";

describe("Counter", () => {
  it("updates internal state when uncontrolled", async () => {
    const wrapper = mount(Counter, {
      props: {
        defaultValue: 1,
        min: 0,
        max: 3,
      },
    });

    const buttons = wrapper.findAll("button");
    await buttons[1].trigger("click");
    expect(wrapper.text()).toContain("2");

    await buttons[0].trigger("click");
    expect(wrapper.text()).toContain("1");
  });

  it("emits model updates when controlled", async () => {
    const wrapper = mount(Counter, {
      props: {
        modelValue: 2,
        min: 0,
        max: 4,
      },
    });

    await wrapper.findAll("button")[1].trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([3]);
    expect(wrapper.emitted("change")?.[0]).toEqual([3]);
  });

  it("disables controls at bounds", () => {
    const minWrapper = mount(Counter, {
      props: {
        modelValue: 0,
        min: 0,
        max: 4,
      },
    });

    const maxWrapper = mount(Counter, {
      props: {
        modelValue: 4,
        min: 0,
        max: 4,
      },
    });

    expect(minWrapper.findAll("button")[0].attributes("disabled")).toBeDefined();
    expect(maxWrapper.findAll("button")[1].attributes("disabled")).toBeDefined();
  });
});
