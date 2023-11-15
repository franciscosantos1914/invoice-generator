// eslint-disable-next-line import/no-anonymous-default-export
export default (new class {
    hasValue<T extends any>(value: T) {
        return value !== undefined && value !== null && String(value).trim() !== ""
    }
    isString(value: any): value is string {
        return this.hasValue(value) && typeof value === "string"
    }
    isNumber(value: any): value is number {
        return this.hasValue(value) && typeof value === "number" && !isNaN(value)
    }
})