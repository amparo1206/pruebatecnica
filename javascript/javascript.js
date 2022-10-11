const API_URL = "https://api.enterticket.es/eventos?token=73018268287b38f3dab312979cf5d5e8f52261e34cb976265b08ad8a979bbdb7&limite=9999"

const ul = document.getElementById('app'),
url = 'https://api.enterticket.es/eventos?token=73018268287b38f3dab312979cf5d5e8f52261e34cb976265b08ad8a979bbdb7&limite=9999';

  const createNode = (element) => { return document.createElement(element); }
  const append = (parent, el) => { return parent.appendChild(el); }

  fetch(url)
  .then((response) => { return response.json(); })
  .then( data => {
    let concerts = data;
    console.log(concerts); 
    return concerts.map( concert => { 
      let li = createNode('li'), 
          span = createNode('span');
      span.innerHTML = `${concert.info.nombre}`;  
      append(li, span);
      append(ul, li);
    });
  })
  .catch( error => { console.log(error); })
  