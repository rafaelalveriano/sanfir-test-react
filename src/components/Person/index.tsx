import { Layout } from '../common'
import React from 'react'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import { GroupAdd } from '@material-ui/icons/'
import { Title, Modal } from '../common'
import TablePerson from './PersonTable'
import Form from './PersonForm'
import { PersonType, PersonFormState } from './PersonType'

const Person = () => {
  const [openModal, setOpenModal] = React.useState<boolean>(false)
  const [formState, setFormState] = React.useState<PersonType>(PersonFormState)
  const [updateForm, setUpdateForm] = React.useState<boolean>(false)

  const add = (data: PersonType) => {
    console.log(data)
  }

  return (
    <Layout title="Gerenciamento de pessoas">
      <Container>
        <Title content="Lista de pessoas" />

        <Button
          variant="contained"
          color="primary"
          startIcon={<GroupAdd />}
          onClick={() => setOpenModal(true)}
        >
          Novo cadastro
        </Button>

        <TablePerson />

        <Modal width="600px" setOpen={setOpenModal} open={openModal}>
          <Form handleSubmit={add} update={updateForm} formState={formState} />
        </Modal>
      </Container>
    </Layout>
  )
}

export default Person
