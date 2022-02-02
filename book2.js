function fetchData() {
  fetch("./man2.json")
  .then(response => {
    if (!response.ok) {
      throw Error("error");
    }

    return response.json();
  })

  .then(data => {
    const tabula = data.map(persona => {
      return `
          <tr>
            <td>${persona.plauktaID}</td>
            <td>${persona.gramatasID}</td>
            <td>${persona.autors}</td>
            <td>${persona.nosaukums}</td> 
            <td>${persona.valoda}</td>     
            <td>${persona.zanrs}</td>    
            <td>${persona.lapuskaits}</td>  
          </tr>
      `;
    })
    
    .join("");

    document.querySelector('#showdata').innerHTML = tabula;
  })

  .catch(error => {
    console.log(error);
  });
}

fetchData();