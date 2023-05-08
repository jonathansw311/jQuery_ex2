$('<h1><center>Movie Rating Page<br></h1></center>').appendTo('body')

$('body').append('<form class="movieForm"></form>');
$('.movieForm').append('<label for="Movie">     Movie Title:</label><input type="text" id="box1" placeholder="Enter movie Here">');
$('.movieForm').append('<label for="Rating">Rating:</label><input type="text" id="box2" placeholder="Enter movie rating Here"><br><br>');
$('.movieForm').append('<Button id="submit">Submit!</Button><br>');

$('body').append('<ol class="movieList"></ol>');

$('#submit').on("click", function(e){
    e.preventDefault();
   
    let title= $('input').eq(0).val();
    let rating=$('input').eq(1).val();
    $('ol').append(`<li>Movie: ${title}<br> Rating: ${rating}<br><Button class="removeButton">Remove</button></li><br>`);
    

});

$('ol').on("click", '.removeButton', function(e){
   console.log(e.target)
   console.log(this)

    $(this).parent().remove();

})


