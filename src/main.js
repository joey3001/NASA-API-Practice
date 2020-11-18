import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import NasaAPI from './js/promiseClass.js';

//$(document).ready(function () {
$('#apiform').submit(function () {
  event.preventDefault(); 
  let input = $('#date').val();
  console.log(input)
  let promise = NasaAPI.getEpic(input);
  promise.then(function(resolvedResponse) {
    const body = JSON.parse(resolvedResponse); 
    let array = body[0].date.split("-");
    array[2] = array[2].split(" ");
    console.log(array);
    console.log(array[2][0]);
    let image = `https://epic.gsfc.nasa.gov/archive/enhanced/${array[0]}/${array[1]}/${array[2][0]}/png/${body[0].image}.png`
    $('.output').append('<img src ="' + image + '"</img>');
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