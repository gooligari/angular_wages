/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


class ListItemController {
  constructor($interval, $timeout, $injector) {
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

    // TODO: don't hardcode this - not sure how to better handle it.
    // @media breakpoints don't work on element level, only window level
    // prefer not to use $rootScope in components (using rootScope messages to trigger checks)
    // need some way of hooking into width / height changes in an event driven way
    this.checkInterval = 16;
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
      if (this.validWidths.indexOf(changes.width.currentValue) > -1) {
        // valid current size - set the width value manually and stop tracking changes
        this.$interval.cancel(this.stopInterval);
        this.size = changes.width.currentValue;
      }
    }
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

export default ListItemController;
