$(document).ready(function(){


  $('#new_item').on('submit',function(e){
    e.preventDefault();
    var form = $(this).serialize();

    $.ajax({
      method:"POST",
      url:'/todos',
      data: form,
      dataType:"json"
    })

    .done(function(response){
      $('.list').append('<p>' + response.title + '</p>' )
      $('#new_item').trigger("reset");
    })

  })


});

