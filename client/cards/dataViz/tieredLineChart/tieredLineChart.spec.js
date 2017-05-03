/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import TieredLineChartModule from './';
import TieredLineChartController from './tieredLineChart.controller';
import TieredLineChartComponent from './tieredLineChart.component';
import TieredLineChartTemplate from './tieredLineChart.web.html';

describe('TieredLineChart', () => {
  let $rootScope; // eslint-disable-line no-unused-vars
  let makeController;

  beforeEach(window.module(TieredLineChartModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => new TieredLineChartController();
  }));

  describe('Module', () => {
    it('has the name tieredLineChart', () => {
      expect(TieredLineChartModule.name).to.be.equal('tieredLineChart');
    });
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
      expect(TieredLineChartTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });

    it('has data in template', () => {
      expect(TieredLineChartTemplate).to.match(/\s?vm\.title\s?/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = TieredLineChartComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(TieredLineChartTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(TieredLineChartController);
    });

    it('has a 1 way binding to data', () => {
      expect(component.bindings).to.have.property('data');
      expect(component.bindings.data).to.equal('<');
    });
  });
});

