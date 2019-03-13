import { User } from './user'

class userCtrl implements ng.IComponentController {
  constructor(){}
  user: User = {
    email: '',
    password: '',
    favorite: '',
  }

  generatePasswordError (passwordField: ng.INgModelController): string {
    const password: string = passwordField.$viewValue;
    if (password.search(/.*[a-z]/) === -1) return 'Your password needs a lowercase letter';
    if (password.search(/.*[A-Z]/) === -1) return 'Your password needs an uppercase letter';
    if (password.search(/.*[0-9]/) === -1) return 'Your password needs a number';
  }
}

angular
  .module('pokeWeakApp')
  .component('user', {
    templateUrl: '/user/user.tpl.html',
    controller: userCtrl, 
    controllerAs: "ctrl",
  })