var userCtrl = /** @class */ (function () {
    function userCtrl() {
        this.user = {
            email: '',
            password: '',
            favorite: ''
        };
    }
    userCtrl.prototype.generatePasswordError = function (passwordField) {
        var password = passwordField.$viewValue;
        if (password.search(/.*[a-z]/) === -1)
            return 'Your password needs a lowercase letter';
        if (password.search(/.*[A-Z]/) === -1)
            return 'Your password needs an uppercase letter';
        if (password.search(/.*[0-9]/) === -1)
            return 'Your password needs a number';
    };
    return userCtrl;
}());
angular
    .module('pokeWeakApp')
    .component('user', {
    templateUrl: '/user/user.tpl.html',
    controller: userCtrl,
    controllerAs: "ctrl"
});
