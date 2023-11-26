import { useContext, useRef, useMemo, useState } from 'react'
import { createAutocomplete } from '@algolia/autocomplete-core'
import UserContext from '../UserContext'
import Link from 'next/link'
import GetImg from '../GetImg'
import { API_URL } from '../Config'
import Router from 'next/router'
export default (props) => {
  const [autoCompleteState, setAutoCompleteState] = useState({
    collections: [],
  })

  const { modoNoche, categorias } = useContext(UserContext)

  const autoComplete = useMemo(
    () =>
      createAutocomplete({
        placeholder: 'Busca tus productos',
        onStateChange: ({ state }) => setAutoCompleteState(state),
        getSources: () => [
          {
            sourceId: 'productosAPI',
            getItems: ({ query }) => {
              if (!!query) {
                return fetch(`${API_URL}/productos/buscar/${query}`)
                  .then((res) => res.json())
                  .then((datos) => {
                    return datos.body
                  })
                  .catch((er) => alert(er))
              }
            },
          },
        ],
        ...props,
      }),
    [props]
  )

  const formRef = useRef(null)
  const inputRef = useRef(null)

  const formProps = autoComplete.getFormProps({
    inputElement: inputRef.current,
  })
  const inputProps = autoComplete.getInputProps({
    inputElement: inputRef.current,
  })
  return (
    // <!-- Search Model Start-->
    <div
      id="search_model"
      className="header-cate-model main-gambo-model modal fade"
      tabIndex="-1"
      role="dialog"
      aria-modal="false"
    >
      <div className="modal-dialog search-ground-area" role="document">
        <div className="category-area-inner">
          <div className="modal-header">
            <button
              type="button"
              className="close btn-close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i className="uil uil-multiply"></i>
            </button>
          </div>
          <div className="category-model-content modal-content">
            <div className="search-header">
              <form {...formProps} ref={formRef}>
                <input type="search" ref={inputRef} {...inputProps} />
                <button type="submit">
                  <i className="uil uil-search"></i>
                </button>
              </form>
            </div>
            <div className={`search-by-cat `}>
              {autoCompleteState.collections.length > 0
                ? autoCompleteState.collections[0].items.map(
                    (pro, index) => (
                      <Link
                        href={{
                          pathname: '/productos/[nombre]',
                          query: {
                            nombre: pro.name
                              .toLowerCase()
                              .replace(/ /g, '-'),
                          },
                        }}
                        key={index}
                      >
                        <a
                          onClick={() =>
                            Router.push({
                              pathname: '/productos/[nombre]',
                              query: {
                                nombre: pro.name
                                  .toLowerCase()
                                  .replace(/ /g, '-'),
                              },
                            })
                          }
                          className="single-cat"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <div className="icon">
                            <img
                              src={GetImg(
                                pro.img[0],
                                `${API_URL}/upload/producto`
                              )}
                              alt={pro.name}
                            />
                          </div>
                          <div
                            className="text"
                            style={modoNoche ? { color: '#FFF' } : {}}
                          >
                            {pro.name}
                          </div>
                        </a>
                      </Link>
                    )
                  )
                : categorias.length > 0
                ? categorias.map((cate, index) => (
                    <Link
                      href={{
                        pathname: '/[nombreCategoria]',
                        query: {
                          nombreCategoria: cate.name
                            .toLowerCase()
                            .replace(/ /g, '-'),
                        },
                      }}
                      key={index}
                    >
                      <a
                        className="single-cat"
                        onClick={() =>
                          Router.push({
                            pathname: '/[nombreCategoria]',
                            query: {
                              nombreCategoria: cate.name
                                .toLowerCase()
                                .replace(/ /g, '-'),
                            },
                          })
                        }
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <div className="icon">
                          <img
                            src={GetImg(
                              cate.img,
                              `${API_URL}/upload/categoria`
                            )}
                            alt={cate.description}
                          />
                        </div>
                        <div
                          className="text"
                          style={modoNoche ? { color: '#FFF' } : {}}
                        >
                          {cate.name}
                        </div>
                      </a>
                    </Link>
                  ))
                : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  // {/* <-- Search Model End--> */}
}
