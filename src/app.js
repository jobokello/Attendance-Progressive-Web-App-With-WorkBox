const attendees = document.querySelector("#attendees");

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
	let html = "";
	data.forEach(user => {
		html += `<div class="card">
			<div><h2>${user.name}</h2></div>
			<div>${user.email}</div>
		</div>`
	});

	attendees.innerHTML = html;
});