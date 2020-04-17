
//Insertar en la base de datos la info captuada en el formulario de index
let insert = () => {
  let txtName = document.getElementById("txtName").value;
  let txtUrl = document.getElementById("txtUrl").value;
  let txtDesc = document.getElementById("txtDesc").value;

  if (validateFields(txtName, txtUrl)) {

    params = {
      name: txtName,
      url: txtUrl,
      description: txtDesc,
    };

    axios.post("http://localhost:3001/pages", params).then((response) => {});
    alert("Url registrada");
    txtName = document.getElementById("txtName").value = "";
    txtUrl = document.getElementById("txtUrl").value = "";
    txtDesc = document.getElementById("txtDesc").value = "";

  } else alert("El nombre y la url son obligatorias");
  
};

//Validar campos
let validateFields = (name, url) => {return name != "" && url != ""};




//Obtener los datos y mostrarlos en la tabla de index
var data = [];
let loadInfo = () => {
  axios.get("http://localhost:3001/pages").then(async (response) => {
    table = await response.data.info;
    console.log(table);
    let list = document.getElementById("listUrl");
    list.innerHTML = "";
    for (let i = 0; i < table.length; i++) {
      data += "<tr>";
      data += `<td>${table[i].id}</td>`;
      data += `<td>${table[i].name}</td>`;
      data += `<td>${table[i].url} </td>`;
      data += `<td>${table[i].description} </td>`;
      data += "</tr>";
    }
    
    list.innerHTML = data;
    list.style.visibility = "visible";
  });
};



