function fetchData() {
  // iegust datus no json
  fetch("./1.table.json")
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
            <td>${persona.cik_plaukta_gramatas}</td>
            <td>${persona.kurs_plaukts}</td> 
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