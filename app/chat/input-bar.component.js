var inputBarCtrl = /** @class */ (function () {
    function inputBarCtrl() {
    }
    return inputBarCtrl;
}());
angular
    .module('pokeWeakApp')
    .component('inputBar', {
    templateUrl: '/chat/input-bar.tpl.html',
    controller: inputBarCtrl,
    controllerAs: "ctrl",
    bindings: {
        userInputMessage: '=',
        handleSubmit: '&'
    }
});
