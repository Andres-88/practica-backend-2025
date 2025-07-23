class TicketManager{
    eventos = [];
    static #precioBaseDeGanancia = 0.15;
    static #id = 0;

    constructor () {
    }

    getEventos(){
        console.log(this.eventos);
    }

    agregarEvento(data){
        data.id = TicketManager.#id;    //Se le crea y asigna un id
        TicketManager.#id++;
        if(data.fecha === undefined){   //Si no se le pasa una fecha, por defecto es la fecha de hoy
            data.fecha = new Date().toLocaleDateString();
        } 

        if(data.capacidad === undefined){ ///Si no se le pasa una capacidad, por defecto es 50
            data.capacidad = 50;
        }

        data.precio = data.precio + data.precio * TicketManager.#precioBaseDeGanancia;

        data.participantes = [];

        this.eventos.push(data);
        // console.log(this.eventos);
        
        /*El siguiente código es una buena práctica para evitar que data venga mal etructurado:

        agregarEvento(data) {
            const evento = {
                id: TicketManager.#id++,
                nombre: data.nombre,
                lugar: data.lugar,
                precio: data.precio + data.precio * TicketManager.#precioBaseDeGanancia,
                capacidad: data.capacidad || 50,
                fecha: data.fecha || new Date().toLocaleDateString(),
                participantes: []
            };

            this.eventos.push(evento);
            console.log(this.eventos);
        }

        */
    }

    agregarUsuario(idEvento, idUsuario){
        //Primer versión (No distingue el motivo cuando no puede agregar un usuario)

        // let found = false;
        // for (let evento of this.eventos){
        //     if((idEvento === evento.id) && (!evento.participantes.includes(idUsuario))){
        //         evento.participantes.push(idUsuario);
        //         found = true;
        //     }
        // }
        // if (!found){
        //    console.log('El usuario no se ha podido agregar porque o el evento no existe o el usuario ya estaba agregado al evento con anterioridad');
           
        // }

        //Segunda versión:
        /**El método find;
         * Recorrer el array this.eventos
         * Buscar el primer elemento (objeto) que cumpla la condición e.id === idEvento
         * Si lo encuentra, devuelve ese objeto completo
         * Si no lo encuentra, devuelve undefined
         */
        //Busca el evento por id
        let evento = this.eventos.find(function (e) {
            return e.id === idEvento;
        })

        //Si no se encuentra el evento, find devuelve en evento el valor undefined que es un "falsy"
        if(!evento){
            console.log('Error: El evento con ese ID no existe');
            
            return;
        }

        //Si el vento se encuentra y el ID del usuario está en el arreglo particpantes:
        if(evento.participantes.includes(idUsuario)){
            console.log('Error: el usuario ya está registrado en este evento', evento.nombre);

            return;
        }

        //Si el evento existe y no está incluído el usuario;
        evento.participantes.push(idUsuario);
        console.log('Usuario agregado exitosamente al evento:', evento.nombre);
        

        return;
    }

    ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha){

        //Buscamos el evento del ID indicado
        const eventoEnGira = {...this.eventos.find(function(e){
            return e.id === idEvento;
        })}

        //En caso de no encontrarlo...
        if(!eventoEnGira){
            console.log('El evento que se quiere poner en gira no existe');
            return;
        }

        //En caso que el evento exista:
        eventoEnGira.lugar = nuevaLocalidad;
        eventoEnGira.fecha = nuevaFecha;
        eventoEnGira.participantes = [];
        this.eventos.push(eventoEnGira);
        console.log('El evento', eventoEnGira.nombre,'está está de gira exitosamente');
        return;        
    }

}

const ticket1 = new TicketManager();

ticket1.agregarEvento({
    nombre: 'Black Parade',
    lugar: 'Buenos Aires',
    precio: 150000,
    capacidad: 10000,
    fecha: "30-01-2026"
});

ticket1.agregarEvento({
    nombre: 'Épica',
    lugar: 'Teatro Flores',
    precio: 70000,
    fecha: "21-09-2025"
});

ticket1.agregarUsuario(0, 0);
ticket1.agregarUsuario(1, 0);
ticket1.agregarUsuario(2, 0);
ticket1.agregarUsuario(0, 0);
ticket1.agregarUsuario(0, 1);

ticket1.getEventos();

ticket1.ponerEventoEnGira(0, 'Mendoza', '1-08-2026');

ticket1.getEventos();