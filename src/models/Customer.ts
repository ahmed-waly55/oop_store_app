import { CustomerPermission, userType } from "../types/user";
import { Cart } from "./Cart";
import { Order } from "./Order";
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
}