import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { afterEach, describe, expect, it } from "vitest";
import { Modal } from "@/patterns";

describe("Modal", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  function mountModal(
    props: {
      modelValue: boolean;
      title?: string;
      closeable?: boolean;
    },
    slots: Record<string, string>
  ) {
    return mount(Modal, {
      attachTo: document.body,
      props,
      slots,
    });
  }

  it("does not render when modelValue is false", () => {
    const wrapper = mountModal({ modelValue: false }, { default: "Modal content" });

    expect(document.body.querySelector("[role='dialog']")).toBeNull();
    wrapper.unmount();
  });

  it("renders when modelValue is true", () => {
    const wrapper = mountModal({ modelValue: true }, { default: "Modal content" });

    expect(document.body.querySelector("[role='dialog']")).not.toBeNull();
    wrapper.unmount();
  });

  it("displays title when provided", () => {
    const wrapper = mountModal({ modelValue: true, title: "Modal Title" }, { default: "Content" });

    expect(document.body.textContent).toContain("Modal Title");
    wrapper.unmount();
  });

  it("displays modal content", () => {
    const wrapper = mountModal({ modelValue: true }, { default: "Test content" });

    expect(document.body.textContent).toContain("Test content");
    wrapper.unmount();
  });

  it("shows close button when closeable is true", () => {
    const wrapper = mountModal({ modelValue: true, closeable: true }, { default: "Content" });

    expect(document.body.querySelector("[aria-label='Close modal']")).not.toBeNull();
    wrapper.unmount();
  });

  it("hides close button when closeable is false", () => {
    const wrapper = mountModal({ modelValue: true, closeable: false }, { default: "Content" });

    expect(document.body.querySelector("[aria-label='Close modal']")).toBeNull();
    wrapper.unmount();
  });

  it("emits update:modelValue when close button clicked", async () => {
    const wrapper = mountModal({ modelValue: true }, { default: "Content" });

    const closeBtn = document.body.querySelector(
      "[aria-label='Close modal']"
    ) as HTMLButtonElement | null;

    expect(closeBtn).not.toBeNull();
    closeBtn?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await nextTick();

    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([false]);
    wrapper.unmount();
  });

  it("renders footer slot when provided", () => {
    const wrapper = mountModal(
      { modelValue: true },
      {
        default: "Modal content",
        footer: "<button>Action</button>",
      }
    );

    expect(document.body.textContent).toContain("Action");
    wrapper.unmount();
  });

  it("uses Teleport to render in body", () => {
    const wrapper = mountModal({ modelValue: true }, { default: "Content" });

    const dialog = document.body.querySelector("[role='dialog']");
    expect(dialog).not.toBeNull();
    expect(document.body.contains(dialog)).toBe(true);
    wrapper.unmount();
  });
});
