const url = 'https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned?activity=skiing';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '77312c4fe0mshea1aa31e0ab64fap188204jsn81ed638681b5',
        'X-RapidAPI-Host': 'calories-burned-by-api-ninjas.p.rapidapi.com'
    }
};

const sport = (activity) => {
    fetch('https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned?activity=' + activity, options)
        .then((response) => { return response.json() })
        .then((data) => {
            console.log(data)


            act.innerHTML = act.innerHTML + "<br>" + "Name:" + " " + data[0].name + " <br>" + "Duration_minutes:" + " " + data[0].duration_minutes + "<br>" + "Total_calories_burned: " + data[0].total_calories


        })

}

submit.addEventListener("click", (event) => {
    event.preventDefault();
    sport(activity.value);
    act.innerHTML = " ";


})

sport();