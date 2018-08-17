var HTML = ""; // HTML string variable
for(var i = 0; i < 8; i++){
    HTML += '<img src="images/ninja.png" alt="ninja">'; // loops img 8 times
}
HTML += '<button>Restore</button>'

$(document).ready(function(){

    $('#container').append(HTML) // append above for loop

    $('img').click(function(){
        $(this).hide("slow");
    })

    $('button').click(function(){
        $('img').show();
    })

})