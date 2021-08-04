function createXhr(method, url, cb, data=null) {

  const xhr = new XMLHttpRequest();
  
  xhr.open(method, url);
  xhr.send();
  
  xhr.onreadystatechange = verificaResposta;
  
  function verificaResposta() {
    if (xhr.readyState == 4) {
      const postJson = JSON.parse(xhr.responseText);
      
      const table = createTable();
      
      const tbody = cb(postJson);

      table.appendChild(tbody);
      document.body.appendChild(table);
    }
  }
}

function createTable() {
  const table = document.createElement("table");
  const tableHead = document.createElement("thead");
  const headerTr = document.createElement("tr");
  const headerTitle = document.createElement("th");
  headerTitle.textContent = "Titulo do post";
  
  const headerText = document.createElement("th");
  headerText.textContent = "Texto";
  
  headerTr.appendChild(headerTitle);
  headerTr.appendChild(headerText);
  
  tableHead.appendChild(headerTr);
  
  table.appendChild(tableHead);

  return table;
}