$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#tarefa').val();
        $(`<li>${novaTarefa}</li>`).appendTo('ul')
    })

    $(document).on('click', 'li', function(){
        $(this).toggleClass('riscado');
    })

    
})