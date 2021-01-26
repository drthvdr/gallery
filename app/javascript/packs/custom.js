console.log("custom js file loaded");

function notify() {
  alert( "clicked" );
}
$( "#fuck" ).on( "click", notify );