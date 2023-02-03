let button = document.getElementById('button')
let fetch = document.getElementById('fetch')

button.addEventListener('click', () =>{
    fetch("http://192.168.4.8:3000/data", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
        body: "left",
        
    }).then(res => res.json())
    .then(data => console.log(data))

}) 

