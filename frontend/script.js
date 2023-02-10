document.getElementById("send-request-button").addEventListener("click", function() {

    fetch("http://172.20.10.4:3000/")
      .then(response => response.text())
      .then(potentiometerValue => {
        document.getElementById("potentiometer-value-container").innerHTML = `Valeur du potentiomètre : ${potentiometerValue}`;
      })
      .catch(error => console.error(error));
  });

