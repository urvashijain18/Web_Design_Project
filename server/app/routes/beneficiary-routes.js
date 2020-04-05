'use strict';

const beneficaryController = require('../controllers/beneficiary-Controller');

// defining all the end points for beneficary

module.exports = (app) => {
    app.route('/beneficiary')
        .get(beneficaryController.list)
        .post(beneficaryController.save);

    app.route('/beneficiary/:accountNumber')

        .delete(beneficaryController.delete);
};  