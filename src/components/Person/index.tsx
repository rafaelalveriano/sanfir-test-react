import React, { ReactText } from 'react'
import Container from '@material-ui/core/Container'

import { Layout, Title, Modal, Alert, Load } from '../common'
import TablePerson from './PersonTable'
import Form from './PersonForm'
import { PersonType, PersonFormState } from './PersonType'
import { HttpClient } from '../../services'
import Buttons from './Buttons'

const Person = () => {
  const [persons, setPersons] = React.useState<PersonType[]>([])
  const [openModal, setOpenModal] = React.useState<boolean>(false)
  const [formState, setFormState] = React.useState<PersonType>(PersonFormState)
  const [updateForm, setUpdateForm] = React.useState<boolean>(false)
  const [load, setLoad] = React.useState<boolean>(false)
  const [idsSelecteds, setIdsSelecteds] = React.useState<ReactText[]>([])

  React.useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await HttpClient().get('person')
      setPersons(data)
    }
    fetchPersons()
  }, [])

  const updateTable = () => {
    const fetchPersons = async () => {
      const { data } = await HttpClient().get('person')
      setPersons(data)
    }
    fetchPersons()
  }

  const add = async (data: PersonType) => {
    try {
      await HttpClient().post('person', data)
      Alert.Show(true, 'Adicionado com sucesso!')
      updateTable()
    } catch (error) {
      Alert.Show(false, 'Não foi possível adicionar o registro')
    } finally {
      setLoad(false)
    }
  }

  const update = async (data: PersonType) => {
    try {
      await HttpClient().update(`person/${data?._id}`, data)
      Alert.Show(true, 'Alterado com com sucesso!')
      updateTable()
    } catch (error) {
      Alert.Show(false, 'Não foi possível aterar o registro')
    } finally {
      setLoad(false)
    }
  }

  const submit = async (data: PersonType) => {
    setLoad(true)
    setOpenModal(false)
    !updateForm ? add(data) : update(data)
  }

  const remove = async () => {
    setLoad(true)
    try {
      await HttpClient().remove('person', idsSelecteds)
      updateTable()
    } catch (error) {
      Alert.Show(false, 'Não foi possível excluir o registro')
    } finally {
      setLoad(false)
    }
  }

  const editForm = () => {
    persons.filter(
      (person: PersonType) =>
        person._id === idsSelecteds[0] && setFormState(person),
    )
    setUpdateForm(true)
    setOpenModal(true)
  }

  return (
    <Layout title="Gerenciamento de pessoas">
      <Container>
        <Title content="Lista de pessoas" />

        <Buttons
          setOpenModal={setOpenModal}
          onEdit={editForm}
          onDelete={remove}
          totalRowsSelected={idsSelecteds.length}
        />

        <TablePerson setIdsSelecteds={setIdsSelecteds} persons={persons} />

        <Modal width="600px" setOpen={setOpenModal} open={openModal}>
          <Form
            handleSubmit={submit}
            update={updateForm}
            formState={formState}
          />
        </Modal>
        <Load open={load} />
      </Container>
    </Layout>
  )
}

export default Person
