import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Tooltip } from "@/patterns";

describe("Tooltip", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("shows tooltip when focus moves into the trigger", async () => {
    vi.useFakeTimers();

    const wrapper = mount(Tooltip, {
      props: {
        text: "Helpful text",
        delay: 100,
      },
      slots: {
        default: '<button type="button">Trigger</button>',
      },
    });

    await wrapper.find("button").trigger("focusin");
    vi.advanceTimersByTime(100);
    await nextTick();

    expect(wrapper.text()).toContain("Helpful text");
  });
});
