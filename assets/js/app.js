 trello = () => {
    //Añadir Lista
    const addList = document.getElementById("addList");
    const containerAdd = document.getElementById("containerAdd");
   
    //Creo el input
    let input = document.createElement("input");
    input.setAttribute("id", "value");
    input.setAttribute("placeholder", "Introduzca el título de la lista");
    //Creo el botón
    let btn = document.createElement("button");
    let nodoText = document.createTextNode("Añadir Lista");
    btn.appendChild(nodoText);
    btn.setAttribute("id", "btn");
    btn.setAttribute("type", "button");
    //Ingreso al container
    containerAdd.appendChild(btn); 
    containerAdd.appendChild(input);
    addList.appendChild(containerAdd);
    containerAdd.style.background = "#E2E4E6";


    //Llamo al botón azul +Añadir lista que ya está creado en HTML
    const botonList = document.getElementById('btnList');
    //Escondo el boton Añadir una tarjeta cuando se hace click
    botonList.style.display = "none";


        //Creo el botón cerrar de Añadir una Lista
        let cerrar = document.createElement("span");
        let iconoCerrar = document.createElement("i");
        cerrar.classList.add('fa');
        iconoCerrar.classList.add('fa-times');
        cerrar.appendChild(iconoCerrar);
        containerAdd.appendChild(cerrar);

        //función cerrar de Añadir una Lista
        cerrar.addEventListener("click", () => {
        btn.style.display = "none";
        botonList.style.display = "inline-block";
        input.style.display = "none";
        containerAdd.style.background = "none";
        iconoCerrar.style.display = "none";
        cerrar.style.display = "none";
    });


    //Creo el tablero de Items
        btn.addEventListener("click", () => {
        let title = input.value; 
        input.value = ""; 
        if (title !== "") {
            let newBoard = document.createElement("form");
            let containerTitle = document.createElement("h4");
            let textTitle = document.createTextNode(title);
            //ingreso al container 
            containerTitle.appendChild(textTitle);
            newBoard.appendChild(containerTitle);
            newBoard.classList.add("new-board");
            //Llamo a board creado en HTML
            const boards = document.getElementById("board");
            boards.insertBefore(newBoard, addList);

            // Determinar una ID que corresponda a la ubicación del elemento padre
            let myId = document.getElementsByTagName("form").length - 1;
            newBoard.setAttribute("id", myId);

            // Creo el input
            let newInput = document.createElement("input");
            newInput.setAttribute("placeholder", "Añadir una tarjeta...");
            newInput.setAttribute("id", "tarjeta");
            newBoard.appendChild(newInput);

            //nuevos inputs
            newInput.addEventListener("click", function () {
            event.preventDefault();
            this.style.display = "none";
            let textArea = document.createElement("textarea");
            newBoard.appendChild(textArea);

            //Creo el botón de añadir
            let btn1 = document.createElement("button");
            btn1.setAttribute("id", "btn1");
            btn1.setAttribute("type", "button");
            let nodoText1 = document.createTextNode("Añadir");
            btn1.appendChild(nodoText1);
            newBoard.appendChild(btn1);


                //Añadir lista de item
                btn1.addEventListener("click", () => {
                let list = textArea.value; 
                textArea.value = "";
                    if (list !== "") {
                        let parrafo1 = document.createElement("p"); 
                        parrafo1.classList.add("item");
                        let textNuevo = document.createTextNode(list); 
                        //botón en el container
                        newBoard.appendChild(parrafo1);
                        //input en el container
                        parrafo1.appendChild(textNuevo); 
                        newBoard.insertBefore(parrafo1, textArea);
                        textArea.style.display = "none";
                        btn1.style.display = "none";
                        spanCerrar.style.display = "none";
                        newInput.style.display = "inline-block";
                        newBoard.insertBefore(parrafo1, newInput);
                    
                    };
                });

                    //Creo el botón cerrar Añadir una tarjeta
                    let spanCerrar = document.createElement("span");
                    let iconoCerrar = document.createElement("i");
                    spanCerrar.classList.add('fa');
                    iconoCerrar.classList.add('fa-times');
                    spanCerrar.appendChild(iconoCerrar);
                    newBoard.appendChild(spanCerrar);

                    //Función cerrar Añadir una tarjeta
                    spanCerrar.addEventListener("click", () => {
                    btn1.style.display = "none";
                    spanCerrar.style.display = "none";
                    textArea.style.display = "none";
                    newInput.style.display = "inline-block";
                    newBoard.insertBefore(newInput, textArea);
                });
            });
        };
    });
}
