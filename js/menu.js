function getCustomers(argument) {
	var min = 0,
		amount = 10,
		customers = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];

	function getList(arr) {
		var max = arr.length,
			i = Math.floor(Math.random() * (max - min)) + min;
		return arr[i];
	}

	while (amount) {
		amount--;
		document.write("<img src='images/" + getList(customers) + "'>");
	}
}

getCustomers();