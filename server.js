var paytm_checksum = require('./paytm/checksum');

function createCheckSum() {
    /* put checksum parameters in Object */
    var paytmParams;
    var paramObj = {
                    "requestType": "Payment",
                    "mid": "",
                    "pgName": "paytm",
                    "orderId": "ORDER1001",
                    "websiteName": "WEBSTAGING",
                    "txnAmount": {
                        "value": "1.00",
                        "currency": "INR"
                    },
                    "userInfo": {
                        "custId": ""
                    },
                    "callbackUrl": ""
                };
    /**
     * Generate checksum by parameters we have
     * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys 
     */
    paramObj = JSON.stringify(paramObj);
    // Add escape string
    console.log("paytmParams ", paytmParams);
    paytm_checksum.genchecksum(paytmParams, "MERCHANT_KEY", function(err, checksum) {
        console.log(checksum);
    });
}
createCheckSum();