var userCtrl = /** @class */ (function () {
    function userCtrl($mdPanel) {
        this.$mdPanel = $mdPanel;
        this.user = {
            email: '',
            password: '',
            favorite: ''
        };
        this.loading = false;
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
    userCtrl.prototype.openDialog = function () {
        var position = this.$mdPanel.newPanelPosition()
            .absolute()
            .center();
        var config = {
            attachTo: angular.element(document.body),
            controller: dialogCtrl,
            controllerAs: 'dialogCtrl',
            disableParentScroll: false,
            templateUrl: '/user/dialog.tpl.html',
            hasBackdrop: true,
            panelClass: 'userDialog',
            position: position,
            trapFocus: true,
            zIndex: 150,
            clickOutsideToClose: true,
            escapeToClose: true,
            focusOnOpen: true,
            locals: {
                'email': this.user.email,
                'favorite': this.user.favorite,
                'favoriteUrl': "https://img.pokemondb.net/artwork/large/" + this.user.favorite.toLowerCase() + ".jpg"
            }
        };
        this.$mdPanel.open(config);
    };
    return userCtrl;
}());
var dialogCtrl = /** @class */ (function () {
    function dialogCtrl(mdPanelRef) {
        this.mdPanelRef = mdPanelRef;
    }
    dialogCtrl.prototype.closeDialog = function () {
        this.mdPanelRef && this.mdPanelRef.close()
            .then(function () {
            angular.element(document.querySelector('.openUserDialogButton')).focus();
            console.log(this.mdPanelRef);
            this.mdPanelRef.destroy();
        });
    };
    return dialogCtrl;
}());
;
angular
    .module('pokeWeakApp')
    .component('user', {
    templateUrl: '/user/user.tpl.html',
    controller: userCtrl,
    controllerAs: "ctrl"
});
