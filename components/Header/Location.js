export default ({ id, nombre, lat, lon, setCiudad }) => {
  const handlerSetCiudad = () => {
    setCiudad({ _id: id, nombre, lat, lon })
  }
  return (
    <div className="item channel_item" onClick={handlerSetCiudad}>
      <i className="uil uil-location-point"></i>
      {nombre}
    </div>
  )
}
