var custDetails = (function(){

    function addNote(evt, customerId){

        $(".js-modal-save-err").hide();
        $(".js-modal-save-btn").off("click");
        $(".js-info-display-response").html("Note:<textarea class='form-control js-note-text' rows='10'></textarea>");
        $(".js-modal-save-btn").on("click", function(){
            handleNoteUpdate(null, customerId);
        });

        common.toggleInfo(evt);
    }

    function showNote(evt, selector, customerId, noteId){

        $(".js-modal-save-err").hide();
        $(".js-modal-save-btn").off("click");
        $(".js-modal-save-btn").on("click", function(){
            handleNoteUpdate(noteId, customerId);
        });

        $(".js-info-display-response").html("");

        common.toggleInfo(evt, selector);

        $(".js-info-display-response").append("Note:<textarea class='form-control js-note-text-"+noteId+"' rows='10'></textarea>");
        $(".js-note-text-"+noteId).val($(".js-note-pre-"+noteId).text());

    }

    function handleNoteUpdate(noteId, customerId){

        $(".js-modal-save-err").hide();

        var noteText = $(".js-note-text").val();
        if(noteId){
            noteText = $(".js-note-text-"+noteId).val();
        }

        if(!noteText){
            $(".js-modal-save-err").text(valueRequiredError).show();
            return false;
        }

        var url = '/tickets-admin/customer-notes/'+noteId;
        var method = 'PUT';
        if(!noteId){
            url = '/tickets-admin/customer-notes';
            method = 'POST';
        }

        $.ajax({
            url:url,
            type:method,
            dataType:'json',
            data:{
                noteText:noteText,
                customerId:customerId,
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
                            var detailsBtn = $("<button class='btn btn-primary' onclick='custDetails.showNote(event, \".js-note-"+newNoteId+"\", "+customerId+", "+newNoteId+")'></button>").text(openLabel);
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

    return {
    	showNote:function(evt, selector, customerId, noteId){

            showNote(evt, selector, customerId, noteId);
    	},
    	addNote:function(evt, customerId){

            addNote(evt, customerId);
    	}
    };

})();

module.exports = custDetails;
