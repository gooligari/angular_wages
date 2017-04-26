
// import DataViz from './dataViz';
// import LoginCard from './login';
//
//
//   const cards = angular.module('cards', [
//
//     DataViz.name,
//     LoginCard.name
//   ]);
// export default cards;

import DataViz from './dataViz';
import LoginCard from './login';

export default angular
  .module('cards', [
    DataViz.name,
    LoginCard.name
  ])
