const zipInput = document.querySelector('#zip');
const btn = document.querySelector('button');
const displayCity = document.querySelector('#displayCity');
const displayTemp = document.querySelector('#temperature');
const displayFeelsLike = document.querySelector('#feelsLike');
const displaySummary = document.querySelector('#summary');

btn.addEventListener('click', async () => {
	try {
		const apiKey = '1f667d8964ef21f43b8bbf22aaaee854';
		let zip = zipInput.value;
		const data = await axios(
			`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}&units=imperial`
		);
		console.log(data.data);

		let city = data.data.name;
		let temperature = data.data.main.temp;
		let feelsLike = data.data.main.feels_like;
		let summary = data.data.weather[0].description;

		displayCity.textContent = city;
		displayTemp.textContent = `The temperature is ${temperature}`;
		displayFeelsLike.textContent = `Feels like ${feelsLike}`;
		displaySummary.innerHTML = `<h3>Summary</h3> ${summary}`;
	} catch (error) {
		console.log(error);
	}
});
