var order = (function(){

    function search(source, onSuccess, onError){

        $(".js-searcher").show();

        if(order.searchTimeout){
            clearTimeout(order.searchTimeout);
        }

        var name = $(source).val();
        if(!name){
            $(".js-searcher").hide();
            $(".js-order-list").hide();
            $(".js-recent-order-list").show();
            return false;
        }

        $(".js-order-list").html('').hide();
        $(".js-recent-order-list").hide();

        order.searchTimeout = setTimeout(function(){

            clearTimeout(order.searchTimeout);

            order.searchTimeout = null;

            $.ajax({
                url:'/tickets-admin/orders/search',
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

        var resultsBox = $(".js-order-list");
        resultsBox.html('');

        if('data' in response &&
            response['data'].length > 0)
        {
            response['data'].forEach(function(item){
                resultsBox.append("<a href='/tickets-admin/orders/"+item['order_number']+"' data-itemid='"+item['order_number']+"'>"+item['order_number']+" "+item['show_code']+" ("+item['first_name']+" "+item['last_name']+"; "+item['email']+") ["+item['status']+"]<br/>");
            });

            resultsBox.show();
        }else{
            resultsBox.html('Nothing found.').show();
        }
    }

    function searchError(response){

        $(".js-searcher").hide();
        if('status' in response && response['status'] == 401){
            $(".js-order-list").html(unauthorized).show();
        }else{
            $(".js-order-list").html(nothingFound).show();
        }
    }

    return {
        search:function(evt, source){
            evt.preventDefault();
            search(source, searchSuccess, searchError);
        },
    };
})();

module.exports = order;
