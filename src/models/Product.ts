import { Category } from "../types/category";

export class Product {
    public readonly id: number;
    private _name: string;
    private _price: number;
    private _stock: number;
    private _category: Category;
    private static nextId = 1;

    constructor(name: string, price: number, stock: number, category: Category) {
        this._name = name;
        this._price = price;
        this._stock = stock;
        this.id = Product.nextId++;
        this._category = category;
    }


    // getters

    get name(): string {
        return this._name;
    }
    get price(): number {
        return this._price;
    }
    get stock(): number {
        return this._stock;
    }

    get Category(): string {
        return this._category;
    }

    // setters

    set name(name: string) {
        if (name.length === 0) {
            throw new Error("Product name cannot be empty");
        }
        else {
            this._name = name;
        }


    }
    set price(newPrice: number) {
        if (newPrice < 0) {
            throw new Error("Price cannot be negative");
        }
        else {
            this._price = newPrice;
        }
    }
    set stock(newStock: number) {
        if (newStock < 0) {
            throw new Error("Stock cannot be negative");
        }
        else {
            this._stock = newStock;
        }
    }




}   