var customer = (function(){

    function search(source, onSuccess, onError){

        $(".js-searcher").show();

        if(customer.searchTimeout){
            clearTimeout(customer.searchTimeout);
        }

        var name = $(source).val();
        if(!name){
            $(".js-searcher").hide();
            $(".js-customer-list").hide();
            $(".js-recent-customer-list").show();
            return false;
        }

        $(".js-customer-list").html('').hide();
        $(".js-recent-customer-list").hide();

        customer.searchTimeout = setTimeout(function(){

            clearTimeout(customer.searchTimeout);

            customer.searchTimeout = null;

            $.ajax({
                url:'/tickets-admin/customers/search',
                type:'POST',
                dataType:'json',
                data:{
                    name:name,
                    _token:$("input[name=_token]").val(),
                },
                success:function(response){
                    onSuccess(response);
                },
                error:function(response){
                    onError(response);
                }
            });
        }, 1000);
    }

    function searchSuccess(response){

        $(".js-searcher").hide();

        var resultsBox = $(".js-customer-list");
        resultsBox.html('');

        if('data' in response &&
            response['data'].length > 0)
        {
            response['data'].forEach(function(item){
                resultsBox.append("<a href='/tickets-admin/customers/"+item['id']+"' data-itemid='"+item['id']+"'>"+item['first_name']+" "+item['last_name']+" ("+item['email']+")<br/>");
            });

            resultsBox.show();
        }else{
            resultsBox.html('Nothing found.').show();
        }
    }

    function searchError(response){

        $(".js-searcher").hide();
        if('status' in response && response['status'] == 401){
            $(".js-customer-list").html(unauthorized).show();
        }else{
            $(".js-customer-list").html(nothingFound).show();
        }
    }

    return {
        search:function(evt, source){
            evt.preventDefault();
            search(source, searchSuccess, searchError);
        },
    };
})();

module.exports = customer;
