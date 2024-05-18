const content = document.getElementById('content')

function getData() {
	let userData = JSON.parse(localStorage.getItem('userData')) || []

	for (let i = 0; i < userData.length; i++) {
		content.innerHTML += `
		<div class="card m-2" style="width: 18rem;">
			<div class="card-body">
				<h5 class="card-title">${userData[i].name}</h5>
				<p class="card-text">${userData[i].email}</p>
			</div>
		</div>
		`
	}
}

getData()
