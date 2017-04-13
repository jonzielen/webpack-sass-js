//require('jquery');
require('jquery-ui-dist');
require('jquery-ui/ui/widgets/datepicker');
require('bootstrap');
const common = require('./common');

console.log(common);

$(function() {
  $("#accordion").accordion();
  $("#datepicker").datepicker();
});

$(function() {
    var dateFormat = "mm/dd/yy",
      from = $( "#from" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 3
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });

    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }

      return date;
    }
});


$( document ).ready(function() {

    $(".js-tickets-modal").modal();


    timeChanged();
});

function timeChanged(evt){

    if(evt){
        evt.preventDefault();
    }

    $(".js-ticket-selection").parents("tr").removeClass('showSelected');


    if($(".js-ticket-selection:checked").length == 1){
        $(".js-ticket-selection:checked").parents("tr").addClass('showSelected');
        $(".js-checkout-btn").prop('disabled', false);
    }else{
        $(".js-checkout-btn").prop('disabled', true);
    }
}

function findTickets(evt){

    evt.preventDefault();

    if($(".js-search-btn").attr('disabled')){
        return false;
    }

    $(".js-search-btn").attr('disabled', true);

    var searchStartDate = $(".js-search-start-date").val();
    var searchEndDate = $(".js-search-end-date").val();
    var showTimeTable = $(".js-show-times-data");

    $(".js-show-times-table").hide();
    $(".js-search-error").hide();
    $(".js-checkout-button-bar").hide();
    $(".js-searching").show();
    showTimeTable.html('');
    $(".js-checkout-btn").prop('disabled', true);

    $.ajax({
        url:'/search/find-tickets',
        type:'POST',
        dataType:'json',
        data:{
            searchStartDate: searchStartDate,
            searchEndDate: searchEndDate,
            _token:$("input[name=_token]").val(),
        },
        success:function(response){

            if('data' in response && response['data'].length > 0){
                response['data'].forEach(function(item){
                    var row = $("<tr>");
                    row.append("<td>"+item['productDisplayDate']+"</td>");
                    row.append("<td>"+item['productTime']+"</td>");
                    row.append("<td>"+item['description']+"</td>");
                    row.append("<td>"+item['nycgoPrice']+"</td>");
                    row.append("<td><input type='radio' name='eventTimeId' class='js-ticket-selection' value='"+item['productId']+"' onchange='timeChanged(event)' /></td>");
                    showTimeTable.append(row);
                });
            }else{
                showTimeTable.append("<tr><td class='text-center' colspan='5'>{{ trans('error.nothing-found') }}</td></tr>");
            }

            $(".js-searching").hide();
            $(".js-show-times-table").show();
            $(".js-checkout-button-bar").show();
            $(".js-search-btn").attr('disabled', false);
        },
        error:function(response){

            if('status' in response && response['status'] == 404){
                window.location = "/error/404";
            }

            $(".js-searching").hide();
            $(".js-show-times-table").show();
            $(".js-checkout-button-bar").show();
            $(".js-search-error").show();
            $(".js-search-btn").attr('disabled', false);
            showTimeTable.append("<tr><td class='text-center' colspan='5'>{{ trans('error.general') }}</td></tr>");
        }
    });
}

$( document ).ready(function() {
  console.log(common);
  var datepickerConfig = common.datepickerConfig();
  $(".js-search-start-date").datepicker(datepickerConfig);
  $(".js-search-end-date").datepicker(datepickerConfig);
});
