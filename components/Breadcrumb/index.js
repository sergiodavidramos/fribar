import Link from 'next/link'
import { withRouter } from 'next/router'

const BreadCrumb = (prop) => {
  const linkActual = prop.router.asPath.split('/')
  let dirigirAlLink = []
  for (let i = 0; i < linkActual.length; i++) {
    if (i === 0) {
      dirigirAlLink.push(linkActual[i])
    } else {
      if (i === 1) dirigirAlLink.push(linkActual[i])
      else {
        dirigirAlLink.push(`${dirigirAlLink[i - 1]}/${linkActual[i]}`)
      }
    }
  }

  return (
    <div className="gambo-Breadcrumb">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                {prop.router.asPath.split('/').map((r, index) =>
                  r === '' ? (
                    <li
                      className="breadcrumb-item"
                      aria-current="page"
                      key={index}
                    >
                      <Link href={'/'}>
                        <a>inicio</a>
                      </Link>
                    </li>
                  ) : (
                    <li
                      className={`breadcrumb-item ${
                        index === prop.router.asPath.split('/').length - 1
                          ? 'active'
                          : ''
                      }`}
                      aria-current="page"
                      key={index}
                    >
                      <Link href={`/${dirigirAlLink[index]}`}>
                        <a
                          style={
                            index ===
                            prop.router.pathname.split('/').length - 1
                              ? { color: '#fff' }
                              : {}
                          }
                        >
                          {r.replace(/-/g, ' ')}
                        </a>
                      </Link>
                    </li>
                  )
                )}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
export default withRouter(BreadCrumb)
