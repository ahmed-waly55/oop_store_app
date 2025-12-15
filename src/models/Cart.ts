import { CartItem } from "./CartItem";
import { Product } from "./Product";

export class Cart {
    private items: CartItem[] = [];
    addItem(product: Product, quantity: number): boolean {
        const existingItems = this.items.find(item => item.product.id === product.id)
        if (existingItems) {
            const totalQuantity = existingItems.quantity + quantity;
            // return true;
            if (totalQuantity <= product.stock) {
                existingItems.quantity += quantity;
                return true;
            }
        } else {
            if (quantity <= product.stock) {
                this.items.push(new CartItem(product, quantity));
                return true;
            }

        }

        return false;

    }
    removeItem(productId: number): boolean {
        const index = this.items.findIndex(item => item.product.id === productId);
        if (index > -1) {
            this.items.splice(index, 1);
            return true
        }
        return false;
    }
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