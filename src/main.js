import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function () {
  $('#dinoform').submit(function () {
    event.preventDefault();
    const paragraphs = $('#1').val();
    $('#1').val('');
    console.log(paragraphs);
    let request = new XMLHttpRequest();
    const url = `http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${paragraphs}`;
    console.log(url);

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();
    function getElements(response) {
      $('.displaydiv').text(response[0][0]);
      console.log(response);
    }
  });
});