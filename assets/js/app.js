function trello() {
    //Creo el input y boton de Añadir Lista
    var addList = document.getElementById("addList");
    var containerAdd = document.getElementById("containerAdd");
    var btn = document.createElement("button");
    var input = document.createElement("input");
    var nodoText = document.createTextNode("Añadir Lista");

    input.setAttribute("id", "value");
    input.setAttribute("placeholder", "Introduzca el título de la lista");

    btn.appendChild(nodoText); //estoy guardando el texto en el boton
    containerAdd.appendChild(btn); //botón en el container
    containerAdd.appendChild(input); //input en el container
    addList.appendChild(containerAdd);
    containerAdd.style.background = "#E2E4E6";


    //Llamo al botón azul +Añadir lista que ya está creado
    var botonList = document.getElementById('btnList');
    //Escondo el boton Añadir una tarjeta cuando se hace click
    botonList.style.display = "none";


    //Creo el botón cerrar de Añadir Lista
    var cerrar = document.createElement("span");
    var iconoCerrar = document.createElement("i");
    cerrar.classList.add('fa');
    iconoCerrar.classList.add('fa-times');
    cerrar.appendChild(iconoCerrar);
    containerAdd.appendChild(cerrar);

       cerrar.addEventListener("click", function () {
        btn.style.display = "none";
        botonList.style.display = "inline-block";
        input.style.display = "none";
        containerAdd.style.background = "none";
        iconoCerrar.style.display = "none";
        cerrar.style.display ="none";

    });


    //Creo el tablero
    btn.addEventListener("click", function () {
        var title = input.value; //quiero rescatar el valor del input que lleva dentro el valor-todo lo que rescato de input
        input.value = ""; //limpiando placeholder

        if (title !== "") {
            var newBoard = document.createElement("form");
            var containerTitle = document.createElement("h3");
            var textTitle = document.createTextNode(title);
            containerTitle.appendChild(textTitle);
            newBoard.appendChild(containerTitle);
            newBoard.classList.add("new-board");
            boards = document.getElementById("board");
            boards.insertBefore(newBoard, addList);

            // Determinar una ID que corresponda a la ubicación del elemento padre
            var myId = document.getElementsByTagName("form").length - 1;
            newBoard.setAttribute("id", myId);

            // Aquí se creará el input
            var newInput = document.createElement("input");
            newInput.setAttribute("placeholder", "Añadir una tarjeta...");
            newInput.setAttribute("id", "tarjeta");
            newBoard.appendChild(newInput);

            //nuevos inputs
            newInput.addEventListener("click", function () {
                event.preventDefault();

                // Que desaparezca el input. Se usa this para referirse a este elemento
                this.style.display = "none";

                var textArea = document.createElement("textarea");
                newBoard.appendChild(textArea);


                // Aquí se creará el botón de añadir
                var btn1 = document.createElement("boton");
                btn1.setAttribute("id", "btn1");
                var nodoText1 = document.createTextNode("Añadir");
                btn1.appendChild(nodoText1);
                newBoard.appendChild(btn1);
                

                //Añadir lista de item
                btn1.addEventListener("click", function () {
                 var list = textArea.value; //quiero rescatar el valor del input que lleva dentro el valor-todo lo que rescato de input
                   textArea.value = ""; //limpiando placeholder(lugar donde se escribe)
                    if (list !== "") {
                        var parrafo1 = document.createElement("p"); //creando elemento p
                        parrafo1.classList.add("item");
                        var textNuevo = document.createTextNode(list); //creando nodo de texto list, no va con comilla
                        
                       newBoard.appendChild(parrafo1); //parrafo en el container
                       parrafo1.appendChild(textNuevo); //input en el container
                       newBoard.insertBefore(parrafo1, textArea);
                       textArea.style.display ="none";
                       btn1.style.display ="none";
                       spanCerrar.style.display = "none";
                       newInput.style.display ="inline-block";
                       newBoard.insertBefore(parrafo1, newInput);
                       

                    };
                });

                //Creo el botón cerrar Añadir una tarjeta
                var spanCerrar = document.createElement("span");
                var iconoCerrar = document.createElement("i");
                spanCerrar.classList.add('fa');
                iconoCerrar.classList.add('fa-times');
                spanCerrar.appendChild(iconoCerrar);
                newBoard.appendChild(spanCerrar);

               spanCerrar.addEventListener("click", function () {
                 btn1.style.display = "none";
                 spanCerrar.style.display = "none";
                 textArea.style.display = "none";
                 newInput.style.display = "inline-block";
                // newBoard.insertBefore(newInput, textArea);
                });
                
                
            });
        };
    });
}

/*
//Al apretar el boton se desplegue otra lista desplegable
 btn.addEventListener("click", function(){//el escuchador del boton que se despliega al utilizarlo declarar la funcion dentro del boton
 var list=input.value;//quiero rescatar el valor del input que lleva dentro el valor-todo lo que rescato de input
  input.value = " ";//limpiando placeholder(lugar donde se escribe)
 var contiene=document.getElementById("contiene");//llamando al div contiene
 var titulo =document.createElement("h4");//creando elemento p
 var textNuevo=document.createTextNode(list);//creando nodo de texto list, no va con comilla
 var add= document.createElement("a");//creando a para añaddir tarjeta
 add.setAttribute("href", "#");//le damos atributos a a
 var textAdd =document.createTextNode("Añadir una tarjeta...")//creando el texto añadir tarjeta
 
 titulo.appendChild(textNuevo);//palabras ingresado en el parrafo
 contiene.appendChild(titulo);//parrafo hijo de contiene
 add.appendChild(textAdd);
 contiene.appendChild(add);
 contiene.style.background = "#E2E4E6";
 

add.addEventListener("click", function(){
  var title=this.parentNode;
  var input1 = document.createElement("input");
  var btn1 = document.createElement("button");
  btn1.setAttribute("id", "btn1");
  var nodoText1 = document.createTextNode("Añadir");
  //Le entrego atributos al input
  input1.setAttribute("id", "valor1"); //id="valor1"
  input1.setAttribute("placeholder", "lista1");
  //Uno las hijos con el elemento padre container
  btn1.appendChild(nodoText1); //estoy guardando el texto en el boton
  contiene.appendChild(btn1); //botón en el container
  contiene.appendChild(input1); //input en el container


  btn1.addEventListener("click", function (){
  var list = input1.value; //quiero rescatar el valor del input que lleva dentro el valor-todo lo que rescato de input
  input1.value = " "; //limpiando placeholder(lugar donde se escribe)
  var parrafo1 = document.createElement("p"); //creando elemento p
  parrafo1.classList.add("item");
  var textNuevo = document.createTextNode(list); //creando nodo de texto list, no va con comilla
  
  contiene.appendChild(parrafo1); //botón en el container
  parrafo1.appendChild(textNuevo); //input en el container
  input1.style.display ="none";
  btn1.style.display = "none";
  /*add.insertBefore(parrafo1,textAdd);
  });

  add.addEventListener("click", function () {
    var title = this.parentNode;
    var textarea = document.createElement("textarea");
    var add= document.createElement("a");//creando a para añaddir tarjeta
    add.setAttribute("href", "#");//le damos atributos a a
    var textAdd = document.createTextNode("Añadir una letra...") //creando el texto añador tarjeta
    add.appendChild(textAdd);
    title.appendChild(textarea);
    title.appendChild(add);
       
  });

  });
      function cerrar() {
      container.removeChild(btn);
      container.removeChild(input);
      container.style.background = "none";
    
    }
  */