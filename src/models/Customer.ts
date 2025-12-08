import { CustomerPermission, userType } from "../types/user";
import { User } from "./User";

class Customer extends User {
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