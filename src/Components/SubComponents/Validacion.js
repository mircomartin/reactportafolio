import {
	expresiones,
	errores,
} from './Data';
   
export const validacion = (formvalues, setError) => {

    const { nombre, email, asunto, mensaje } = formvalues;

    if (!nombre) {
        setError(errores.erroresNombreUno);
        return;
    } else if (!expresiones.nombre.test(nombre)) {
        setError(errores.erroresNombreDos);
        return;
    }

    if (!email) {
        setError(errores.erroresEmailUno);
        return;
    } else if (!expresiones.correo.test(email)) {
        setError(errores.erroresEmailDos);
        return;
    }

    if (!asunto) {
        setError(errores.erroresAsuntoUno);
        return;
    }

    if (!mensaje) {
        setError(errores.erroresMensajeUno);
        return;
    }
}
