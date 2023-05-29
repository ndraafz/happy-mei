const urlParams = new URLSearchParams(location.search);

const obj = {
  to: 'Code',
  from: 'Beautifulcode'
}

for (const [key, value] of urlParams) {
  if(value.length > 0) obj[key] = value;
}

const toName = document.getElementById("to");
toName.textContent = obj["to"];

const fromName = document.getElementById("from");
fromName.textContent = obj["from"];
