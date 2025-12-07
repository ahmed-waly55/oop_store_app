/* abstract class User for all user types 
    can not be instantiated directly
*/
abstract class User {
    protected readonly userId: number;
    protected _name: string;
    protected _email: string;


    private static nextUserId = 1;
    constructor(name: string, email: string) {
        this._name = name;
        this._email = email;
        this.userId = User.nextUserId++;
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
    set email(email: string) {
        if (!email.includes("@")) {
            throw new Error("Invalid email address");
        }
        else {
            this._email = email;
        }
    }

    get name(): string {
        return this._name;
    }
    get email(): string {
        return this._email;
    }


}