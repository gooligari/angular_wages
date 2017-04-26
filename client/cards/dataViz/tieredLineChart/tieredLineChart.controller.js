/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/

class TieredLineChartController {
  constructor() {
    this.name = 'tieredLineChart';

    const that = this;
    this.masterArray = [];
    this.chartArray = [];

    this.formatData();

    // setting the slider options
    this.slider = {
      min: this.minRangeValue,
      max: this.maxRangeValue,
      options: {
        floor: this.minRangeValue,
        ceil: this.maxRangeValue,
        translate(value) {
          if (value === (new Date())) {
            return moment(value).format('hh:mm');
          }
          return moment(value).format('MM/DD hh:mm');
        },
        onEnd() {
          that.navigate();
        },
      },
    };

    this.lineChartOptions = {
      chart: {
        height: 175,
        type: 'lineChart',
        rightAlignYAxis: true,
        margin: {
          top: 20,
          right: 60,
          bottom: 40,
          left: 30,
        },
      },
    };
    this.currentValue(this.maxRangeValue);
  }

  formatData() {
    const that = this;

    _.filter(this.data.parameterData, (data) => {
      that.masterArray.push({ parameter: data[0].key, chartData: data });
    });

    // Sorting data in ascending Order
    _.filter(this.masterArray, (data) => {
      _.orderBy(data.chartData[0].values, ['x'], ['asc']);
    });

    this.chartArray.push(this.masterArray[0]);
    this.count = 1;

    this.minRangeValue = this.masterArray[0].chartData[0].values[0].x;
    this.maxIndex = this.masterArray[0].chartData[0].values.length;
    this.maxRangeValue = this.masterArray[0].chartData[0].values[this.maxIndex - 1].x;
  }

  displaySelectedParameter(model, index) {
    const that = this;
    _.filter(this.data.parameterData, (data) => {
      if (data[0].key === model) {
        that.chartArray[index] = { parameter: model, chartData: data };
      }
    });
    this.navigate();
  }

  addChart() {
    if (this.count < this.masterArray.length) {
      this.chartArray.push(this.masterArray[this.count]);
      this.count += 1;
      this.navigate();
    } else {
      alert('There are no more parameters to add'); // eslint-disable-line no-alert
    }
  }

  // To Update chart values once the slider range changes
  navigate() {
    const that = this;
    const tempMasterArray = angular.copy(this.masterArray);
    _.filter(this.masterArray, (data) => {
      const result =
       _.filter(data.chartData[0].values, o => o.x >= that.slider.min && o.x <= that.slider.max);

      _.filter(that.chartArray, (dataParameter) => {
        const localData = dataParameter;
        if (localData.chartData[0].key === data.chartData[0].key) {
          localData.chartData[0].values = result;
        }
      });
    });
    this.currentValue(this.chartArray[0].chartData[0].values[this.chartArray[0].chartData[0].values.length-1].x);
    this.masterArray = tempMasterArray;
  }

  currentValue(cmpDate) {
    this.showCurrentValue = false;
    this.date1 = moment(cmpDate).format('MM/DD/YYYY');
    this.date2 = moment(new Date()).format('MM/DD/YYYY');
    if (this.date1 === this.date2) {
      this.showCurrentValue = true;
    }
  }

  $onChanges(changes) {
    if (changes.data.currentValue.parameterData[0].values[0]) {
      this.chartData = changes.data.currentValue.parameterData[0].values[0];
    }
  }
}

export default TieredLineChartController;
