import React from 'react'
import { Formik, Form, FormikValues, ErrorMessage } from 'formik'
import { Grid, Button } from '@material-ui/core'
import { isEmpty } from 'lodash'
import { CustomTextField, Load } from '../../common'
import { PersonType, CitiesType } from '../PersonType'
import PersonFormValidation from './Validator'
import { SelectUf, SelectCities } from './SelectsInput'
import { HttpClient } from '../../../services'

interface Props {
  handleSubmit: any
  formState: PersonType
  update: boolean
}

const PersonForm: React.FC<Props> = ({ handleSubmit, update, formState }) => {
  const [load, setLoad] = React.useState<boolean>(false)
  const [cities, setCities] = React.useState<CitiesType[]>([])

  const getCtities = async (uf: string) => {
    setLoad(true)

    try {
      const { data } = await HttpClient(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados/',
      ).get(`${uf}/distritos`)
      setCities(data)
    } catch (error) {
    } finally {
      setLoad(false)
    }
  }

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={formState}
        validationSchema={PersonFormValidation}
        onSubmit={(valeus: FormikValues, { resetForm }) => {
          handleSubmit(valeus)
          resetForm()
        }}
      >
        {({ isValid, dirty, setFieldValue }) => (
          <Grid container style={{ padding: '10px' }} direction="column">
            <Grid item md={12} xs={12}>
              <Form>
                <Grid item md={12} sm={12}>
                  <CustomTextField label="Nome*" name="name" type="text" />
                  <ErrorMessage
                    name="name"
                    className="error"
                    component="span"
                  />
                </Grid>
                <Grid item md={12} sm={12}>
                  <CustomTextField label="Email*" name="email" type="text" />
                  <ErrorMessage
                    name="email"
                    className="error"
                    component="span"
                  />
                </Grid>
                <Grid item md={12} sm={12}>
                  <CustomTextField
                    label="Data de Nasc.*"
                    name="birthdata"
                    type="date"
                  />
                  <ErrorMessage
                    name="birthdata"
                    className="error"
                    component="span"
                  />
                </Grid>
                <Grid item md={12} sm={12}>
                  <SelectUf
                    changed={(value: string) => {
                      setFieldValue('uf', value)
                      getCtities(value)
                    }}
                  />
                  <ErrorMessage name="uf" className="error" component="span" />
                </Grid>

                {!isEmpty(cities) && (
                  <Grid item md={12} sm={12}>
                    <SelectCities
                      cities={cities}
                      changed={(value: string) => {
                        setFieldValue('city', value)
                      }}
                    />
                    <ErrorMessage
                      name="city"
                      className="error"
                      component="span"
                    />
                  </Grid>
                )}

                <Button
                  type="submit"
                  disabled={!update && !(isValid && dirty)}
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                >
                  {update ? 'Alterar' : 'Adicionar'}
                </Button>
              </Form>
            </Grid>
          </Grid>
        )}
      </Formik>
      <Load open={load} />
    </div>
  )
}

export default PersonForm
