import loadjs from 'loadjs'
export const LoadFile = () =>
  loadjs(
    [
      '/js/jquery-3.3.1.min.js',
      '/vendor/bootstrap/js/bootstrap.bundle.min.js',
      '/vendor/OwlCarousel/owl.carousel.js',
      '/vendor/semantic/semantic.min.js',
      '/js/jquery.countdown.min.js',
      '/js/custom.js',
      '/js/offset_overlay.js',
      '/js/night-mode.js'
    ],'cargarArchivos'
    // () => {}
  )
