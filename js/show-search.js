var show = (function(){

    function search(source, onSuccess, onError, isShowTimePage){

        $(".js-searcher").show();

        if(show.searchTimeout){
            clearTimeout(show.searchTimeout);
        }

        var name = $(source).val();
        if(!name){
            $(".js-searcher").hide();
            return false;
        }

        $(".js-show-list").html('').hide();

        show.searchTimeout = setTimeout(function(){

            clearTimeout(show.searchTimeout);

            show.searchTimeout = null;

            $.ajax({
                url:'/tickets-admin/show-search',
                type:'POST',
                dataType:'json',
                data:{
                    name:name,
                    _token:$("input[name=_token]").val(),
                },
                success:function(response){
                    onSuccess(response, isShowTimePage);
                },
                error:function(response){
                    onError(response);
                }
            });
        }, 1000);
    }

    function searchSuccess(response, isShowTimePage){

        $(".js-searcher").hide();

        var resultsBox = $(".js-show-list");
        resultsBox.html('');

        var page = "shows";
        if(isShowTimePage){
            page = "show-times";
        }

        if('data' in response &&
            response['data'].length > 0)
        {
            response['data'].forEach(function(item){
                resultsBox.append("<a href='/tickets-admin/"+page+"/"+item['ShowCode']+"'>"+item['ShowText']+"<br/>");
            });

            resultsBox.show();
        }else{
            resultsBox.html('Nothing found.').show();
        }
    }

    function searchError(response){

        $(".js-searcher").hide();
        if('status' in response && response['status'] == 401){
            $(".js-show-list").html(unauthorized).show();
        }else{
            $(".js-show-list").html(nothingFound).show();
        }
    }

    return {
        search:function(evt, source, isShowTimePage){
            evt.preventDefault();
            search(source, searchSuccess, searchError, isShowTimePage);
        },
    };
})();

module.exports = show;
