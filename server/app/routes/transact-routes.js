'use strict';

const transactController = require('../controllers/transact-Controller');

// defining all the end points for transact

module.exports = (app) => {
    // to credit the amount to a particular account
    app.route('/credit')
        .put(transactController.credit);

    app.route('/debit')
        .put(transactController.debit);

    app.route('/transfer')
        .put(transactController.transfer);

};  
