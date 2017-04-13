var checkout = (function(){

    var selectedCountryHasStates = null;

    function validateInput(){

        var hasErrors = false;

        if($(".js-firstName").val() == ""){
            hasErrors = true;
            $(".js-firstName-err").show();
        }

        if($(".js-lastName").val() == ""){
            hasErrors = true;
            $(".js-lastName-err").show();
        }

        if($(".js-email").val() == ""){
            hasErrors = true;
            $(".js-email-err").show();
        }

        if($(".js-address").val() == ""){
            hasErrors = true;
            $(".js-address-err").show();
        }

        if($(".js-city").val() == ""){
            hasErrors = true;
            $(".js-city-err").show();
        }

        if($(".js-country").val() === "0"){
            hasErrors = true;
            $(".js-country-err").show();
        }

        if(($(".js-country").val() == "USA" || $(".js-country").val() == "CAN") && ($(".js-state").val() === "0" || $(".js-state").val() === "XX")){
            hasErrors = true;
            $(".js-state-err").show();
        }else if(($(".js-country").val() != "USA" && $(".js-country").val() != "CAN") && ($(".js-state").val() !== "XX")){
            hasErrors = true;
            $(".js-state-err").show();
        }

        if($(".js-postalCode").val() == ""){
            hasErrors = true;
            $(".js-postalCode-err").show();
        }

        if($(".js-phone").val() == ""){
            hasErrors = true;
            $(".js-phone-err").show();
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

    function processBillingData(evt){

        evt.preventDefault();

        //hide errors
        $(".js-err").hide();

        if(!validateInput()){
            return false;
        }

        $(".js-promo-code").val($(".js-promo-temp").val());
        $(".js-newsletter").val($(".js-newsletter-temp").is(":checked"));

        $(".js-checkout-form").submit();
    }

    function countryChanged(evt){
        evt.preventDefault();

        var newSelection = $(".js-country").val();
        if(newSelection == "CAN" || newSelection == "USA"){
            if(selectedCountryHasStates !== true){
                selectedCountryHasStates = true;
                $(".js-state").val('0');
            }
        }else{
            if(selectedCountryHasStates !== false){
                selectedCountryHasStates = false;
                $(".js-state").val('XX');
            }
        }
    }

    return {

        processBillingData:function(evt){
            processBillingData(evt);
        },
        handleResponse:function(response){
            handleResponse(response);
        },
        countryChanged:function(evt){
            countryChanged(evt);
        },
        showCscHelp:function(evt){
            evt.preventDefault();
            $(".js-tickets-modal").modal();
        }
    };
})();

module.exports = checkout;
