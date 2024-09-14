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
  token,
}) => {
  let red = false
  if (nombreDireccion) {
    red = `https://www.fribar.bo/redireccionar?datos=${tipoPago}_${infoPago}_${sucursalAsignado}_${tiempoEstimado}_${idDireccion}_${nombreDireccion.replace(
      / /g,
      '-'
    )}_${nombreCiudad}_${refDireccion.replace(
      / /g,
      '-'
    )}_${costoEnvio}_${token}`
  }
  return (
    red && (
      <iframe
        src={`${url}?entidad=360&ref=${infoPago}&red=${red}`}
        scrolling="auto"
        width="100%"
        height="500px"
        border="0"
        target="_parent"
      ></iframe>
    )
  )
}

export default IframePagosNet
