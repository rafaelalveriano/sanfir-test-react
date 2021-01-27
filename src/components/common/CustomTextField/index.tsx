import { TextField } from '@material-ui/core'
import { Field } from 'formik'
import StyleTextField from './style'

interface Props {
  name: string
  label: string
  type: string
  error?: boolean
}

const CustomTextField = ({ name, label, type, error = false }: Props) => {
  const classes = StyleTextField()

  return (
    <Field
      as={TextField}
      name={name}
      type={type}
      className={classes.root}
      InputProps={{ className: classes.input }}
      InputLabelProps={{ className: classes.label }}
      label={label}
      error={error}
    />
  )
}

export default CustomTextField
