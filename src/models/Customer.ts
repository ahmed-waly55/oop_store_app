import { CustomerPermission, userType } from "../types/user";
import { Cart } from "./Cart";
import { CartItem } from "./CartItem";
import { Order } from "./Order";
import { Product } from "./Product";
import { User } from "./User";

class Customer extends User {
    private readonly cart: Cart;
    private readonly orders: Order[] = [];

    constructor(name: string, email: string) {
        super(name, email);
        this.cart = new Cart();
    }

    getRole(): userType {
        return 'Customer';
    }
    getPermissions(): CustomerPermission[] {
        return [
            "browse_products",
            "place_orders",
            "view_own_orders",
            "manage_account",
            "add_to_wishlist"
        ];
    }
    get cartItemCount(): number {
        return this.cart.getItemCount();
    }
    get cartTotal(): number {
        return this.cart.getTotalPrice();
    }
    get orderCount(): number {
        return this.orders.length;
    }
    get hasItemsInCart(): boolean {
        return !this.cart.isEmpty()
    }
    addTiCart(product: Product, quantity: number): boolean {
        return this.cart.addItem(product, quantity);
    }

    viewCart(): CartItem[] {
        return this.cart.getItems()
    }
    checkout() {

    }
    getOrderHistory(): Order[] {
        return []
    }


    getRecentOrder(count: number = 5): Order[] {
        return []
    }
    removeFromCart(productId: number): boolean {
        return this.cart.removeItem(productId)
    }
    clearCart(): void {
        this.cart.clear()
    }
}