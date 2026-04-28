import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import ItemCard from "@/app/components/ItemCard.vue";

describe("ItemCard", () => {
  it("emits apply with the current count", async () => {
    const wrapper = mount(ItemCard, {
      props: {
        title: "Scarecrow",
        duration: "10 days",
        description: "Crows are unpredictable",
      },
    });

    await wrapper.findAll("button")[1].trigger("click");
    await wrapper.findAll("button")[2].trigger("click");

    expect(wrapper.emitted("apply")?.[0]).toEqual([2]);
  });
});
