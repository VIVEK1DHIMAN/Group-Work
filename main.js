document.addEventListener("DOMContentLoaded", function() {
  const video = document.querySelector(".background-video");


  video.addEventListener("ended", function() {
    video.currentTime = 0;
    video.play();
  });
});


$(document).ready(function(){
  $('.carousel').owlCarousel({
    loop: true, 
    nav: false, 
    dots: false,
    autoplay: true, 
    autoplayTimeout: 3000,
    autoplayHoverPause: true, 


    responsive:{
      0:{
        items: 1 
      },
      600:{
        items: 1
      },
      1000:{
        items: 1
      }
    }
  });
});






// CLIENT HTML TMEPLATE
const client_html = `
<!DOCTYPE html>
<html lang="en">
<head>
  
  <title>Thank You for Contacting Us</title>
 
</head>
<body>
  <div class="container">
    
    <div class="message">
      <h1>Thank You for Contacting Us</h1>
      <p>We have received your message and will get back to you shortly.</p>
    </div>
    <div class="footer">
      <p>If you have any questions, please feel free to contact us at <a href="mailto:info@example.com">info@example.com</a>.</p>
     </div>

</body>
</html>`;






//  JS FOR FORM
const submit_btn=document.getElementById('submit-btn');
submit_btn.addEventListener('click',(event)=>{
    event.preventDefault();

    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
   
    const reason=document.getElementById('reason').value;

    if(name=='' || email=='' || reason==''){
      alert("Please Fill All Detials");
      return;
    }
  

    // SERVER HTML TEMPLATE
    const server_html=`<!DOCTYPE html>
    <html>
    <head>
        <title>HTML Table with Input Fields</title>
    </head>
    <body>
        <table border="1">
            <tr>
                <td>Name:</td>
                <td><input type="text" value="${name}" disabled></td>
            </tr>
            <tr>
                <td>Email:</td>
                <td><input type="email" value="${email}" disabled /></td>
            </tr>
            <tr>
                <td>Reason:</td>
                <td><input type="text" value="${reason}" disabled /></td>
            </tr>
        </table>
    </body>
    </html>`;
    


  

    const success="Information Sent Successfully";
   
    // SNED USER DETAILS TO SERVER(GMAIL)
    Email.send({
       Host:"smtp.elasticemail.com",
       Username:"s9718218@gmail.com",
       Password:"70ED12E48C0ECD7C9D5337C648C2728BBFFF",
       To:"meetdavinderkumar@gmail.com",
       From:"s9718218@gmail.com",
       Subject:"New User Added",
        Body:server_html,
      
    }).then(
      () => {
        
        alert(success);

        //  SEND THANSK TO USER
        const thanks_msg="Thanks for Contacting us";
        const check_mail="Check Your Mail Spam Folder";
    Email.send({
        Host:"smtp.elasticemail.com",
        Username:"s9718218@gmail.com",
        Password:"70ED12E48C0ECD7C9D5337C648C2728BBFFF",
        To:email,
        From:"s9718218@gmail.com",
        Subject:"Thanks Message",
        Body:client_html
     }).then(
       message => alert(check_mail)
     );
    }
    );


  
      

})