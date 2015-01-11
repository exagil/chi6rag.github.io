$(document).ready(function(){
  
  // row one

    // calculator
    $(".calculator").on('mouseenter', function(){
      $(this).prepend("<h4 class='on-hover-heading'>jQuery Calculator<hr />     \
        <p class='on-hover-paragraph'>I made a functional jQuery Calculator with an awesome UI</p></h4>  \
        ");
    });
    $(".calculator").on('mouseleave', function(){
      $(this).find("h4").remove();
    });

    // flames game
    $(".flames").on('mouseenter', function(){
      $(this).prepend("<h4 class='on-hover-heading'>Flames Game<br /><hr />     \
        <p class='on-hover-paragraph'>I made a game for people to find the scope of their relationship</p></h4>  \
        ");
    });
    $(".flames").on('mouseleave', function(){
      $(this).find("h4").remove();
    });

    // rideshare
    $(".rideshare").on('mouseenter', function(){
      $(this).prepend("<h4 class='on-hover-heading'>Rideshare<br /><hr />     \
        <p class='on-hover-paragraph'>I developed RideShare, for people who like to travel in budget</p></h4>  \
        ");
    });
    $(".rideshare").on('mouseleave', function(){
      $(this).find("h4").remove();
    });

    // rails
    $(".rails").on('mouseenter', function(){
      $(this).prepend("<h4 class='on-hover-heading'>Rails Contributions<br /><hr />     \
        <p class='on-hover-paragraph'>I love to improve Rails, that too, my way</p></h4>  \
        ");
    });
    $(".rails").on('mouseleave', function(){
      $(this).find("h4").remove();
    });

  // end one

    // swachbharat
    $(".swachbharat").on('mouseenter', function(){
      $(this).prepend("<h4 class='on-hover-heading'>SwachBharat<br /><hr />     \
        <p class='on-hover-paragraph'>Take a pledge to clean your locality with FiveStar's Swachbharat</p></h4>  \
        ");
    });
    $(".swachbharat").on('mouseleave', function(){
      $(this).find("h4").remove();
    });

    // rakshak
    $(".rakshak").on('mouseenter', function(){
      $(this).prepend("<h4 class='on-hover-heading'>Rakshak<br /><hr />     \
        <p class='on-hover-paragraph'>Rakshak is an application which lets women travel safely at night </p></h4>  \
        ");
    });
    $(".rakshak").on('mouseleave', function(){
      $(this).find("h4").remove();
    });
});