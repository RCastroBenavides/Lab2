async function consultar(num1,n,e,r) {
    try {
        const rta = await fetch('http://jsonplaceholder.typicode.com/posts/1/comments', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!rta.ok) {
            throw new Error('Red error: ' + rta.status);
        }
        const datos = await rta.json();
 //       console.log( rta.status + "---" + JSON.stringify(datos));
		let x2 = document.getElementById("num1").value;
		var cont = 0;
		c1f: for (let x=0 ; x <= datos.length ; x++) {
				for (let c in datos[x]) {
					
					 if ( datos[x].id == x2) {
						 console.log ( c+ "--" +datos[x].id);
						 num1.value = datos[x].id;
						 n.value = datos[x].name;
						 e.value = datos[x].email;
						 r.value = datos[x].body;
						 break c1f;
						 }
				}
		cont = cont + 1;
		
		}
		//alert("contador"+ cont);
			if (cont >= datos.length){
				alert("NO ENCONTRADO ID ");
				num1.value = "";
				n.value = "";
				e.value = "";
				r.value = "";
			}
					 } catch (error) {
console.log('Error no encuentra', error);
    }
}
function getData() {
	num1 = document.getElementById("num1");
	n = document.getElementById("titulo");
	e = document.getElementById("autor");
	r = document.getElementById("res");
	consultar (num1,n,e,r);
	return(true);
}


		