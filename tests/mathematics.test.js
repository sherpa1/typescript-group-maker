"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Math_1 = __importDefault(require("../src/classes/Math"));
const globals_1 = require("@jest/globals");
let m;
beforeEach(() => {
    m = new Math_1.default();
});
(0, globals_1.describe)("Mathematics", () => {
    (0, globals_1.test)("Math to be defined", () => {
        (0, globals_1.expect)(Math_1.default).toBeDefined();
    });
    (0, globals_1.test)("Test add(1,1) equal 2", () => {
        (0, globals_1.expect)(m.add(1, 1)).toEqual(2);
    });
    (0, globals_1.test)("Test sum(1,1,1) equal 3", () => {
        (0, globals_1.expect)(m.sum(1, 1, 1)).toEqual(3);
    });
});
