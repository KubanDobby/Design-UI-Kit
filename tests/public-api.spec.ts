import "@/styles.css";
import { describe, expect, it } from "vitest";
import { Button, Counter, Modal, Select } from "@/index";
import { gameColors } from "@/tokens";

describe("public api", () => {
  it("exports the package surface", () => {
    expect(Button).toBeTruthy();
    expect(Counter).toBeTruthy();
    expect(Modal).toBeTruthy();
    expect(Select).toBeTruthy();
    expect(gameColors.green.base).toBe("#71c638");
  });
});
