"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
require("../App.css");
var QuestionCard = function (_a) {
    var question = _a.question, option = _a.option, callback = _a.callback;
    var _b = react_1.useState(""), selectedAns = _b[0], setSelectedAns = _b[1];
    var _c = react_1.useState(false), color = _c[0], setColor = _c[1];
    var handleSelect = function (ev) {
        var value = (ev.currentTarget).value;
        console.log(value);
        setSelectedAns(value);
        setColor(true);
    };
    return (react_1["default"].createElement("div", { className: "container" },
        react_1["default"].createElement("div", { className: "qst" }, question),
        react_1["default"].createElement("form", { className: "question-form", onSubmit: function (e) { return callback(e, selectedAns); } },
            option.map(function (opt, ind) {
                return (react_1["default"].createElement("div", { key: ind },
                    react_1["default"].createElement("label", { className: "radio" },
                        react_1["default"].createElement("input", { type: "radio", name: "opt", required: true, value: opt, checked: selectedAns === opt, onChange: function (ev) { return handleSelect(ev); } }),
                        opt)));
            }),
            react_1["default"].createElement("input", { type: "submit", className: "submit" }))));
};
exports["default"] = QuestionCard;
