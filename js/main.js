function getCustomers(argument) {
	var min = 0,
		amount = 1,
		customers = [1, 2, 3, 4, 5, 6, 7],
		menu = ["images/coffee.png", "images/lemonade.png", "images/tomat.png"],
		div = document.createElement("div"),
		order = document.createElement("div"),
		span = document.createElement("span"),
		img = document.createElement("img");

	function getNumber(arr) {
		var max = arr.length,
			i = Math.floor(Math.random() * (max - min)) + min;

			return arr[i];
	}

	while (amount) {
		amount--;

		div.className = "customer";
		order.className = "order_box";
		main.appendChild(div);
		div.appendChild(img);
		div.appendChild(order);
		order.appendChild(span);
		console.log(getNumber(menu));
		span.style.backgroundImage = "url('"+ getNumber(menu) +"')";

		img.src = "images/" + getNumber(customers) + ".png";
	}
}


function maxCustomers(argument) {
	var all_users = document.querySelectorAll(".customer");

	if (all_users.length >= 4) {
		clearInterval(print_users);
	}

	getCustomers();
}


var print_users = setInterval(maxCustomers, 200);





