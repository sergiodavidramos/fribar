import { useContext, useEffect, useState } from 'react'
import UserContext from '../UserContext'
import GetImg from '../GetImg'
import { API_URL } from '../Config'
import Link from 'next/link'
export default () => {
  const { carrito, cantidades } = useContext(UserContext)
  const [catidadProductos, setCatidadProductos] = useState(0)
  const [total, setTotal] = useState(0)
  const [precioEnvio, setPrecioEnvio] = useState(5)

  //   console.log('CANTIDAD EN EL CARRITO', carrito)
  useEffect(() => {
    // for (let i = 0; i < carrito.length; i++) {
    //   setTotal(total + carrito[i].precioVenta)
    // }
    // console.log('MADO AL CARRTIO', carrito)
    if (carrito) {
      //   console.log('ESTO ES EN EL CARRITO', carrito, cantidades)
    }
  }, [carrito])
  return (
    <div></div>
    // <!-- Cart Sidebar Offset Start-->
    // <div className="bs-canvas bs-canvas-left position-fixed bg-cart h-100">
    //   <div className="bs-canvas-header side-cart-header p-3 ">
    //     <div className="d-inline-block  main-cart-title">
    //       Mi carrito <span>{carrito.length} Productos</span>
    //     </div>
    //     <button
    //       type="button"
    //       className="bs-canvas-close close"
    //       aria-label="Close"
    //     >
    //       <i className="uil uil-multiply"></i>
    //     </button>
    //   </div>
    //   <div className="bs-canvas-body">
    //     <div className="cart-top-total">
    //       <div className="cart-total-dil">
    //         <h4>Fribar MiniMarket</h4>
    //         <span>{total} Bs</span>
    //       </div>
    //       <div className="cart-total-dil pt-2">
    //         <h4>Precio de envio</h4>
    //         <span>5 Bs</span>
    //       </div>
    //     </div>
    //     <div className="side-cart-items">
    //       {carrito.map((producto) => (
    //         <div className="cart-item" key={producto._id}>
    //           <div className="cart-product-img">
    //             <img
    //               src={GetImg(
    //                 producto.img[0],
    //                 `${API_URL}/upload/producto`
    //               )}
    //               alt=""
    //             />
    //             <div className="offer-badge">
    //               {producto.descuent ? producto.descuent : ''}
    //             </div>
    //           </div>
    //           <div className="cart-text">
    //             <h4>{producto.name}</h4>
    //             <div className="cart-radio">
    //               {producto.tipoVenta === 'Unidad' ? (
    //                 ''
    //               ) : (
    //                 <ul className="product-now">
    //                   <li>
    //                     <input type="radio" id="p1" name="product1" />
    //                     <label htmlFor="p1">500g</label>
    //                   </li>
    //                   <li>
    //                     <input type="radio" id="p2" name="product1" />
    //                     <label htmlFor="p2">1kg</label>
    //                   </li>
    //                   <li>
    //                     <input type="radio" id="p3" name="product1" />
    //                     <label htmlFor="p3">2kg</label>
    //                   </li>
    //                   <li>
    //                     <input type="radio" id="p4" name="product1" />
    //                     <label htmlFor="p4">3kg</label>
    //                   </li>
    //                 </ul>
    //               )}
    //             </div>
    //             <div className="qty-group">
    //               <div className="quantity buttons_added">
    //                 <input
    //                   type="button"
    //                   defaultValue="-"
    //                   className="minus minus-btn"
    //                 />
    //                 <input
    //                   type="number"
    //                   step="1"
    //                   name="quantity"
    //                   defaultValue="1"
    //                   className="input-text qty text"
    //                 />
    //                 <input
    //                   type="button"
    //                   defaultValue="+"
    //                   className="plus plus-btn"
    //                 />
    //               </div>
    //               <div className="cart-item-price">
    //                 {producto.precioVenta}
    //                 {/* <span>Bs15</span> */}
    //               </div>
    //             </div>

    //             <button type="button" className="cart-close-btn">
    //               <i className="uil uil-multiply"></i>
    //             </button>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    //   <div className="bs-canvas-footer">
    //     <div className="cart-total-dil saving-total ">
    //       {/* <h4>Total Saving</h4> */}
    //       {/* <span>$11</span> */}
    //     </div>
    //     <div className="main-total-cart">
    //       <h2>Total</h2>
    //       <span>{total + precioEnvio} Bs</span>
    //     </div>
    //     <div className="checkout-cart">
    //       {/* <a href="#" className="promo-code">
    //         Have a promocode?
    //       </a> */}
    //       <Link href="/pago">
    //         <a className="cart-checkout-btn hover-btn">Pasar por caja</a>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    // <!-- Cart Sidebar Offsetl End-->
  )
}
