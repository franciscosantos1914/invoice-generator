import Helpers from "../utils/helpers";
import { AppError } from "../utils/error";
import { EntityInterface } from "../interfaces/entity";

type PropType = {
    qty: number
    tax: number
    name: string
    price: number
    unity: string
}

export class Product implements EntityInterface<PropType>{
    private _qty!: number
    private _tax!: number
    private _name!: string
    private _price!: number
    private _unity!: string

    constructor(private _props: PropType) {
        this._qty = this._props.qty
        this._tax = this._props.tax
        this._name = this._props.name
        this._price = this._props.price
        this._unity = this._props.unity

        this._validate()
    }

    value(): PropType {
        return {
            qty: this._qty,
            tax: this._tax,
            name: this._name,
            price: this._price,
            unity: this._unity,
        }
    }

    private _validate() {
        if (!Helpers.isNumber(Number(this._qty))) {
            return new AppError({
                message: "Product quantity is invalid!"
            })
        }
        if (!Helpers.isNumber(Number(this._tax))) {
            return new AppError({
                message: "Product tax is invalid!"
            })
        }
        if (!Helpers.isString(this._name)) {
            return new AppError({
                message: "Product name is invalid!"
            })
        }
        if (!Helpers.isNumber(Number(this._price))) {
            return new AppError({
                message: "Product price is invalid!"
            })
        }
    }
}