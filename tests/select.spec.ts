import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { Select } from "@/patterns";

describe("Select", () => {
  const options = [
    { label: "Option 1", value: "opt1" },
    { label: "Option 2", value: "opt2" },
    { label: "Option 3", value: "opt3" },
  ];

  it("renders select button", () => {
    const wrapper = mount(Select, {
      props: { options },
    });

    expect(wrapper.find("button").exists()).toBe(true);
  });

  it("shows placeholder when no value selected", () => {
    const wrapper = mount(Select, {
      props: { options, placeholder: "Choose..." },
    });

    expect(wrapper.find("button").text()).toContain("Choose...");
  });

  it("displays selected label", () => {
    const wrapper = mount(Select, {
      props: { options, modelValue: "opt2" },
    });

    expect(wrapper.find("button").text()).toContain("Option 2");
  });

  it("opens dropdown on button click", async () => {
    const wrapper = mount(Select, {
      props: { options },
    });

    await wrapper.find("button").trigger("click");
    expect(wrapper.findAll("button").length).toBeGreaterThan(1);
  });

  it("emits update:modelValue on option select", async () => {
    const wrapper = mount(Select, {
      props: { options },
    });

    await wrapper.find("button").trigger("click");
    const optionButtons = wrapper.findAll("button");
    await optionButtons[optionButtons.length - 1].trigger("click");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
  });

  it("emits change event on selection", async () => {
    const wrapper = mount(Select, {
      props: { options },
    });

    await wrapper.find("button").trigger("click");
    const optionButtons = wrapper.findAll("button");
    await optionButtons[1].trigger("click");

    expect(wrapper.emitted("change")).toBeTruthy();
  });

  it("disables when disabled prop is true", () => {
    const wrapper = mount(Select, {
      props: { options, disabled: true },
    });

    expect(wrapper.find("button").attributes("disabled")).toBeDefined();
  });

  it("closes dropdown after selection", async () => {
    const wrapper = mount(Select, {
      props: { options },
    });

    await wrapper.find("button").trigger("click");
    const optionButtons = wrapper.findAll("button");
    await optionButtons[1].trigger("click");

    // After click, only the main button should remain
    expect(wrapper.findAll("button").length).toBe(1);
  });

  it("uses non-submit buttons for trigger and options", async () => {
    const wrapper = mount(Select, {
      props: { options },
    });

    expect(wrapper.find("button").attributes("type")).toBe("button");

    await wrapper.find("button").trigger("click");

    for (const button of wrapper.findAll("button")) {
      expect(button.attributes("type")).toBe("button");
    }
  });
});
