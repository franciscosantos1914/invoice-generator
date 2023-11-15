import Helpers from "../utils/helpers"

describe("HELPERS TESTS", () => {

    it("hasValue function should return false", () => {
        expect(Helpers.hasValue(null)).toBeFalsy()
    })
    it("hasValue function should return true", () => {
        expect(Helpers.hasValue("38378")).toBeTruthy()
    })
    it("hasValue function should return true when parameter is {}", () => {
        expect(Helpers.hasValue({})).toBeTruthy()
    })
    it("hasValue function should return false when parameter is []", () => {
        expect(Helpers.hasValue([])).toBeFalsy()
    })
    it("isString function should return false", () => {
        expect(Helpers.isString(625)).toBeFalsy()
    })
    it("isString function should return false", () => {
        expect(Helpers.isString({})).toBeFalsy()
    })
    it("isString function should return false", () => {
        expect(Helpers.isString([])).toBeFalsy()
    })
    it("isString function should return true", () => {
        expect(Helpers.isString("38378")).toBeTruthy()
    })
    it("isNumber function should return false", () => {
        expect(Helpers.isNumber("625")).toBeFalsy()
    })
    it("isNumber function should return false", () => {
        expect(Helpers.isNumber({})).toBeFalsy()
    })
    it("isNumber function should return false", () => {
        expect(Helpers.isNumber([])).toBeFalsy()
    })
    it("isNumber function should return true", () => {
        expect(Helpers.isNumber(38378)).toBeTruthy()
    })
})