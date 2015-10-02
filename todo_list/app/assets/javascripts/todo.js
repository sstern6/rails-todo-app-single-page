$(document).ready(function(){

  $('body').on('submit','#new_item',function(e){
    e.preventDefault();
    var form = $(this).serialize();

    $.ajax({
      method:"POST",
      url:'/todos',
      data: form
    })

    .done(function(response){
      $('.list').append(response)
      $('#new_item').trigger("reset");
    })
  })
// -------------------------------------------------------------

  $('#main').on('submit',"#complete-item",function(e){
    e.preventDefault();
    var url = $(this).attr('action')
    var divId = $(this).closest('div')

    $.ajax({
      type:'post',
      data: {_method:'PUT'},
      url: url,
      dataType: 'html'
    })

    .done(function(){
      // console.log(this.url)
      // $(divId).remove();
    })


  })


});

