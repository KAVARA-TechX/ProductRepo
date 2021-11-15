$(document).ready(function(){
    $('.appointment-form').on('submit', function(event){
      
      console.log("reached")
      $.ajax({
        data:{
          name: $('#name').val(),
          email: $('#email').val(),
          subject: $("#subject").val(),
          message: $("#message").val(),

        },
        type: 'POST',
        url: 'https://touchwood-school.herokuapp.com/',
        
        
      })



    alert("Message sent Successfully Via Mail")
    
    })

    
})