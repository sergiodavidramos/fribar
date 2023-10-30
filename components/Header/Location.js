export default ({ id, nombre, setCiudad }) => {
  const handlerSetCiudad = () => {
    setCiudad({ _id: id, nombre })
  }
  return (
    <div className="item channel_item" onClick={handlerSetCiudad}>
      <i className="uil uil-location-point"></i>
      {nombre}
    </div>
  )
}
