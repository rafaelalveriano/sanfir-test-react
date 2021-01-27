import { PersonType } from '../../Person/PersonType'

const calculateAge = (bd: Date) => {
  const birthDate = new Date(bd)
  const actualDate = new Date(Date.now())

  var years = actualDate.getFullYear() - birthDate.getFullYear()

  if (
    actualDate.getMonth() < birthDate.getMonth() ||
    (actualDate.getMonth() == birthDate.getMonth() &&
      actualDate.getDate() < birthDate.getDate())
  ) {
    years--
  }

  return years
}

const birthdateToAge = (persons: PersonType[]) => {
  let ages: number[] = []

  persons.map((person) => ages.push(calculateAge(new Date(person.birthdata))))

  return ages
}

export default birthdateToAge
