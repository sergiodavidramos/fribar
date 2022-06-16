import Link from 'next/link'
import { withRouter } from 'next/router'
const BreadCrumb = (prop) => {
  console.log('ROUTERRR', prop.router.pathname.split('/').length)
  return (
    <div className="gambo-Breadcrumb">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                {prop.router.pathname.split('/').map((r, index) =>
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
                        index ===
                        prop.router.pathname.split('/').length - 1
                          ? 'active'
                          : ''
                      }`}
                      aria-current="page"
                      key={index}
                    >
                      {r}
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
