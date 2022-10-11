/**
 * The main application file. This is the ideal place to handle application launch
 * and initialization details.
 */

 import {HomeView} from './home/HomeView.js';

 /* --- */
 webix.debug({events: true});
 /* --- */
 
 /* Global variables */
 window.appdata = {
     appName: 'CityApp'
 };
 /* --- */
 
 /* Initialization function */
 webix.ready(function(){
 
     webix.ui(HomeView);
 
 });
 /* --- */