/**
 *  --- Home View ---
 */

 import {HomeCtrl} from './HomeController.js';
 import {StatsView} from '../statistics/StatisticsView.js';
 
 export const HomeView = {
     type: 'space',
     cols: [{
         view: 'tabview',
         id: 'home-view',
         tabbar: {
             optionWidth: 150,
             on: {
                 onAfterRender: HomeCtrl.onViewReady
             }
         },
         cells: [{
             header: 'Heat Map',
             body: StatsView
         },{
             header: 'Section 2',
             body: {
                 id: 'planning-view',
                 template: 'bla bla bla  in this container...'
             }
         },{
             header: 'Section 3',
             body: {
                 id: 'transport-view',
                 template: 'data will be displayed here...'
             }
         },{
             header: '&bull;&nbsp;&bull;&nbsp;&bull;',
             body: {
                 id: 'temporary-view',
                 template: 'Any other required view can be added here...'
             }
         }]
     }],
     getController: () => {
         return HomeCtrl;
     }
 };