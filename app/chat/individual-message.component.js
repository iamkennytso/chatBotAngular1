var indMesCtrl = /** @class */ (function () {
    function indMesCtrl() {
    }
    indMesCtrl.prototype.$onInit = function () {
        typeof this.message.messageContent === 'string'
            ? this.isCard = false
            : this.isCard = true;
    };
    return indMesCtrl;
}());
angular
    .module('pokeWeakApp')
    .component('individualMessage', {
    templateUrl: '/chat/individual-message.tpl.html',
    controller: indMesCtrl,
    controllerAs: 'ctrl',
    bindings: {
        message: '<'
    }
});
