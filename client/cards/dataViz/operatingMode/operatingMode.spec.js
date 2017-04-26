/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import OperatingModeModule from './';
import OperatingModeController from './operatingMode.controller';
import OperatingModeComponent from './operatingMode.component';
import OperatingModeTemplate from './operatingMode.web.html';

describe('OperatingMode', () => {
  let $rootScope; // eslint-disable-line no-unused-vars
  let makeController;

  beforeEach(window.module(OperatingModeModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => new OperatingModeController();
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  it('has the name operatingMode', () => {
    const controller = makeController();
    expect(controller).to.have.property('name');
  });

  describe('Template', () => {
    it('has title in template', () => {
      expect(OperatingModeTemplate).to.match(/\s?vm\.title\s?/g);
    });

    it('has display State function in template', () => {
      expect(OperatingModeTemplate).to.match(/\s?vm\.displayState\s?/g);
    });
  });


  describe('Controller', () => {
    // controller specs
    it('has a name property', () => { // erase if removing this.name from the controller
      const controller = makeController();
      expect(controller).to.have.property('name');
    });

    it('has default values initialized', () => {
      const controller = makeController();
      expect(controller.title).to.not.be.undefined;  // eslint-disable-line no-unused-expressions
      expect(controller.displayState) // eslint-disable-line no-unused-expressions
      .to.not.be.undefined;
    });

    it('displayState should return color based on array', () => {
      const controller = makeController();
      controller.rows = [
        {
          data: [
          { icon: 'iicon-lightbulb-filled', state: true, 'color-on': '#26CB26', 'color-off': '#000000', size: '74' },
          ],
        }];
      expect(controller.displayState(d)).to.equal('ON'); // eslint-disable-line no-undef
    });
  });

  describe('Component', () => {
      // component/directive specs
    const component = OperatingModeComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OperatingModeTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OperatingModeController);
    });
  });
});
