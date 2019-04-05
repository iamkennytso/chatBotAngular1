import { User } from './user'

class userCtrl implements ng.IComponentController {
  constructor(private $mdPanel){}

  user: User = {
    email: '',
    password: '',
    favorite: '',
  }
  loading:boolean = false;

  generatePasswordError (passwordField: ng.INgModelController): string {
    const password: string = passwordField.$viewValue;
    if (password.search(/.*[a-z]/) === -1) return 'Your password needs a lowercase letter';
    if (password.search(/.*[A-Z]/) === -1) return 'Your password needs an uppercase letter';
    if (password.search(/.*[0-9]/) === -1) return 'Your password needs a number';
  }

  openDialog() {
    const position = this.$mdPanel.newPanelPosition()
      .absolute()
      .center();

    const config = {
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
        'favoriteUrl': `https://img.pokemondb.net/artwork/large/${this.user.favorite.toLowerCase()}.jpg`
      }
    };

    this.$mdPanel.open(config);
  }
}
class dialogCtrl implements ng.IComponentController{
  constructor(private mdPanelRef){}
  closeDialog () {
    this.mdPanelRef && this.mdPanelRef.close()
      .then(function() {
        angular.element(document.querySelector('.openUserDialogButton')).focus();
        console.log(this.mdPanelRef)
        this.mdPanelRef.destroy();
      })
  }
};

angular
  .module('pokeWeakApp')
  .component('user', {
    templateUrl: '/user/user.tpl.html',
    controller: userCtrl, 
    controllerAs: "ctrl",
  })