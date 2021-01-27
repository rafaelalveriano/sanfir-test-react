import React from 'react'
import { DataGrid, ColDef, SelectionChangeParams } from '@material-ui/data-grid'
import Grid from '@material-ui/core/Grid'
import { PersonTypeRowsTable, PersonType } from '../PersonType'
import { FormatDate } from '../../../utils'

const columns: ColDef[] = [
  { field: 'name', headerName: 'Nome', width: 280 },
  { field: 'email', headerName: 'Email', width: 280 },
  { field: 'birthdata', headerName: 'Data de Nasc.', width: 180 },
  { field: 'uf', headerName: 'UF', width: 80 },
  { field: 'city', headerName: 'Cidade', width: 280 },
]

const createRowPersons = (persons: PersonType[]) => {
  const arrayPersons: PersonTypeRowsTable[] = []
  persons.map((person) =>
    arrayPersons.push({
      id: person._id || '',
      name: person.name,
      email: person.email,
      birthdata: FormatDate(person.birthdata),
      uf: person.uf,
      city: person.city,
    }),
  )

  return arrayPersons
}

interface Props {
  setIdsSelecteds: React.Dispatch<React.SetStateAction<React.ReactText[]>>
  persons: PersonType[]
}

const PersonTable: React.FC<Props> = ({ setIdsSelecteds, persons }) => {
  const handleSelectRow = (param: SelectionChangeParams) => {
    const ids = param.rowIds
    setIdsSelecteds(ids)
  }

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ marginTop: 40 }}
    >
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={createRowPersons(persons)}
          columns={columns}
          pageSize={5}
          checkboxSelection
          onSelectionChange={handleSelectRow}
        />
      </div>
    </Grid>
  )
}
export default PersonTable
