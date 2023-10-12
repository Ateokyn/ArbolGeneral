class Node {
    constructor(value, next) {
      this.value = value;
      this.next = next;
    }
  }

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertNode(value) {
        const newNode = new Node(value, null);
        if (this.head === null) {
            this.head = newNode;
            return
        }
    
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    display() {
        let current = this.head;
        let displayText = "";
        while (current) {
            displayText += current.value + " > ";
            current = current.next;
        }
        displayText += "null";
        return displayText;
    }

    findNode(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    deleteNode(value) {
        if (this.head.value === value) {
            this.head = this.head.next;
            return
        }
        let current = this.head;
        while (current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }
}

const lista = new LinkedList();
const div = document.getElementById("datos");

function function_agregar() {
    const datoInput = document.getElementById("dato");
    const dato = datoInput.value;
    if (dato === "") {
        alert("No se admiten datos vacíos.");
    } else if (isNaN(dato)) {
        alert("Debe escribir un número.");
    } else {
        lista.insertNode(Number(dato));
        datoInput.value = "";
        alert("Dato agregado a la lista.");
        lista.display();
    }
}

function function_mostrar() {
    const displayText = lista.display();
    const datosDiv = document.getElementById("datos");
    datosDiv.innerText = displayText;
}

function function_eliminar() {
    const datoInput = document.getElementById("dato");
    const dato = datoInput.value;
    if (dato === "") {
        alert("No se admiten datos vacíos.");
    } else if (isNaN(dato)) {
        alert("Debe escribir un número.");
    } else {
        lista.deleteNode(Number(dato));
        datoInput.value = "";
        alert("Dato eliminado de la lista.");
        lista.display();
    }
}

function function_buscar() {
    const datoInput = document.getElementById("dato");
    const dato = datoInput.value;
    if (dato === "") {
        alert("No se admiten datos vacíos.");
    } else if (isNaN(dato)) {
        alert("Debe escribir un número.");
    } else {
        const resultado = lista.findNode(Number(dato));
        if (resultado) {
            alert("Dato encontrado en la lista.");
        } else {
            alert("Dato no encontrado en la lista.");
        }
        datoInput.value = "";
        lista.display();
    }
}
