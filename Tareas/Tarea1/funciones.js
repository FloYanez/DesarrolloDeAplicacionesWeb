// Inicio y Término
{
    function twoDigits(number){
        if (number < 10){
            return "0" + number;
        }else{
            return number;
        }
    }
    let inicio = new Date();
    let anho = inicio.getFullYear();
    let mes = inicio.getMonth() + 1;
    let dia = inicio.getDate();
    let hora = inicio.getHours();
    let horaTermino = (hora + 3)%24;
    let minuto = inicio.getMinutes();

    document.getElementById('inicio').value = anho + "-" + twoDigits(mes) + "-" + twoDigits(dia) + " " + twoDigits(hora) + ":" + twoDigits(minuto);
    document.getElementById('termino').value = anho + "-" + twoDigits(mes) + "-" + twoDigits(dia) + " " + twoDigits(horaTermino) + ":" + twoDigits(minuto);
}

// Fotos
let n = 1;
    function addPhoto(){
        if (n<5){
            n++;
            document.getElementById("fotos").insertAdjacentHTML('beforeend', '<input type="file" id="foto'+ n + '"><br>');
            if (n === 5){
                document.getElementById("agregar").remove();
            }
        }
    }


// Confirmación
{
    // Get the modal
    let modal = document.getElementById("myModal");

    // Get the button that opens the modal
    let btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];
    let back = document.getElementById("close");

    // When the user clicks the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    };


    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    };
    back.onclick = function () {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}

// Validar Formulario

    function validateForm() {
        let errores ="Su formulario falló en:\n";

        // Donde
        let region = document.getElementById("regiones").value;
        let comuna = document.getElementById("comunas").value;
        let sector = document.getElementById("sector").value;

        let regiones = {
			"Arica y Parinacota" : ["Arica", "Camarones", "Putre", "General Lagos"],
            "Tarapacá" : ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"],
			"Antofagasta" : ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"],
			"Atacama" : ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"],
			"Coquimbo" : ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"],
			"Valparaíso" : ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"],
			"Región del Libertador Gral. Bernardo O’Higgins" : ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"],
			"Región del Maule" : ["Talca", "ConsVtución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "ReVro", "San Javier", "Villa Alegre", "Yerbas Buenas"],
			"Región del Biobío" : ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío", "Chillán", "Bulnes", "Cobquecura", "Coelemu", "Coihueco", "Chillán Viejo", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"],
			"Región de la Araucanía": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria", ],
			"Región de Los Ríos" : ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"],
			"Región de Los Lagos" : ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "FruVllar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"],
			"Región Aisén del Gral. Carlos Ibáñez del Campo" : ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"],
			"Región de Magallanes y de la Antártica Chilena" : ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "AntárVca", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"],
			"Región Metropolitana de Santiago" : ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "TilVl", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]
        };

        if(!(region in regiones)){
          errores += "Región\n";
        }

        if(!regiones[region].includes(comuna)){
          errores += "Comuna\n";
        }

        if(sector > 100){
          errores += "Sector\n";
        }

        // Quien
        let nombre = document.getElementById("nombre").value;
        let email = document.getElementById("email").value;
        let celular = document.getElementById("celular").value;
        let twitter = document.getElementById("twitter").value;
        let instagram = document.getElementById("instagram").value;
        let facebook = document.getElementById("facebook").value;
        let tiktok = document.getElementById("tiktok").value;
        let youtube = document.getElementById("youtube").value;

        let nombreRegex = /^[a-zA-z ]*$/;
        if(nombre.length > 200 || !nombreRegex.test(nombre)){
          errores += "Nombre\n";
        }

        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!emailRegex.test(email)){
          errores += "Email\n";
        }

        let celularRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
        if(!celularRegex.test(celular) && celular.length>0){
          errores += "Celular\n";
        }

        // Donde y Qué
        let inicio = document.getElementById("inicio").value;
        let termino = document.getElementById("termino").value;
        let descripcion = document.getElementById("descripcion").value;
        let tipo = document.getElementById("tipo").value;
        for (i=1; i<=n; i++){
            let foto = document.getElementById("foto"+i);
            if (foto.files.length == 0 || !foto.value.includes(".jpg") && !foto.value.includes(".png")){
                errores += "Foto "+ i +"\n";
            }
        }

        let fechaRegex = /^([0-9]{4})-([0-1][0-9])-([0-3][0-9])\s([0-1][0-9]|[2][0-3]):([0-5][0-9])$/;
        if(!fechaRegex.test(inicio)){
          errores += "Fecha y hora de inicio\n";
        }
        if(!fechaRegex.test(termino)){
          errores += "Fecha y hora de término\n";
        }
        let tipos = ["Al Paso", "Alemana", "Árabe","Argentina", "Asiática", "Australiana", "Brasileña", "Café y Snacks",
            "Carnes", "Casera", "Chilena", "China", "Cocina de Autor", "Comida Rápida", "Completos", "Coreana", "Cubana",
            "Española", "Exótica", "Francesa", "Gringa", "Hamburguesa", "Helados", "India", "Internacional", "Italiana",
            "Latinoamericana", "Mediterránea", "Mexicana", "Nikkei", "Parrillada", "Peruana", "Pescados y Mariscos",
            "Picoteos", "Pizzas", "Pollos y Pavos", "Saludable", "Sándwiches", "Suiza", "Japonesa", "Sushi", "Tapas",
            "Thai", "Vegana", "Vegetariana" ];
        if(!tipos.includes(tipo)){
            errores += "Tipo\n";
        }

        if(errores !== "Su formulario falló en:\n"){
            alert(errores);
            return false;
        }else{
            document.getElementById("myBtn").removeAttribute("hidden");
            return false;
        }
    }

