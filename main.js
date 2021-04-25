menu_list_array = ["Vege Pizza", "Meat Pizza", "Cheese Pizza", "Sea food Pizza", "Margarita Pizza"];
function add_item(){
var htmldata;
var item-document.getElementById("add_item").value;
menu_list_array.push(item);
menu_list_array.sort();
htmldata-"<section class-'cards'>"
for(var 1-0;)1<menu_list_array.length;1++{
    htmldata-htmldata+'<div class="card">' +'<img src="images.pizzaImg.png">' + menu_list_array[1] + '</div>'
}
htmldata-htmldata+"</section>"
document.getElementById("display_addmenu").innerHTML = htmldata;
}