var common = (function(){
    function taskWithConfirm(title, body, callback){
        if(title){
            $(".js-confirm-modal-title").text(title);
        }

        if(body){
            $(".js-confirm-modal-body").html(body);
        }

        $(".js-confirm-modal-yes").off('click');
        if(callback){
            $(".js-confirm-modal-yes").on('click', callback);
        }

        $(".js-confirm-modal").modal();
    }

    function handleDelete(itemId, url, deleteButtonText, deleteButtonActionText){
        $(".js-delete-btn-"+itemId).text(deleteButtonActionText).attr("disabled", true);

        $.ajax({
            url:url,
            type:'DELETE',
            dataType:'json',
            data:{_token:$("input[name=_token]").val()},
            success:function(response){
                $(".js-rowid-"+itemId).remove();
                $(".js-confirm-modal").modal('hide');
            },
            error:function(response){
                $(".js-delete-btn-"+itemId).text(deleteButtonText).attr("disabled", false);
                if('status' in response && response['status'] == 401){
                    $(".js-status-"+itemId).text(unauthorized).show();
                }else if('responseJSON' in response && 'message' in response['responseJSON']){
                    $(".js-status-"+itemId).text(response['responseJSON']['message']).show();
                }
                $(".js-confirm-modal").modal('hide');
            }
        });
    }

    return {
        taskWithConfirm:function(title, body, callback){
            taskWithConfirm(title, body, callback);
        },
        handleDelete:function(url, deleteButtonText, deleteButtonActionText){
            handleDelete(url, deleteButtonText, deleteButtonActionText);
        },
        toggleInfo:function(evt, selector){
            evt.preventDefault();
            var info = $(selector).html();
            $(".js-info-display-response").html(info);
            $(".js-info-display-modal").modal();
        },
        showHide:function(evt, selector){
            evt.preventDefault();
            $(selector).toggle();
        },
        datepickerConfig:function(){

            return {
                showButtonPanel: true,
                changeYear: true,
                changeMonth: true,
                dateFormat: 'yy-mm-dd',
                monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNamesMin: ['S', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'],
                beforeShow: function (textbox, instance) {

                    instance.dpDiv.css({
                        marginTop: (-textbox.offsetHeight) + 'px',
                        marginLeft: textbox.offsetWidth + 'px'
                    });
                    $(".ui-datepicker").css('font-size', 12);
                }
            };
        }
    };
})();

console.log(common);
