import { CustomerPermission, userType } from "../types/user";

/* abstract class User for all user types 
    can not be instantiated directly
*/
export abstract class User {
    protected readonly userId: number;
    protected _name: string;
    protected _email: string;


    private static nextUserId = 1;
    constructor(name: string, email: string) {
        this._name = name;
        this._email = email;
        this.userId = User.nextUserId++;
    }


    abstract getRole(): userType;
    abstract getPermissions(): CustomerPermission[];


    // concrete methods - shared by all subclasses
    public getInfo(): string {
        return `User ID: ${this.userId}, Name: ${this._name}, Email: ${this._email}, Role: ${this.getRole()}`;
    }

    set name(name: string) {
        if (!name || name.trim().length === 0) {
            throw new Error("User name cannot be empty");
        }
        if (name.trim().length < 3) {
            throw new Error("User name must be at least 3 characters long");
        }
        else {
            this._name = name.trim();
        }
    }
    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    set email(newEmail: string) {
        if (!newEmail || !this.isValidEmail(newEmail)) {
            throw new Error("Invalid email address");
        }
        else {
            this._email = newEmail.toLowerCase();
        }
    }

    get name(): string {
        return this._name;
    }
    get email(): string {
        return this._email;
    }


}