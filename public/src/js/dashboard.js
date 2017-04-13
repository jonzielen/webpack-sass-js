var dashboard = (function(){

    function getCompletedOrders(){

        $.ajax({
            url:'/tickets-admin/dashboard/completed-orders',
            type:'GET',
            dataType:'json',
            data:{_token:$("input[name=_token]").val()},
            success:function(response){

                $(".js-completed-orders-loading").hide();

                if('data' in response){
                    if(response['data']['ordersByMonth'] != undefined){

                        Morris.Line({
                            element: 'js-graph-orders',
                            data: response['data']['ordersByMonth'],
                            xkey: 'yearMonth',
                            ykeys: ['total_orders'],
                            labels: [totalOrdersHeading],
                            xLabels: 'month',
                            xLabelFormat: function(d) {
                                return monthNames[(d.getMonth())] +' ' + d.getFullYear();
                            },
                            lineColors: ['#f86638'],
                            hoverCallback: function(index, options, content) {
                                var data = options.data[index];
                                var dateStr = data['yearMonth'].replace(new RegExp('-', 'g'), '/') + '/1';
                                var date = new Date(dateStr);
                                var monthAbbr = date.toLocaleString('en-us', { month: "short" });
                                return "<div>"+
                                    "<div class='chart-popup-heading'>"+monthAbbr+' '+date.getFullYear()+"</div>"+
                                    "<div class='chart-line-orders'>"+totalOrdersHeading+": "+data['total_orders']+"</div></div>";
                            },
                        });
                    }

                    if(response['data']['totalOrderCount'] != undefined){
                        $(".js-total-order-count").text(response['data']['totalOrderCount']);
                    }

                    if(response['data']['totalCustomerCount'] != undefined){
                        $(".js-total-customer-count").text(response['data']['totalCustomerCount']);
                    }

                    if(response['data']['totalShowCount'] != undefined){
                        $(".js-total-show-count").text(response['data']['totalShowCount']);
                    }
                }
            },
            error:function(response){
                $(".js-completed-orders-loading").hide();
            }
        });
    }

    function getCompletedOrdersByLocation(){

        $.ajax({
            url:'/tickets-admin/dashboard/completed-orders-by-location',
            type:'GET',
            dataType:'json',
            data:{_token:$("input[name=_token]").val()},
            success:function(response){

                $(".js-completed-orders-by-location-loading").hide();

                if('data' in response){
                    if(response['data']['ordersByLocation'] != undefined){

                        Morris.Area({
                			element: 'js-graph-orders-by-location',
                			data: response['data']['ordersByLocation'],
                			xkey: 'yearMonth',
                			ykeys: ['total_orders'],
                			xLabels: 'month',
                		    ykeys: ['total_international_orders', 'total_domestic_orders', 'total_local_orders'],
                		    labels: [headingIntl, headingDomestic, headingLocal],
                			behaveLikeLine: true,
                			lineColors: ['#0b62a4', '#7a92a3', '#4da74d'],
                			xLabelFormat: function(d) {
                				return monthNames[(d.getMonth())] +', ' + d.getFullYear();
                			},
                			hoverCallback: function(index, options, content) {
                		        var data = options.data[index];
                				var dateStr = data['yearMonth'].replace(new RegExp('-', 'g'), '/') + '/1';
                				var date = new Date(dateStr);
                				var monthAbbr = date.toLocaleString('en-us', { month: "short" });
                		        return "<div>"+
                					"<div class='chart-popup-heading'>"+monthAbbr+' '+date.getFullYear()+"</div>"+
                					"<div class='chart-line-intl'>"+headingInternational+": "+data['total_international_orders']+"</div>"+
                					"<div class='chart-line-domestic'>"+headingDomestic+": "+data['total_domestic_orders']+"</div>"+
                					"<div class='chart-line-local'>"+headingLocal+": "+data['total_local_orders']+"</div>"+
                					"</div>";
                		    },
                		});
                    }

                    if(response['data']['totalIntlOrderCount'] != undefined){
                        $(".js-total-intl-order-count").text(response['data']['totalIntlOrderCount']);
                    }

                    if(response['data']['totalDomesticOrderCount'] != undefined){
                        $(".js-total-domestic-order-count").text(response['data']['totalDomesticOrderCount']);
                    }

                    if(response['data']['totalLocalNYOrderCount'] != undefined){
                        $(".js-total-local-order-count").text(response['data']['totalLocalNYOrderCount']);
                    }
                }
            },
            error:function(response){
                $(".js-completed-orders-loading").hide();
            }
        });
    }

    function getCompletedOrdersLastMonth(){

        $.ajax({
            url:'/tickets-admin/dashboard/completed-orders-last-month',
            type:'GET',
            dataType:'json',
            data:{_token:$("input[name=_token]").val()},
            success:function(response){

                $(".js-completed-orders-last-month-loading").hide();

                if('data' in response){
                    if(response['data']['ordersLastMonth'] != undefined){

                        Morris.Bar({
                			element: 'js-graph-orders-last-month',
                			data: response['data']['ordersLastMonth'],
                			xkey: 'order_date',
                			ykeys: ['total_orders'],
                			labels: [totalOrdersHeading],
                			xLabels: 'date',
                			barColors: ['#0b62a4'],
                			hoverCallback: function(index, options, content) {

                		        var data = options.data[index];
                				var dateStr = data['order_date'].replace(new RegExp('-', 'g'), '/');
                				var date = new Date(dateStr);
                				var monthAbbr = date.toLocaleString('en-us', { month: "short" });

                		        return "<div>"+
                					"<div class='chart-popup-heading'>"+monthAbbr+' '+ date.getDate() +', '+date.getFullYear()+"</div>"+
                					"<div class='chart-line-last-month'>"+totalOrdersHeading+": "+data['total_orders']+"</div>"+
                					"</div>";
                		    },
                		});
                    }
                }
            },
            error:function(response){
                $(".js-completed-orders-loading").hide();
            }
        });
    }

    function getCompletedOrdersByDevice(){

        $.ajax({
            url:'/tickets-admin/dashboard/completed-orders-by-device',
            type:'GET',
            dataType:'json',
            data:{_token:$("input[name=_token]").val()},
            success:function(response){

                $(".js-completed-orders-by-device-loading").hide();

                if('data' in response){
                    if(response['data']['ordersByDevice'] != undefined){

                        Morris.Area({
                			element: 'js-graph-orders-by-device',
                			data: response['data']['ordersByDevice'],
                			xkey: 'yearMonth',
                			ykeys: ['total_orders'],
                			xLabels: 'month',
                		    ykeys: ['total_desktop_orders', 'total_mobile_orders'],
                		    labels: [headingDesktop, headingMobile],
                			behaveLikeLine: true,
                			xLabelFormat: function(d) {
                				return monthNames[(d.getMonth())] +', ' + d.getFullYear();
                			},
                			hoverCallback: function(index, options, content) {
                		        var data = options.data[index];
                				var dateStr = data['yearMonth'].replace(new RegExp('-', 'g'), '/') + '/1';
                				var date = new Date(dateStr);
                				var monthAbbr = date.toLocaleString('en-us', { month: "short" });
                		        return "<div>"+
                					"<div class='chart-popup-heading'>"+monthAbbr+' '+date.getFullYear()+"</div>"+
                					"<div class='chart-line-desktop'>"+headingDesktop+": "+data['total_desktop_orders']+"</div>"+
                					"<div class='chart-line-mobile'>"+headingMobile+": "+data['total_mobile_orders']+"</div>"+
                					"</div>";
                		    },
                		});
                    }

                    if(response['data']['totalDesktopOrderCount'] != undefined){
                        $(".js-total-desktop-order-count").text(response['data']['totalDesktopOrderCount']);
                    }

                    if(response['data']['totalMobileOrderCount'] != undefined){
                        $(".js-total-mobile-order-count").text(response['data']['totalMobileOrderCount']);
                    }

                    if(response['data']['deviceRatio'] != undefined){
                        $(".js-device-ratio").text(response['data']['deviceRatio']);
                    }
                }
            },
            error:function(response){
                $(".js-completed-orders-loading").hide();
            }
        });
    }

    return {
        getCompletedOrders:function(){
            getCompletedOrders();
        },
        getCompletedOrdersByLocation:function(){
            getCompletedOrdersByLocation();
        },
        getCompletedOrdersLastMonth:function(){
            getCompletedOrdersLastMonth();
        },
        getCompletedOrdersByDevice:function(){
            getCompletedOrdersByDevice();
        }
    };
})();

module.exports = dashboard;
