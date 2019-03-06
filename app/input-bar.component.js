var inputBarCtrl = /** @class */ (function () {
    function inputBarCtrl() {
    }
    return inputBarCtrl;
}());
angular
    .module('pokeWeakApp')
    .component('inputBar', {
    templateUrl: './input-bar.component.html',
    controller: inputBarCtrl,
    controllerAs: "ctrl",
    bindings: {
        userInputMessage: '=',
        handleSubmit: '&'
    }
});
