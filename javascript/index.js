$(document).ready(function() {
    $('.email_form').on('submit', function(event) {
        event.preventDefault();
        
        var email_value = $('#email').val();

        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email_value)) {
            $(`.email_form_error`).hide();
            alert('E-mail enviado com sucesso!');
        } else {
            if($('#email_2').empty()){
                $(`.email_form_error`).text(`Digite o E-mail`);
            }else{
                $(`.email_form_error`).text(`E-mail inválido`);

            }
            $(`.email_form_error`).show();
            $(".email_form_input").addClass("border-red-500 ")
        }
    });
});
$(document).ready(function() {
    $('.email_form_2').on('submit', function(event) {
        event.preventDefault();

        
        var email_value_2 = $('#email_2').val();

        if (validator.isEmail(email_value_2)) {
            $('#email-error_2').hide();
            alert('E-mail enviado com sucesso!');
        } else {
            if ($('#email_2').val().trim() === '') {
                $('#email-error_2').text('Digite o E-mail');
            } else {
                $('#email-error_2').text('E-mail inválido');
            }
            $('#email-error_2').show();
            $(".email_form_input_2").addClass("border-red-500");
        }
    });
});
