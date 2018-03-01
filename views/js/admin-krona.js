$(document).ready(function() {
    // Load Chosen
    $(".chosen").chosen();


    // Action Form: hide execution_max field if execution_type is unlimited
    $('#genzo_krona_action_form').on('change', function() {

        id_form = 'genzo_krona_action_form';

        if (($("#execution_type").val()) === "unlimited") {
            hideElement(id_form, 'execution_max');
        }
        else {
            showElement(id_form, 'execution_max');
        }

    }).trigger('change');

    // Level Form:
    $('#genzo_krona_level_form').on('change', function() {

        id_form = 'genzo_krona_level_form';

        condition_type = $("#condition_type").val();
        if (condition_type === "action") {
            showElement(id_form, 'id_action');
            showElement(id_form, 'condition_action');
            hideElement(id_form, 'condition_points');
        }
        else {
            hideElement(id_form, 'id_action');
            hideElement(id_form, 'condition_action');
            showElement(id_form, 'condition_points');
        }

        reward_type = $("#reward_type").val();
        if (reward_type === "symbolic") {
            hideElement(id_form, 'id_reward_group');
            hideElement(id_form, 'id_reward_coupon');
            hideElement(id_form, 'id_group');
        }
        else if (reward_type === "coupon") {
            showElement(id_form, 'id_reward_coupon');
            hideElement(id_form, 'id_reward_group');
            hideElement(id_form, 'id_group');
        }
        else if (reward_type === "group") {
            showElement(id_form, 'id_reward_group');
            showElement(id_form, 'id_group');
            hideElement(id_form, 'id_reward_coupon');
        }

    }).trigger('change');

    function hideElement(form, id) {
        $('#'+form+' #'+id).closest('.form-wrapper > .form-group').hide();
    }
    function showElement(form, id) {
        $('#'+form+' #'+id).closest('.form-wrapper > .form-group').show();
    }



    // Sortable for Group Priority in Settings Tab

    var fixHelper = function(e, ui) { ui.children().each(function() { $(this).width($(this).width()); }); return ui; };

    var sortOrder = [];
    var $sortableTable  = $("#sortable tbody");

    $sortableTable.sortable({
        start: function(event, element){
            $.map($('tr [name^=position]', $sortableTable), function(element){
                sortOrder.push(element.value);
            });
        },
        stop: function(event, element) {
            $.each($('tr [name^=position]', $sortableTable), function(index, element){
                element.value = sortOrder[index];
            });
        }
    });

    $sortableTable.disableSelection();

    $('tr [name^=position]', $sortableTable).on('keydown', function(){
        $(this).closest('tr').data()
    });



});