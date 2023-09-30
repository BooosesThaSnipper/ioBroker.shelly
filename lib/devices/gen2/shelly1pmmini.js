'use strict';

const shellyHelperGen2 = require('../gen2-helper');

/**
 * Shelly Plus 1 PM Mini / shellyplus1pmmini
 *
 * https://shelly-api-docs.shelly.cloud/gen2/Devices/ShellyPlus1PM
 */
const shelly1pmmini = {

};

shellyHelperGen2.addSwitchToGen2Device(shelly1pmmini, 0, true);

shellyHelperGen2.addInputToGen2Device(shelly1pmmini, 0);

module.exports = {
    shelly1pmmini,
};
