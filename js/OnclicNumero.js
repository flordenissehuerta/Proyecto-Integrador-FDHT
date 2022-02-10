var contar = 0;


function EventoClicImagen(p_imagen)
{
    var NumSeleccionado = p_imagen.id;
    var NumBuscado=p_imagen.attributes.custom.value;

    if (NumSeleccionado != NumBuscado)
    {
        alert("Diferente: " + NumSeleccionado + ", " + NumBuscado);
    }
    else
    {
        alert("Iguales: " + NumSeleccionado + ", " + NumBuscado);
        
    }

}