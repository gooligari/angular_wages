/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/

import LineChartCardModule from './';
import LineChartCardController from './lineChartCard.controller';
import LineChartCardComponent from './lineChartCard.component';
import LineChartCardTemplate from './lineChartCard.web.html';

describe('LineChartCard', () => {
  let $rootScope; // eslint-disable-line no-unused-vars
  let makeController;

  beforeEach(window.module(LineChartCardModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => new LineChartCardController();
  }));

  describe('Module', () => {
    it('has the name lineChartCard', () => {
      expect(LineChartCardModule.name).to.be.equal('lineChartCard');
    });
  });

  describe('Controller', () => {
      // controller specs
    it('has a name property', () => { // erase if removing this.name from the controller
      const controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(LineChartCardTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });

    it('has title in template', () => {
      expect(LineChartCardTemplate).to.match(/\s?vm\.title\s?/g);
    });

    it('has leftSubTitle in template', () => {
      expect(LineChartCardTemplate).to.match(/\s?vm\.leftSubTitle\s?/g);
    });

    it('has rightSubTitle in template', () => {
      expect(LineChartCardTemplate).to.match(/\s?vm\.rightSubTitle\s?/g);
    });

    it('has details in template', () => {
      expect(LineChartCardTemplate).to.match(/\s?vm\.details\s?/g);
    });
    it('has chart in template', () => {
      expect(LineChartCardTemplate).to.match(/\s?vm\.chart\s?/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
    const component = LineChartCardComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(LineChartCardTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(LineChartCardController);
    });

    it('has a 1 way binding to title', () => {
      expect(component.bindings).to.have.property('title');
      expect(component.bindings.title).to.equal('<');
    });

    it('has a 1 way binding to leftSubTitle', () => {
      expect(component.bindings).to.have.property('leftSubTitle');
      expect(component.bindings.leftSubTitle).to.equal('<');
    });

    it('has a 1 way binding to rightSubTitle', () => {
      expect(component.bindings).to.have.property('rightSubTitle');
      expect(component.bindings.rightSubTitle).to.equal('<');
    });

    it('has a 1 way binding to chart', () => {
      expect(component.bindings).to.have.property('chart');
      expect(component.bindings.chart).to.equal('<');
    });

    it('has a 1 way binding to details', () => {
      expect(component.bindings).to.have.property('details');
      expect(component.bindings.details).to.equal('<');
    });
  });
});
