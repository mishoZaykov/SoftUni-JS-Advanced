function fromJSONtoHTML(dataAsJson) {
  const result = [];
  result.push('<table>');

  const data = JSON.parse(dataAsJson);

  //Colect property names (keys)
  const props = Object.keys(data[0]);
  result.push(`  <tr>${props.map(p => `<th>${p}</th>`).join('')}</tr>`); 

  for(let entry of data){
    result.push(`  <tr>${props.map(p => `<td>${entry[p]}</td>`).join('')}</tr>`); 
  }

  result.push('</table>');

  return result.join('\n');
}
fromJSONtoHTML(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`);