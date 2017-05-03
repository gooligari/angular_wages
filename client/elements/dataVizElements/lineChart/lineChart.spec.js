/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import LineChartModule from './';
import LineChartController from './lineChart.controller';
import LineChartComponent from './lineChart.component';
import LineChartTemplate from './lineChart.web.html';

describe('LineChart', () => {
  let $rootScope; // eslint-disable-line no-unused-vars
  let makeController;

  beforeEach(window.module(LineChartModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => new LineChartController();
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      const controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(LineChartTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
    const component = LineChartComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(LineChartTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(LineChartController);
    });
  });
});
