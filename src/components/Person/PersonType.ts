export interface PersonType {
  name: string
  email: string
  birthdata: string
  city: string
  uf: string
}

export interface CitiesType {
  id: string
  nome: string
}

export const PersonFormState: PersonType = {
  name: '',
  email: '',
  birthdata: '',
  city: '',
  uf: '',
}
