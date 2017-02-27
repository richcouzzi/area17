import angular from 'angular';
import 'angular-ui-router';

import { config } from './utils/config';

import { MainController } from './controllers/main.controller';
import { accordion } from './directives/accordion.directive';

const app = angular.module('app', ['ui.router']);

app
  .config(config)
  .controller('MainController', MainController)
  .directive('accordion', accordion);
