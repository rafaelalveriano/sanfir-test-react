import * as React from 'react'
import { DataGrid, ColDef } from '@material-ui/data-grid'
import Grid from '@material-ui/core/Grid'

const columns: ColDef[] = [
  { field: 'name', headerName: 'Nome', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },
  { field: 'birthdata', headerName: 'Data de Nasc.', width: 130 },
  { field: 'city', headerName: 'Cidade', width: 130 },
  { field: 'uf', headerName: 'UF', width: 130 },
]

const rows = [
  {
    id: 1,
    name: 'Rafael Augusto',
    email: 'teste@teste.com',
    birthdata: '18/19/2020',
    city: 'Araxá',
    uf: 'MG',
  },
  {
    id: 2,
    name: 'Rafael Augusto',
    email: 'teste@teste.com',
    birthdata: '18/19/2020',
    city: 'Araxá',
    uf: 'MG',
  },
]

export default function DataTable() {
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
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </div>
    </Grid>
  )
}
