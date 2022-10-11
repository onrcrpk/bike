/*--- Statistics controller ---*/

import {createMap} from '../tools.js'

export let StatsCtrl = {

    navMap: null,

    /*- View initialization function -*/
    onViewReady: function(){
        let mapPanel = $$('sts_map');
        mapPanel.getNode().innerHTML = '<div class="nav_map" id="' + mapPanel.config.id + '_div"></div>';
        this.navMap = createMap(mapPanel.config.id);
        console.log('Map element created!!!');
    }

};
/*--- ---*/