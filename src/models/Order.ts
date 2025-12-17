import { OrderStatus } from "../types/order";
import { CartItem } from "./CartItem";
import { Customer } from "./Customer";

export class Order {
    private readonly _orderId: number;
    private readonly customer: Customer;
    private readonly _items: CartItem[];
    private readonly total: number;
    private readonly status: OrderStatus;
    private readonly createdAt: Date;
    private readonly updatedAt: Date;

    private static nextOrderId: number = 1;

    constructor(private readonly orderId: number, customer: Customer, private readonly items: CartItem[]) {
        if (!customer) {
            throw new Error("Customer is required to create an order.");
        }
        if (!items || items.length === 0) {
            throw new Error("At least one item is required to create an order.");
        }
        this._orderId = Order.nextOrderId++;
        this.customer = customer;
        this.total = this.calaculateTotal();
        this._items = items;
        this.status = "Pending";
        this.createdAt = new Date();
        this.updatedAt = new Date();

    }
    calaculateTotal(): number {
        return this._items.reduce((sum, item) => sum + item.getTotalPrice(), 0);
    }
}