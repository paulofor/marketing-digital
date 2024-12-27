'use strict';

module.exports = function(Checkoutprodutoproprio) {

    Checkoutprodutoproprio.InsereItem = function(item,callback) {

        Checkoutprodutoproprio.create(item,callback);
    }
	
};
