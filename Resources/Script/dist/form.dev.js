"use strict";

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var inputElements = _toConsumableArray(document.querySelectorAll("input.code_input"));

inputElements.forEach(function (ele, index) {
  ele.addEventListener("keydown", function (e) {
    if (e.keyCode === 8 && e.target.value === "") inputElements[Math.max(0, index - 1)].focus();
  });
  ele.addEventListener("input", function (e) {
    var _e$target$value = _toArray(e.target.value),
        first = _e$target$value[0],
        rest = _e$target$value.slice(1);

    e.target.value = first || "";

    if (index !== inputElements.length - 1 && first !== undefined) {
      inputElements[index + 1].focus();
      inputElements[index + 1].value = rest.join("");
      inputElements[index + 1].dispatchEvent(new Event("input"));
    }
  });
});

function onSubmit(e) {
  e.preventDefault();

  var code = _toConsumableArray(document.getElementsByTagName("input")).filter(function (_ref) {
    var name = _ref.name;
    return name;
  }).map(function (_ref2) {
    var value = _ref2.value;
    return value;
  }).join("");

  console.log(code);
}

console.log(inputElements);