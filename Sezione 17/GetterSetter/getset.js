// setters & getters
var User = /** @class */ (function () {
    function User() {
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name.toUpperCase();
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
var user = new User();
user.name = 'hidran';
console.log(user.name);
