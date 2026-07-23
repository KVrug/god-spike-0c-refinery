import { test } from "node:test";
import assert from "node:assert/strict";
import { add } from "../src/add.mjs";

test("adds", () => assert.equal(add(2, 3), 5));
test("identity", () => assert.equal(add(7, 0), 7));
