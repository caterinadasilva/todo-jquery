var contadorItems = 1;

$(document).ready(function () {
	$('#list-items').html(localStorage.getItem('listItems'));
	$('.add-items').submit(function(event) {
		event.preventDefault();
		var item = $('#todo-list-item').val();
		if(item) {
			console.log(contadorItems);
			$('#list-items').append('<li class="collection-item"><input type="checkbox" id="item' + contadorItems + '" /><label for="item' + contadorItems + '">' + item + '</label><a href="#!" class="secondary-content remove"><i class="material-icons">delete</i></a></li>');
			localStorage.setItem('listItems', $('#list-items').html());
			$('#todo-list-item').val("");
		}
	});
	$(document).on('change', ':checkbox', function() {
		if(this.checked) {
			$(this).parent().appendTo('complete-items');
			localStorage.setItem('listItems', $('#complete-items').html());
		} else {
			console.log(this.id + " is unchecked.")
		}
	});
	$(document).on('click', '.remove', function() {
		$(this).parent().remove();
		localStorage.setItem('listItems', $('#list-items').html());
	});

});

function deleteComments() {
	window.localStorage.clear();
	document.getElementById("list-items").innerHTML = "";
	document.getElementById("complete-items").innerHTML = "";
}