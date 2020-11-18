import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import NasaAPI from './js/promiseClass.js';

//$(document).ready(function () {
  $('#dinoform').submit(function () {
    event.preventDefault(); 
    let promise = NasaAPI.getEpic();
    promise.then(function(resolvedResponse) {
      const body = JSON.parse(resolvedResponse);
      console.log(body[0]);
      console.log(body[0].image)
      console.log(body[0].date)
      let image = `https://epic.gsfc.nasa.gov/archive/enhanced/${body[0].date}/png/${body[0].image}.png`
      console.log(image);
      $('.displaydiv').append('<img src ="' + image + '"</img>');
    }, 
    function(rejectedResponse) {
      console.log('rejected'); 
      console.log(rejectedResponse);  
      console.log('hi');
    });
  });
//});
 
//code graveyard  
/*for (let i = 0; i < body.length; i ++) { 
  $('.displaydiv').append('<p>' + body[i] + '</p>');
}*/

//const paragraphs = $('#1').val();
//$('#1').val('');
//const words = $('#2').val();
//$('#2').val('');
//const city = $('#3').val();

  /*promise2.then(function(resolvedResponse) {
  const body = JSON.parse(resolvedResponse);
  $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees`);
}, 
function(rejectedResponse) {
  console.log('rejected');
  console.log(rejectedResponse);
  console.log('hi');
});*/