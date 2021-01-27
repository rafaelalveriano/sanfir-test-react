import { useState, ChangeEvent } from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import useStyles from './style'
import { CitiesType } from '../../PersonType'

interface Props {
  changed: (value: string) => void
  cities: CitiesType[]
}
const CustomInputSelect = ({ changed, cities }: Props) => {
  const classes = useStyles()
  const [value, setValue] = useState('')

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    const data = event.target.value as string
    setValue(data)
    changed(data)
  }

  return (
    <FormControl className={classes.root}>
      <InputLabel className={classes.label}>Cidade*</InputLabel>
      <Select value={value} onChange={handleChange}>
        {cities.map((city) => (
          <MenuItem className={classes.label} value={city.nome} key={city.id}>
            {city.nome}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default CustomInputSelect
