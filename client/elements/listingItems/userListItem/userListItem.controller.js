/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


class UserListItemController {
  constructor($element, $interval, $timeout, $injector, $scope) {
    'ngInject';

    this.$interval = $interval;
    this.$timeout = $timeout;

    // $mdMedia not available for ionic
    if (window.ionic) {
      this.$mdMedia = () => false;
    } else {
      this.$mdMedia = $injector.get('$mdMedia');
    }

    this.size = 'lg';
    this.validWidths = ['sm', 'md', 'lg'];

    this.checkInterval = 16;

    this.user = this.user || {};

    this.item = {
      title: this.user.name,
      description: this.user.email,
      textIcon: this.getTextIconFromName(),
      status: this.user.role,
    };

    $scope.$watch('vm.user.name', (newUser) => { // eslint-disable-line no-unused-vars
      this.item.textIcon = this.getTextIconFromName();
    });
  }

  checkForMediaUpdate() {
    if (this.stopInterval) {
      this.$interval.cancel(this.stopInterval);
    }
    this.stopInterval = this.$interval(() => {
      const newSize = this.$mdMedia('min-width: 870px') ? 'lg' : 'md';
      if (this.size !== newSize) {
        this.$timeout(() => {
          this.size = newSize;
        });
      } // (fn, interval, repetitions, boolean for triggering .apply())
    }, this.checkInterval, 0, false);
  }

  $onChanges(changes) {
    if (changes.width) {
      const current = changes.width.currentValue;
      if (this.validWidths.indexOf(current) > -1) {
        // valid current size - set the width value manually and stop tracking changes
        this.$interval.cancel(this.stopInterval);
        this.size = changes.width.currentValue;
      }
    }
    if (changes.user && changes.user.currentValue) {
      this.$timeout(() => {
        this.item = {
          title: this.user.name,
          description: this.user.email,
          textIcon: this.getTextIconFromName(),
          status: this.user.role,
        };
      });
    }
  }

  getTextIconFromName() {
    if (this.user.name) {
      let iconChars = _.map(this.user.name.split(' '), a => a[0]).join('').toUpperCase();
      if (iconChars.length > 2) {
        // trim to 2 letters
        iconChars = iconChars[0] + _.last(iconChars);
      }
      return iconChars;
    }
    // no name, return empty string for letters
    return '';
  }

  $postLink() {
    // $postLink gets called after $onChanges, so we need to check
    // if a valid width was given when the list was initialized
    // this has the drawback of not being callable after initial rendering, so if
    // we start with a valid width and it goes undefined, we will not be responsive to
    // media query changes
    if (this.validWidths.indexOf(this.width) === -1) {
      this.checkForMediaUpdate();
    }
  }
}

export default UserListItemController;
