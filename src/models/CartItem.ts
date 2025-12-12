import { Product } from "./Product";

export class CartItem {


    constructor(public readonly product: Product, private _quantity: number) {


    }
    get quantity(): number {
        return this._quantity;
    }
    set quantity(newQuantity: number) {
        if (newQuantity < 0) {
            throw new Error("Quantity cannot be negative");
        } else {
            this._quantity = newQuantity;
        }

    }
    getTotalPrice(): number {
        return this.product.price * this._quantity;
    }

}