/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import moment from 'moment';

class DataTableController {
  constructor() {
    this.name = 'dataTable';

    this.rowColorFn = (data) => {
      if (_.isArray(data) && data.length !== 0) {
        if (data[0].value !== data[data.length - 1].value) {
          return '#FFFFFF';
        }
      }
      return undefined;
    };

    this.textColorFn = (data) => {
      if (_.isArray(data) && data.length !== 0) {
        if (data[0].value !== data[data.length - 1].value) {
          return '#246EE0';
        }
      }
      return undefined;
    };

    this.getTimestamps();
  }

  getTimestamps() {
    const result = [];
    _.forEach(this.rows, (value) => {
      _.forEach(value.data, (inner) => {
        if (inner !== '') {
          if (moment(new Date(inner.timestamp)).isValid()) {
            // Parse timestamp if its not in the expected format
            result.push(moment(inner.timestamp).format('H:mmA'));
          } else {
            result.push(inner.timestamp);
          }
        }
      });
    });
    this.timestamps = _.uniq(result);
  }

  $onChanges(changes) {
    if (changes.rows) {
      this.rows = changes.rows.currentValue;
      this.getTimestamps();
    }
  }

}

export default DataTableController;
