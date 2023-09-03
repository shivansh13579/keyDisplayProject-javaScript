const insertId = document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
    console.log('ram');
    insertId.innerHTML = `
    <div className="color">
    <table>
    <tr>
      <th>key</th>
      <th>keyCode</th>
      <th>code</th>
    </tr>
    <tr>
      <td>Alfreds ${e.key === ' ' ? "space":e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table>
    </div>
    `
})