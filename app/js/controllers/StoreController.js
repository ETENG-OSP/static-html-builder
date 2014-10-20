angular.module('app').controller('StoreController', [
function () {
  'use strict';

  this.products = [{
    name: 'socks',
    price: 10,
    aaa: 'aaa'
  }, {
    name: 'computer',
    price: 7000
  }];

  this.add = function () {
    this.products.unshift({
      name: 'other',
      price: 100
    });
  };
}]);
