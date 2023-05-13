import {
  FunctionComponent,
  memo,
  ReactNode,
  useId,
  useMemo,
  useState,
} from "react"

const Section: FunctionComponent<{
  children: ReactNode
  className?: string
  id?: string
}> = memo(({ children, className, id }) => {
  return (
    <section
      id={id}
      className={`w-full bg-slate-50 px-6 py-12 md:py-16 ${className}`}
    >
      <div
        className={`m-auto flex max-w-5xl flex-col items-start gap-6 md:p-6`}
      >
        {children}
      </div>
    </section>
  )
})

type Insurance = {
  name: string
  description: string
  siteUrl: string
  type: string
  pros: string[]
}

export const SearchBox: FunctionComponent<{
  data: Insurance[]
  insuranceTypes: string[]
}> = ({ data, insuranceTypes }) => {
  const [search, setSearch] = useState("")
  const [types, setTypes] = useState<string[]>([])
  const inputId = useId()

  const cards = useMemo(() => {
    let _data = data

    if (search.length > 0) {
      _data = _data.filter(
        (insurance) =>
          insurance.name.toLowerCase().includes(search) ||
          insurance.description.toLowerCase().includes(search)
      )
    }

    if (types.length > 0) {
      _data = _data.filter((insurance) => types.includes(insurance.type))
    }

    return _data
  }, [data, search, types])

  return (
    <>
      <Section className="lg:!pb-0" id="seguros">
        <h2>Pesquisar seguros</h2>

        <label htmlFor={inputId} className="relative w-full">
          <div className="absolute bottom-0 left-3 top-0 my-auto h-max w-max">
            <Search />
          </div>

          <input
            id={inputId}
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value ?? "")}
            placeholder="Pesquise seu seguro"
            className={
              "w-full rounded border border-slate-300 bg-slate-50 px-3 py-2 pl-[calc(12px+16px+8px)] transition-colors placeholder:text-slate-400 focus:border-primary-dark focus:outline-none"
            }
          />
        </label>

        <ul className="flex w-full items-center gap-2">
          {insuranceTypes.map((type) => (
            <li key={type}>
              <button
                onClick={() => {
                  if (types.includes(type)) {
                    setTypes((types) => types.filter((_type) => _type !== type))
                  } else {
                    setTypes((types) => [...types, type])
                  }
                }}
                className={`flex shrink-0 items-center gap-1 rounded-full px-2 py-1 transition-colors ${
                  types.includes(type)
                    ? "bg-primary-base text-slate-50"
                    : "border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {type}

                <svg
                  className={types.includes(type) ? "block" : "hidden"}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L12 4M4 4L12 12"
                    stroke="#F1F5F9"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="!pt-0">
        <ul className="flex w-full flex-col gap-2 lg:flex-row lg:gap-8">
          {cards.length === 0 && <h3>Não encontramos nenhum seguro</h3>}

          {cards.map((card) => (
            <li
              key={card.name}
              className="flex w-full flex-col justify-between gap-4 rounded border border-gray-200 bg-gray-100 px-6 py-3 lg:w-[304px]"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-slate-800">{card.name}</h3>
                <p className="text-slate-600">{card.description}</p>
                {card.pros.map((msg) => (
                  <span key={msg}>✅ {msg}</span>
                ))}
              </div>

              <div className="flex w-full items-center gap-2 self-center px-3">
                <a
                  className="w-max rounded-full bg-primary-base px-6 py-3 font-bold text-white transition-colors hover:bg-primary-light"
                  href="https://www.google.com"
                >
                  Contratar
                </a>

                <a
                  href="https://www.youtube.com"
                  className="font-bold text-slate-600 hover:text-slate-500"
                >
                  Visitar Site
                </a>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}

function Search() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="-scale-x-100"
    >
      <path
        d="M14 14L10.5354 10.5353M10.5354 10.5353C11.4731 9.59762 11.9999 8.3258 11.9999 6.99967C11.9999 5.67354 11.4731 4.40172 10.5354 3.464C9.59765 2.52629 8.32583 1.99948 6.9997 1.99948C5.67357 1.99948 4.40175 2.52629 3.46403 3.464C2.52632 4.40172 1.99951 5.67354 1.99951 6.99967C1.99951 8.3258 2.52632 9.59762 3.46403 10.5353C4.40175 11.4731 5.67357 11.9999 6.9997 11.9999C8.32583 11.9999 9.59765 11.4731 10.5354 10.5353Z"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
