import { useState, useMemo, useRef } from 'react'
import { createAutocomplete } from '@algolia/autocomplete-core'
import { API_URL } from '../Config'
import Link from 'next/link'
import GetImg from '../GetImg'

const AutocompleteItems = ({ name, img, precioVenta, stock }) => {
  return (
    <li>
      <Link
        href={{
          pathname: '/productos/[nombre]',
          query: {
            nombre: name.toLowerCase().replace(/ /g, '-'),
          },
        }}
      >
        <a className="filaClass">
          <img
            src={GetImg(img[0], `${API_URL}/upload/producto`)}
            alt={name}
            className="imgClass"
          />
          <div>
            <h3 className="h3Class">{name}</h3>
            <p className="parrafoClass">Precio: {precioVenta} Bs</p>
            <p className="parrafoClass">{`${
              stock > 0 ? 'Disponible en stock' : 'No disponible'
            }`}</p>
          </div>
        </a>
      </Link>
      <style jsx>{`
        .filaClass {
          display: flex;
          padding: 1rem;
          gap: 1rem;
        }
        .filaClass:hover {
          background-color: #e6d2d2;
        }
        .imgClass {
          object-fit: contain;
          width: 5rem;
          height: 5rem;
        }
        .h3Class {
          color: #dc2c28 !important;
          font-size: 1rem;
          line-height: 1.25rem;
          font-weight: 600;
        }
        .parrafoClass {
          padding: 4px;
          margin: 0px;
          font-size: 1rem;
          line-height: 1rem;
          color: #4b5563;
        }
      `}</style>
    </li>
  )
}
export default function Search(props) {
  const [autoCompleteState, setAutoCompleteState] = useState({
    collections: [],
    isOpen: false,
  })
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
  const panelRef = useRef(null)

  const formProps = autoComplete.getFormProps({
    inputElement: inputRef.current,
  })
  const inputProps = autoComplete.getInputProps({
    inputElement: inputRef.current,
  })

  return (
    <div className="search120">
      <div className="ui search">
        <form {...formProps} ref={formRef} className="formClass">
          <div className="ui left icon input swdh10 stiloDiv">
            <input
              ref={inputRef}
              className="prompt srch10"
              type="text"
              {...inputProps}
            />
            <i className="uil uil-search-alt icon icon1"></i>

            {autoCompleteState.isOpen && (
              <div
                className="stiloPanel"
                ref={panelRef}
                {...autoComplete.getPanelProps()}
              >
                {autoCompleteState.collections.map((collection, index) => {
                  const { items } = collection
                  return (
                    <section key={`section-${index}`}>
                      {items.length > 0 && (
                        <ul {...autoComplete.getListProps()}>
                          {items.map((item) => (
                            <AutocompleteItems key={item._id} {...item} />
                          ))}
                        </ul>
                      )}
                    </section>
                  )
                })}
              </div>
            )}
          </div>
        </form>
      </div>
      <style jsx>{`
        .formClass {
          display: flex;
          justify-content: center;
        }
        .stiloDiv {
          display: flex;
          position: relative;
        }
        .inputClass {
          flex: 1 1 0%;
        }
        .stiloPanel {
          overflow: hidden;
          position: absolute;
          top: 0;
          width: 100%;
          left: 0;
          z-index: 10000 !important;
          margin-top: 4rem;
          border-radius: 0.5rem;
          border-width: 1px;
          border-color: #f3f4f6;
          background-color: #ffffff;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </div>
  )
}
