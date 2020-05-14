 $('.right-paddle').click(function() {
  event.preventDefault();
  $('#boxHoz').animate({
   scrollLeft: "+=345px"
  }, "slow");
});

 $('.right-paddley').click(function() {
  event.preventDefault();
  $('#boxHozCl').animate({
   scrollLeft: "+=345px"
  }, "slow");
});

 $('.right-paddler').click(function() {
  event.preventDefault();
  $('#boxHozCr').animate({
   scrollLeft: "+=345px"
  }, "slow");
});