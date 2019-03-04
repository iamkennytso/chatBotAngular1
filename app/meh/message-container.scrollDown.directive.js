// function scrollDown() {
//   return {
//     restrict: 'A',
//     scope: false,
//     link: function($scope, $element) {
//       $scope.$watch('ctrl.validMessages', function() {
//         const messagesContainer = $element[0];
//         console.log(messagesContainer)
//         messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
//       })
//     }
//   }
// }

// angular
//   .module('pokeWeakApp')
//   .directive('scrollDown', scrollDown)