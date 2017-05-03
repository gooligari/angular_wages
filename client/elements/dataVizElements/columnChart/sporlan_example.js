/* eslint no-use-before-define:0, camelcase:0, default-case:0, no-case-declarations:0,
guard-for-in:0, no-param-reassign:0, no-unused-vars:0, no-use-before-define:0,
prefer-const:0 no-restricted-syntax:0 */
/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


angular
  .module(
    'cards.column', [
      'highcharts-ng',
    ],
  )
  .directive(
    'parkerColumn',
    () => {
      return {
        controller,
        controllerAs: 'vm',
        restrict: 'E',
        scope: {
          data: '=',
          title: '@',
          width: '@',
          type: '@',
        },
        template: '<highchart style="height:270px" config="vm.config"></highchart>',
      };

      function controller($scope) {
        const vm = this;

        vm.config = {
          loading: true,
          options: {
            chart: {
              backgroundColor: 'transparent',
              spacingRight: 20,
              spacingLeft: 20,
              type: 'column',
              width: $scope.width,
            },
            colors: ['rgba(255,255,255,0.6)', '#8FE557', 'rgba(255,255,255,0.6)'],
            credits: {
              enabled: false,
            },
            exporting: {
              enabled: false,
            },
            legend: {
              enabled: false,
            },
            plotOptions: {
              column: {
                maxPointWidth: 20,
                stacking: 'normal',
              },
            },
            title: {
              align: 'left',
              style: {
                fontSize: '1.3em',
                whiteSpace: 'nowrap',
              },
              text: $scope.title,
            },
            tooltip: {
              enabled: false,
            },
            yAxis: {
              gridLineWidth: 0,
              labels: {
                enabled: false,
              },
              tickInterval: 1,
              title: {
                text: null,
              },
            },
          },
          series: [{
            data: [],
            index: 1,
          }, {
            data: [],
            index: 3,
          }, {
            data: [],
            index: 2,
          }],
          xAxis: {
            categories: [],
            lineWidth: 0,
            tickWidth: 0,
          },
        };

        $scope.$watch(
          'data',
          (r) => {
            vm.config.loading = false;

            let barData = [];
            let chart = vm.config.getHighcharts();
            let lineData = [];
            let map = {
              color: ['#1751C6', '#E54538', '#FFE027'],
            };

            const limit = {};
            switch ($scope.type) {
              case 'DA':
                let low_temperature_alarm = r.lines[0].data[0];
                let high_temperature_alarm = r.lines[1].data[0];
                let discharge_temperature = r.lines[2].data[0];
                let offset = Math.ceil((Math.max(discharge_temperature,
                high_temperature_alarm) - Math.min(discharge_temperature,
                low_temperature_alarm)) * 0.2);

                limit.max = Math.max(high_temperature_alarm,
                discharge_temperature) + Math.abs(offset);
                limit.min = Math.min(low_temperature_alarm,
                discharge_temperature) - Math.abs(offset);
                break;
              case 'SH':
                limit.max = 50;
                limit.min = 0;
                break;
            }

            for (const key in r) {
              switch (key) {
                case 'bars':
                  if (r[key].length === 1) {
                    r[key][0].name = '';
                  }

                  barData = r[key].map(
                    (obj, i) => {
                      const num = Math.round(obj.data[0] * 10) / 10;
                      const value = $scope.type !== 'DA' ? obj.data[0] : obj.data[0] + -limit.min;

                      return {
                        name: `<div style="font-size:large;font-weight:bold;">${num}</div><br><div style="font-size:medium;">${obj.name}</div>`,
                        y: value,
                      };
                    },
                  );
                  break;
                case 'lines':
                  chart.yAxis[0].update({
                    plotLines: r[key].map(
                      (obj, i) => {
                        const num = Math.round(obj.data[0] * 10) / 10;
                        const value = $scope.type !== 'DA' ? obj.data[0] : obj.data[0] + -limit.min;

                        lineData.push({
                          y: value,
                        });

                        const params = {
                          color: map.color[i],
                          label: {
                            align: 'right',
                            style: {
                              'font-size': '1.5em',
                            },
                            text: num,
                            textAlign: 'left',
                            x: -10,
                            y: -5,
                          },
                          value,
                          width: 2,
                        };

                        if (i === 2) {
                          params.label.x = 10;
                          params.label.align = 'left';
                          params.label.textAlign = 'right';
                        }

                        return params;
                      },
                    ),
                  });
                  break;
              }
            }

            if ($scope.type === 'DA') {
              limit.max += -limit.min;
              limit.min += -limit.min;
            }

            const stack = {
              max: [],
              min: [],
            };
            barData.forEach(
              (obj) => {
                stack.max.push({
                  y: limit.max - Math.max(0, obj.y),
                });

                stack.min.push({
                  y: limit.min - Math.min(0, obj.y),
                });
              },
            );

            vm.config.getHighcharts().yAxis[0].setExtremes(limit.min, limit.max);
            vm.config.series[0].data = stack.max;
            vm.config.series[1].data = barData;
            vm.config.series[2].data = stack.min;
          },
        );
      }
    })

;
