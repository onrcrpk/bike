/*--- Statistics View ---*/

import {StatsCtrl} from './StatisticsController.js';

export const StatsView = {
    id: 'statistics-view',
    rows: [{
        view: 'template',
        id: 'sts_map',
        on: {
            onAfterRender: () => { StatsCtrl.onViewReady(); }
        }
    },{
        height: 5
    },{
        height: 500,
        cols:[{
            view: 'template',
            id: 'sts_barchart',
            template: 'Line Chart',
        },{
            
        },{
            type: 'clean',
            cols: [{
                view: 'template',
                id: 'sts_piechart',
                width: 400,
                template: 'Another chart'
            },{
                view: 'template',
                id: 'sts_pielegend',
                width: 400,
                template: 'Legend'
            }]
        }]
    }],
    getController: () => {
        return StatsCtrl;
    }
};
/* --- */