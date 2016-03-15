// Cash Register function
var total = 0;
$("#addItems").click(function() 
{
	var item = $("#item").val(); 
	var cost = parseInt($("#cost").val());
	total = total + cost;
	// clears out the cost and item input fields
	$("#cost").val("");	
	$("#item").val("");	
	$("#itemList").append("<li>" + item + ": " + cost); 
	$("#totalCost").html(total);
});

// To-Do List function
$("#addNewItem").click(function() 
{
	var toDo = $("#toDo").val(); 
	$("#items").append("<li>" + toDo + "<button> X </button> </li>");
	$("#toDo").val("");	
	// Delete Button functionality
	$("li").on("click", function()
	{
   		$(this).remove();
	});
});
 