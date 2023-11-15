import { AppError } from "../utils/error"

describe("APP ERROR TESTS", () => {
    it("should return error", () => {
        expect(new AppError({ message: "test error" })).toMatchObject(new Error("test error"))
    })
})