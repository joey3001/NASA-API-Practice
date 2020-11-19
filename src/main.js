import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import fetchService from './js/fetch.js';
//import BusinessLogic from './js/businessLogic.js';
//import { transformFromAstSync } from '@babel/core';
//import NasaAPI from './js/promiseClass.js';
//import fetchService from './js/fetch.js';

$('#apiform').submit(function () {
  event.preventDefault(); 
  let input = $('#date').val();
  fetchService.makeApiCall(input);
});


//});
//code graveyard  

  /*let promise = NasaAPI.getEpic(input);
  promise.then(function(resolvedResponse) {
    const body = JSON.parse(resolvedResponse); 
    let array = body[0].date.split("-");
    array[2] = array[2].split(" ");
    let image = `https://epic.gsfc.nasa.gov/archive/enhanced/${array[0]}/${array[1]}/${array[2][0]}/png/${body[0].image}.png`
    $('.output').append('<img src ="' + image + '"</img>');
  },  
  function(rejectedResponse) {
    console.log('rejected'); 
    console.log(rejectedResponse);  
    console.log('hi');
  });*/

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