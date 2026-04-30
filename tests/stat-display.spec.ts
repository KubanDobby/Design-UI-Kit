import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { StatDisplay } from "@/patterns";

describe("StatDisplay", () => {
  it("renders label prop", () => {
    const wrapper = mount(StatDisplay, {
      props: { label: "Health" },
    });

    expect(wrapper.text()).toContain("Health");
  });

  it("displays value when provided", () => {
    const wrapper = mount(StatDisplay, {
      props: { label: "Health", value: "100" },
    });

    expect(wrapper.text()).toContain("100");
  });

  it("renders slot content", () => {
    const wrapper = mount(StatDisplay, {
      props: { label: "Mana" },
      slots: { default: "<span>Icon</span>" },
    });

    expect(wrapper.text()).toContain("Icon");
  });

  it("applies correct styling classes", () => {
    const wrapper = mount(StatDisplay, {
      props: { label: "Test" },
    });

    const div = wrapper.find("div");
    expect(div.classes()).toContain("rounded-game");
    expect(div.classes()).toContain("border-game-border-red");
    expect(div.classes()).toContain("bg-game-yellow");
  });

  it("supports numeric and string values", () => {
    const numWrapper = mount(StatDisplay, {
      props: { label: "Damage", value: 25 },
    });

    const strWrapper = mount(StatDisplay, {
      props: { label: "Duration", value: "5s" },
    });

    expect(numWrapper.text()).toContain("25");
    expect(strWrapper.text()).toContain("5s");
  });

  it("accepts custom class prop", () => {
    const wrapper = mount(StatDisplay, {
      props: { label: "Test", class: "custom-class" },
    });

    expect(wrapper.find("div").classes()).toContain("custom-class");
  });
});
