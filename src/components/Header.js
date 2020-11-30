"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
function Header() {
    return (react_1["default"].createElement("div", { className: "h1" },
        react_1["default"].createElement("h1", null, "React Quiz")));
}
exports["default"] = Header;
