window.addEventListener('load', () => {
    const boton = document.getElementById("btnConvertir");

    boton.addEventListener("click", Convertir);

    function Convertir() {
        let celsius = document.getElementById("Celsius").value;

        if (celsius.trim() === "" || isNaN(celsius)) {
            alert("Debe ingresar una temperatura válida.");
            return;
        }

        celsius = Number(celsius);

        const fahrenheit = (celsius * 9 / 5) + 32;
        const kelvin = celsius + 273.15;

        // Obtener el contenedor
        const resultado = document.getElementById("resultado");

        // Crear elementos HTML
        const tarjeta = document.createElement("div");
        const titulo = document.createElement("h4");
        const gradosFahrenheit = document.createElement("p");
        const gradosKelvin = document.createElement("p");
        const numeroFahrenheit = document.createElement("span");
        const numeroKelvin = document.createElement("span");

        // Clases Bootstrap
        tarjeta.className = "card shadow-sm border-0 p-4 mx-auto";
        tarjeta.style.maxWidth = "450px";
        titulo.className = "card-title text-center text-primary mb-4";
        gradosFahrenheit.className = "alert alert-info mb-3";
        gradosKelvin.className = "alert alert-success mb-0";
        numeroFahrenheit.className = "fw-bold";
        numeroKelvin.className = "fw-bold";

        // Agregar texto a los elementos h4 y p
        titulo.textContent = "Resultados de la conversión";
        gradosFahrenheit.textContent = "Grados Fahrenheit: ";
        gradosKelvin.textContent = "Grados Kelvin: ";

        // Agregar valor a los elementos span
        numeroFahrenheit.textContent = fahrenheit;
        numeroKelvin.textContent = kelvin;

        // Organizar los elementos
        gradosFahrenheit.append(numeroFahrenheit);
        gradosKelvin.append(numeroKelvin);

        tarjeta.append(titulo);
        tarjeta.append(gradosFahrenheit);
        tarjeta.append(gradosKelvin);

        // Mostrar resultados sin duplicarlos
        resultado.replaceChildren(tarjeta);
    }
})