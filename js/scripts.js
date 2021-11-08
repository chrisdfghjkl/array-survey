$(document).ready(function() {
  const favsArray = [];
  
  $("#favorite-things").submit(function() {
    event.preventDefault();

    favsArray.push($("#pizza1").val());
    favsArray.push($("#pizza2").val());
    favsArray.push($("#pizza3").val());
    favsArray.push($("#bands1").val());
    favsArray.push($("#bands2").val());
    favsArray.push($("#bands3").val());
    favsArray.push($("#animals1").val());
    favsArray.push($("#animals2").val());
    favsArray.push($("#animals3").val());
    
    $("#arrlist").show();
    $("#fav1").text(favsArray[0]);
    $("#fav2").text(favsArray[5]);
    $("#fav3").text(favsArray[7]);
  });
  
});