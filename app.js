axios.get("http://127.0.0.1:5000/api/candy")
    .then(response => {
        let candy_container = document.getElementById('candy_div');
        let candy = response[`data`];
        for (let i = 0; i < candy.length; i++) {
            candy_container.insertAdjacentHTML('beforeend',
                `<article>
          <h2>${candy[i][1]}</h2>
          <img src="${candy[i][2]}" style="width: 200px;">
          <p>${candy[i][3]}</p>
        </article>`);
        }
    })
    .catch(error => {
        console.log("Error", error);
    });

function createCandy() {
    let name_input = document.getElementById('name_input').value;
    let image_url_input = document.getElementById('image_url_input').value;
    let description_input = document.getElementById('description_input').value;
axios.request({
    url:"http://127.0.0.1:5000/api/candy",
    method: "POST",
    data: {
        "name" : name_input,
        "image_url" : image_url_input,
        "description" : description_input
    }
}).catch(error => {
    console.log("Sorry, Something went wrong");
}) }