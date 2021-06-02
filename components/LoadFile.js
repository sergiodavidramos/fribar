import loadjs from 'loadjs'
export const LoadFile = () =>
  loadjs('/js/jquery-3.3.1.min.js', () => {
    loadjs('/vendor/bootstrap/js/bootstrap.bundle.min.js', () => {
      loadjs('/vendor/OwlCarousel/owl.carousel.js', () => {
        loadjs('/vendor/semantic/semantic.min.js', () => {
          loadjs('/js/jquery.countdown.min.js', () => {
            loadjs('/js/custom.js', () => {
              loadjs('/js/product.thumbnail.slider.js', () => {
                loadjs('/js/offset_overlay.js', () => {})
              })
            })
          })
        })
      })
    })
  })
