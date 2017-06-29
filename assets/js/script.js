$(document).ready(function () {
	$('#list-items').html(localStorage.getItem('listItems'));
	$('.add-items').submit(function(event) {
		event.preventDefault();
		var item = $('#todo-list-item').val();
		if(item) {
			$('#list-items').append('<li class="collection-item"><input type="checkbox" id="' + item + '" /><label for="' + item + '">' + item + '</label><a href="#!" class="secondary-content remove"><i class="material-icons">delete</i></a></li>');
			localStorage.setItem('listItems', $('#list-items').html());
			$('#todo-list-item').val("");
		}
	});
	$(document).on('change', '.checkbox', function() {
		if($(this).attr('checked')) {
			//$(this).attr('checked', 'checked');
			$(this).parent().appendTo('complete-items');
			localStorage.setItem('listItems', $('#complete-items').html());
		} else {
			$(this).removeAttr('checked');
		}
	});
	$(document).on('click', '.remove', function() {
		$(this).parent().parent().remove();
		localStorage.setItem('listItems', $('#list-items').html());
	});

});

function deleteComments() {
	window.localStorage.clear();
	document.getElementById("list-items").innerHTML = "";
	document.getElementById("complete-items").innerHTML = "";
}