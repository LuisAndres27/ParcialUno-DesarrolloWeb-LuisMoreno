document.addEventListener('DOMContentLoaded', function() {
    const montoCuentaInput = document.getElementById('monto-cuenta');
    const porcentajePropinaInput = document.getElementById('porcentaje-propina');
    const calcularBtn = document.getElementById('calcular');
    const propinaSpan = document.getElementById('propina');
    const totalSpan = document.getElementById('total');
    const resultadoPropinaDiv = document.getElementById('resultado-propina');

    calcularBtn.addEventListener('click', calcularPropina);

    function calcularPropina() {
        const montoCuenta = parseFloat(montoCuentaInput.value);
        const porcentajePropina = parseFloat(porcentajePropinaInput.value);

        if (isNaN(montoCuenta) || isNaN(porcentajePropina) || montoCuenta <= 0) {
            alert('Por favor ingrese valores válidos');
            return;
        }

        let propina = montoCuenta * (porcentajePropina / 100);
        
        // Verificar propina mínima de Q5
        if (propina < 5 && montoCuenta >= 2) {
            alert('El monto mínimo de propina es Q5. Se ajustará automáticamente.');
            propina = 5;
        }
        
        // Verificar si el monto es menor a Q2
        if (montoCuenta < 2) {
            alert('El monto de la cuenta es muy bajo (menor a Q2). Considere dejar una propina adecuada.');
        }

        const total = montoCuenta + propina;

        // Mostrar resultados con formato de moneda
        propinaSpan.textContent = `Q${propina.toFixed(2)}`;
        totalSpan.textContent = `Q${total.toFixed(2)}`;

        // Cambiar color según el monto de propina
        resultadoPropinaDiv.classList.remove('bajo', 'medio', 'alto');
        
        if (propina < 10) {
            resultadoPropinaDiv.classList.add('bajo');
        } else if (propina >= 10 && propina < 20) {
            resultadoPropinaDiv.classList.add('medio');
        } else {
            resultadoPropinaDiv.classList.add('alto');
        }
    }
});