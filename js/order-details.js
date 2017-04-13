var orderDetails = (function(){

    function addNote(evt, orderId){

        $(".js-modal-save-err").hide();
        $(".js-modal-save-btn").off("click");
        $(".js-info-display-response").html("Note:<textarea class='form-control js-note-text' rows='10'></textarea>");
        $(".js-modal-save-btn").on("click", function(){
            handleNoteUpdate(null, orderId);
        });

        common.toggleInfo(evt);
    }

    function showNote(evt, selector, orderId, noteId){

        $(".js-modal-save-err").hide();
        $(".js-modal-save-btn").off("click");
        $(".js-modal-save-btn").on("click", function(){
            handleNoteUpdate(noteId, orderId);
        });

        $(".js-info-display-response").html("");

        common.toggleInfo(evt, selector);

        $(".js-info-display-response").append("Note:<textarea class='form-control js-note-text-"+noteId+"' rows='10'></textarea>");
        $(".js-note-text-"+noteId).val($(".js-note-pre-"+noteId).text());
    }

    function handleNoteUpdate(noteId, orderId){

        $(".js-modal-save-err").hide();

        var noteText = $(".js-note-text").val();
        if(noteId){
            noteText = $(".js-note-text-"+noteId).val();
        }

        if(!noteText){
            $(".js-modal-save-err").text(valueRequiredError).show();
            return false;
        }

        var url = '/tickets-admin/order-notes/'+noteId;
        var method = 'PUT';
        if(!noteId){
            url = '/tickets-admin/order-notes';
            method = 'POST';
        }

        $.ajax({
            url:url,
            type:method,
            dataType:'json',
            data:{
                noteText:noteText,
                orderId:orderId,
                _token:$("input[name=_token]").val()
            },
            success:function(response){

                if('data' in response && 'note_id' in response['data']){

                    var lastUpdated = response['data']['last_updated'];
                    var updatedBy = response['data']['updated_by'];
                    var newNote = response['data']['note'];
                    var newNoteId = response['data']['note_id'];
                    var newNoteExcerpt = (newNote.length>100) ? newNote.substr(0,100)+'...' : newNote;

                    if(noteId){
                        $(".js-note-updated-at-"+noteId).text(lastUpdated);
                        $(".js-note-modal-updated-at-"+noteId).text(lastUpdated);
                        $(".js-note-updated-by-"+noteId).text(updatedBy);
                        $(".js-note-modal-updated-by-"+noteId).text(updatedBy);
                        $(".js-note-note-"+noteId).text(newNoteExcerpt);
                        $(".js-note-pre-"+noteId).text(newNote);
                    }else{

                        var row = $("<tr>");
                        var lastUpdatedCell = $("<td class='js-note-updated-at-"+newNoteId+"'></td>").text(lastUpdated);
                        var updatedByCell = $("<td class='js-note-updated-by-"+newNoteId+"'></td>").text(updatedBy);
                        var noteExcerptCell = $("<td class='js-note-note-"+newNoteId+"'></td>").text(newNoteExcerpt);
                        var buttonCell = $("<td></td>");
                            var detailsBtn = $("<button class='btn btn-primary' onclick='orderDetails.showNote(event, \".js-note-"+newNoteId+"\", "+orderId+", "+newNoteId+")'></button>").text(openLabel);
                            var noteBox = $("<div class='js-note-"+newNoteId+"' style='display:none'>");

                                var modalLastUpdate = $("<div>");
                                    var modalLastUpdateLbl = $("<span>").text(lastUpdatedLabel+": ");
                                    var modalLastUpdateVal = $("<span class='js-note-modal-updated-at-"+newNoteId+"'>").text(lastUpdated);
                                modalLastUpdate.append([modalLastUpdateLbl, modalLastUpdateVal]);

                                var modalLastUpdateBy = $("<div>");
                                    var modalLastUpdateByLbl = $("<span>").text(updatedByLabel+": ");
                                    var modalLastUpdateByVal = $("<span class='js-note-modal-updated-by-"+newNoteId+"'>").text(updatedBy);
                                modalLastUpdateBy.append([modalLastUpdateByLbl, modalLastUpdateByVal]);

                            noteBox.append(modalLastUpdate, modalLastUpdateBy);

                            var notePre = $("<pre class='js-note-pre-"+newNoteId+"' style='display:none'>").text(newNote);

                        buttonCell.append([detailsBtn, noteBox, notePre]);
                        row.append([lastUpdatedCell, updatedByCell, noteExcerptCell, buttonCell]);

                        $(".js-note-tbl-body").append(row);

                    }

                    $(".js-info-display-modal").modal('hide');
                }else{

                    $(".js-modal-save-err").text(genericError).show();
                }
            },
            error:function(response){
                if('status' in response && response['status'] == 401){
                    $(".js-modal-save-err").text(unauthorized).show();
                }else{
                    $(".js-modal-save-err").text(genericError).show();
                }
            }
        });
    }

    function handleSeatUpdate(orderId){

        $(".js-modal-save-err").hide();

        var seatText = $(".js-seat-text").val();

        var url = '/tickets-admin/order-seats/'+orderId;
        var method = 'PUT';

        $.ajax({
            url:url,
            type:method,
            dataType:'json',
            data:{
                seatText:seatText,
                orderId:orderId,
                _token:$("input[name=_token]").val()
            },
            success:function(response){

                if('data' in response && 'seats' in response['data']){

                    var newSeat = response['data']['seats'];
                    $(".js-order-seats").text(newSeat);

                    $(".js-info-display-modal").modal('hide');
                }else{

                    $(".js-modal-save-err").text(genericError).show();
                }
            },
            error:function(response){

                if('status' in response && response['status'] == 401){
                    $(".js-modal-save-err").text(unauthorized).show();
                }else{
                    $(".js-modal-save-err").text(genericError).show();
                }
            }
        });
    }

    function handleStatusUpdate(orderId){

        $(".js-modal-save-err").hide();

        var selectedStatus = $(".js-status-options").val();
        var isTest = $(".js-test-order").prop('checked');

        var url = '/tickets-admin/order-status/'+orderId;
        var method = 'PUT';

        $.ajax({
            url:url,
            type:method,
            dataType:'json',
            data:{
                status:selectedStatus,
                isTest:isTest,
                _token:$("input[name=_token]").val()
            },
            success:function(response){

                if('data' in response && 'status' in response['data']){

                    var newStatus = response['data']['status'];
                    var isTest = response['data']['isTest'];
                    $(".js-order-status").text(newStatus);
                    if(newStatus == 'COMPLETE'){
                        $(".js-status-field").removeClass('danger success').addClass('success');
                    }else{
                        $(".js-status-field").removeClass('danger success').addClass('danger');
                    }

                    if(isTest){
                        $(".js-test-transaction").text(testTransaction);
                    }else{
                        $(".js-test-transaction").text('');
                    }

                    $(".js-info-display-modal").modal('hide');
                }else{

                    $(".js-modal-save-err").text(genericError).show();
                }
            },
            error:function(response){

                if('status' in response && response['status'] == 401){
                    $(".js-modal-save-err").text(unauthorized).show();
                }else{
                    $(".js-modal-save-err").text(genericError).show();
                }
            }
        });
    }

    function editSeats(evt, orderId){

        $(".js-modal-save-err").hide();
        $(".js-modal-save-btn").off("click");
        $(".js-info-display-response").html("Seats:<input type='text' class='form-control js-seat-text' />");
        $(".js-modal-save-btn").on("click", function(){
            handleSeatUpdate(orderId);
        });

        var seatsVal = $(".js-order-seats").text().trim();
        if(seatsVal.toLowerCase() == 'unassigned'){
            seatsVal = '';
        }
        $(".js-seat-text").val(seatsVal);

        common.toggleInfo(evt);
    }

    function editStatus(evt, orderId){

        $(".js-modal-save-err").hide();
        $(".js-modal-save-btn").off("click");
        $(".js-info-display-response").html("Status: <select class='form-control js-status-options'>\
            <option value='CANCELLED'>CANCELLED</option>\
            <option value='COMPLETE'>COMPLETE</option>\
            <option value='DECLINED'>DECLINED</option>\
            <option value='ERROR'>ERROR</option>\
            <option value='PENDING'>PENDING</option>\
            <option value='REFUNDED'>REFUNDED</option>\
            <option value='VOIDED'>VOIDED</option>\
            </select>\
            <div class='checkbox'><label><input type='checkbox' class='js-test-order' />This is a test order</label></div>");
        $(".js-modal-save-btn").on("click", function(){
            handleStatusUpdate(orderId);
        });

        var statusVal = $(".js-order-status").text().trim();
        $(".js-status-options").val(statusVal);

        var isOrderTest = $(".js-test-transaction").text().trim();
        if(isOrderTest){
            $(".js-test-order").prop('checked', true);
        }

        common.toggleInfo(evt);
    }

    return {
    	showNote:function(evt, selector, orderId, noteId){

            showNote(evt, selector, orderId, noteId);
    	},
    	addNote:function(evt, orderId){

            addNote(evt, orderId);
    	},
        showAvsCodeHelp:function(evt){
            evt.preventDefault();
            $(".js-avs-code-modal").modal();
        },
        showCvvCodeHelp:function(evt){
            evt.preventDefault();
            $(".js-cvv-code-modal").modal();
        },
        showResponseCodeHelp:function(evt){
            evt.preventDefault();
            $(".js-response-code-modal").modal();
        },
        editSeats:function(evt, orderId){
            editSeats(evt, orderId);
        },
        editStatus:function(evt, orderId){
            editStatus(evt, orderId);
        }
    };
})();

module.exports = orderDetails;
