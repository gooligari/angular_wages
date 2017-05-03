/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import DataTableModule from './';
import DataTableController from './dataTable.controller';
import DataTableComponent from './dataTable.component';
import DataTableTemplate from './dataTable.web.html';

describe('DataTable', () => {
  let makeController;

  beforeEach(window.module(DataTableModule.name));
  beforeEach(inject(() => {
    makeController = () => new DataTableController();
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  it('has the name dataTable', () => {
    const controller = makeController();
    expect(controller).to.have.property('name');
  });

  describe('Template', () => {
    it('has title in template', () => {
      expect(DataTableTemplate).to.match(/\s?vm\.title\s?/g);
    });

    it('has rows in template', () => {
      expect(DataTableTemplate).to.match(/\s?vm\.rows\s?/g);
    });

    it('has row color function in template', () => {
      expect(DataTableTemplate).to.match(/\s?vm\.rowColorFn\s?/g);
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
      expect(controller.title).to.not.be.undefined; // eslint-disable-line no-unused-expressions
      expect(controller.rows).to.not.be.undefined; // eslint-disable-line no-unused-expressions
      expect(controller.rowsColorFn) // eslint-disable-line no-unused-expressions
      .to.not.be.undefined;
    });

    it('rowsColorFn should return color based on array', () => {
      const controller = makeController();
      controller.rows = [
        {
          name: 'Discharge Temperature (L):',
          data: [
          { value: 55, timestamp: '9:10A' },
          { value: 23, timestamp: '9:41A' },
          ],
        },
        {
          name: 'Discharge Temperature (C):',
          data: [
          { value: 56, timestamp: '9:10A' },
          { value: 23, timestamp: '9:41A' },
          ],
        }];
      expect(controller.rowColorFn(controller.rows)).to.equal('#FF0000');
    });
  });

  describe('Component', () => {
      // component/directive specs
    const component = DataTableComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(DataTableTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(DataTableController);
    });
  });
});
