var review = (function(){

    function handleResponse(response){

        if (response.messages.resultCode === 'Error') {
            $(".js-post-err").html('');
            for (var i = 0; i < response.messages.message.length; i++) {
                $(".js-post-err").append("<div>"+response.messages.message[i].text+"</div>");
            }
            $(".js-main-err").show();
            $(".js-post-err").show();
            $(".js-processing-modal").modal('toggle');
            scrollToMainError();
            $(".js-buy-tickets-btn").attr('disabled', false);
        } else if (response.messages.resultCode === 'Ok') {
            useOpaqueData(response.opaqueData)
        } else {
            $(".js-processing-modal").modal('toggle');
            showGenericError();
        }
    }

    function useOpaqueData(responseData) {

        if('dataValue' in responseData
            && 'dataDescriptor' in responseData
            && responseData.dataValue
            && responseData.dataDescriptor == 'COMMON.ACCEPT.INAPP.PAYMENT')
        {
            $(".js-opaque-data-desc").val(responseData.dataDescriptor);
            $(".js-opaque-data-val").val(responseData.dataValue);
            $(".js-review-form").submit();
        }else {
            showGenericError();
        }
    }

    function validateInput(){

        var hasErrors = false;

        if($(".js-postalCode").val() == ""){
            hasErrors = true;
            $(".js-postalCode-err").show();
        }

        if($(".js-ccName-temp").val() == ""){
            hasErrors = true;
            $(".js-ccName-err").show();
        }

        if($(".js-ccNumber").val() == ""){
            hasErrors = true;
            $(".js-ccNumber-err").show();
        }

        if($(".js-ccCsc").val() == ""){
            hasErrors = true;
            $(".js-ccCsc-err").show();
        }

        if(hasErrors){
            $(".js-main-err").show();
            scrollToMainError();
            return false;
        }else{
            return true;
        }
    }

    function scrollToMainError(){
        window.scrollTo(0,$(".js-main-err").offset().top);
    }

    function processPaymentData(evt){

        evt.preventDefault();

        if($(".js-buy-tickets-btn").attr('disabled')){
            return false;
        }

        $(".js-buy-tickets-btn").attr('disabled', true);

        //hide errors
        $(".js-err").hide();

        if(!validateInput()){
            $(".js-buy-tickets-btn").attr('disabled', false);
            return false;
        }

        $(".js-processing-modal").modal();

        var secureData = {}, authData = {}, cardData = {};
        var expMonth = $(".js-ccExpMonth-temp option:selected").val();
        var expYear = $(".js-ccExpYear-temp option:selected").val();

        $(".js-ccName").val($(".js-ccName-temp").val());
        $(".js-ccExpMonth").val($(".js-ccExpMonth-temp").val());
        $(".js-ccExpYear").val($(".js-ccExpYear-temp").val());
        $(".js-ccLast4").val($(".js-ccNumber").val().substr($(".js-ccNumber").val().length - 4));
        $(".js-ccType").val($(".js-ccNumber").val().substr(0, 1));

        cardData.fullName = $(".js-ccName-temp").val();
    	cardData.cardNumber = $(".js-ccNumber").val();
    	cardData.month = expMonth;
    	cardData.year = expYear;
        cardData.cardCode = $(".js-ccCsc").val();
        cardData.zip = $(".js-postalCode").val();
    	secureData.cardData = cardData;

        var loginId = '';
        if(authorizeNetLoginId != 'undefined'){
            loginId = authorizeNetLoginId;
        }

        var clientKey = '';
        if(authorizeNetClientKey != 'undefined'){
            clientKey = authorizeNetClientKey;
        }

    	authData.clientKey = clientKey;
    	authData.apiLoginID = loginId;
    	secureData.authData = authData;

        if(typeof Accept != 'undefined'){
            try{
                Accept.dispatchData(secureData, 'responseHandler');
            }catch(e){
                $(".js-processing-modal").modal('toggle');
                showGenericError();
            }
        }else{
            $(".js-processing-modal").modal('toggle');
            showGenericError(missingLibraries);
        }
    }

    function showGenericError(errorMessage){

        var message = genericError;
        if(errorMessage){
            message = errorMessage;
        }

        $(".js-buy-tickets-btn").attr('disabled', false);
        $(".js-post-err").html("<div>"+message+"</div>");
        $(".js-post-err").show();
        window.scrollTo(0,$(".js-post-err").offset().top);
    }

    return {

        processPaymentData:function(evt){
            processPaymentData(evt);
        },
        handleResponse:function(response){
            handleResponse(response);
        },
        showCscHelp:function(evt){
            evt.preventDefault();
            $(".js-tickets-modal").modal();
        },
        cancelOrder:function(evt){
            evt.preventDefault();
            $(".js-confirm-modal").modal();
        }
    };
})();

module.exports = review;
