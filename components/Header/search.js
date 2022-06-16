import { useState, useMemo, useRef } from 'react'
import { createAutocomplete } from '@algolia/autocomplete-core'
import { API_URL } from '../Config'
import Link from 'next/link'
import GetImg from '../GetImg'

const AutocompleteItems = ({ name, img, precioVenta, _id }) => {
  return (
    <li>
      <Link href={`/producto/${_id}`}>
        <a className="nav-link new_item" style={{ display: 'flex' }}>
          <img
            src={GetImg(img[0], `${API_URL}/upload/producto`)}
            alt={name}
            className="w-12 h-12 object-contain"
            style={{
              width: '20%',
              height: '20%',
              contentFlit: 'contain',
            }}
          />
          <div>
            <h3 className="text-sm font-semibold">{name}</h3>
            <p className="text-xs text-gray-600">
              Precio: {precioVenta} Bs
            </p>
          </div>
        </a>
      </Link>
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
        <form {...formProps} ref={formRef} className="stiloForm">
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
                className="ui fluid selection dropdown stiloPanel"
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
        .stiloForm {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }
        .stiloDiv {
          display: flex;
          position: relative;
        }
        .stiloPanel {
          position: absolute;
        }
        .itemsStile:hover {
          color: #ca6767;
        }
        .itemsStile {
          flex: ga;
        }
      `}</style>
    </div>
  )
}
