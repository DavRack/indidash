import {writable} from "svelte/store"

export type Tag = {
  name: string,
  label: string,
  color: string,
}

export type NumberIndicator = {
  name: string,
  label: string,
  value: number,
  updated_on: Date,
  unit: string,
  source: string,
  tags: Tag[],
}

export type Indicators = {
  [name: string]: NumberIndicator[]
}

export const indicators = writable<Indicators>({})

const financeTag: Tag = {
  name: "finance",
  label: "Finanzas",
  color: "c2df90"
}
indicators.set(
  {
    uvt: [
      {
        name: "uvt",
        label: "UVT",
        value: 47065,
        unit: "cop",
        updated_on: new Date("2024-01-01"),
        source: "https://www.dian.gov.co/normatividad/Proyectosnormas/Proyecto%20Resoluci%C3%B3n%20000000%20de%2002-11-2023.pdf",
        tags: [financeTag],
      }
    ],

    ipc: [
      {
        name: "ipc",
        label: "IPC",
        value: 9.28,
        unit: "%",
        updated_on: new Date("2024-01-16"),
        source: "https://www.dane.gov.co/files/operaciones/IPC/cp-IPC-dic2023.pdf",
        tags: [financeTag],
      }
    ],
    minimun_wage: [
      {
        name: "minimun_wage",
        label: "Salario Mínimo",
        value: 1300000,
        unit: "cop",
        updated_on: new Date("2024-01-16"),
        source: "https://acmineria.com.co/sitio/wp-content/uploads/2024/01/DECRETO-2292-DEL-29-DE-DICIEMBRE-DE-2023.pdf",
        tags: [financeTag],
      }
    ],
    reference_rate: [
      {
        name: "reference_rate",
        label: "Tasas de interés de política monetaria",
        value: 13,
        unit: "%",
        updated_on: new Date("2024-01-17"),
        source: "https://www.banrep.gov.co/es/noticias/minutas-banrep-19-12-2023",
        tags: [financeTag],
      }
    ],
    integral_salary: [
      {
        name: "integral_salary",
        label: "Salario integral",
        value: 16900000,
        unit: "cop",
        updated_on: new Date("2024-01-17"),
        source: "https://www.ilo.org/dyn/travail/docs/1539/CodigoSustantivodelTrabajoColombia.pdf",
        tags: [financeTag],
      }
    ]
  }
)
