export type userType = 'Admin' | 'Customer';

export type CustomerPermission =
    | "browse_products"
    | "place_orders"
    | "view_own_orders"
    | "manage_account"
    | "add_to_wishlist";