import { CartItem } from "./CartItem";

export class Cart {
    private items: CartItem[] = [];
    addItem() { }
    removeItem() { }
    getItems(): CartItem[] {
        return this.items;
    }
    getTotalPrice(): number {
        return 0;
    }
    isEmpty(): boolean {
        return this.items.length === 0;
    }
    clear(): void {
        this.items = [];
    }
    getItemCount(): number {
        return 1; // Placeholder implementation
    }
    reduceStockOnCheckout(): boolean {
        return false; // Placeholder implementation
    }


}