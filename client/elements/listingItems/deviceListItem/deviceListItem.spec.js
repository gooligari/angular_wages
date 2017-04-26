/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import deviceListItemModule from './';
import DeviceListItemController from './deviceListItem.controller';
import deviceListItemComponent from './deviceListItem.component';
import deviceListItemWebTemplate from './deviceListItem.web.html';

describe.only('deviceListItem', () => {
  let $rootScope; // eslint-disable-line no-unused-vars
  let makeController;

  beforeEach(window.module(deviceListItemModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => new DeviceListItemController();
  }));

  describe('Module', () => {
    it('has the name deviceListItem', () => {
      const controller = makeController();
      expect(controller).to.have.property('name');
    });
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {

  });

  describe('Web Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has title in template', () => {
      expect(deviceListItemWebTemplate).to.match(/{{\s?vm\.device\.title\s?}}/g);
    });
    it('has subtitle in template', () => {
      expect(deviceListItemWebTemplate).to.match(/{{\s?vm\.device\.subtitle\s?}}/g);
    });
    it('has description in template', () => {
      expect(deviceListItemWebTemplate).to.match(/{{\s?vm\.device\.description\s?}}/g);
    });
    it('has onClick in template', () => {
      expect(deviceListItemWebTemplate).to.match(/\s?vm\.device\.onClick\s?/g);
    });
    it('has moreOptions in template', () => {
      expect(deviceListItemWebTemplate).to.match(/\s?vm\.device\.moreOptions\s?/g);
    });
    it('has sideText in template', () => {
      expect(deviceListItemWebTemplate).to.match(/{{\s?vm\.device\.sideText\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
    const component = deviceListItemComponent;

    it('includes the intended web template', () => {
      expect(component.template()).to.equal(deviceListItemWebTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(DeviceListItemController);
    });
    it('has a 1 way binding to device', () => {
      expect(component.bindings).to.have.property('device');
      expect(component.bindings.device).to.equal('<');
    });
  });
});
