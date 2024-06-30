const IframePagosNet = ({
  infoPago,
  url,
  tipoPago,
  sucursalAsignado,
  tiempoEstimado,
  idDireccion,
  nombreDireccion,
  refDireccion,
  nombreCiudad,
  costoEnvio,
}) => {
  let red = false
  if (nombreDireccion) {
    red = `https://wwww.fribar.bo/redireccionar?datos=${tipoPago}_${infoPago}_${sucursalAsignado}_${tiempoEstimado}_${idDireccion}_${nombreDireccion.replace(
      / /g,
      '-'
    )}_${nombreCiudad}_${refDireccion.replace(/ /g, '-')}_${costoEnvio}`
  }
  return (
    red && (
      <iframe
        src={`${url}?entidad=903&ref=${infoPago}&red=${red}`}
        scrolling="auto"
        width="100%"
        height="500px"
        border="0"
      ></iframe>
    )
  )
}

export default IframePagosNet
