var inputBarCtrl = /** @class */ (function () {
    function inputBarCtrl() {
    }
    return inputBarCtrl;
}());
angular
    .module('pokeWeakApp')
    .component('inputBar', {
    template: "<form class='App-Paper-InputBarContainer' ng-submit='ctrl.handleSubmit()'>\n        <input\n          type='text'\n          ng-model=\"ctrl.userInputMessage\" \n          class='App-Paper-InputBarContainer'\n        />\n      </form>",
    controller: inputBarCtrl,
    controllerAs: "ctrl",
    bindings: {
        userInputMessage: '=',
        handleSubmit: '&'
    }
});
