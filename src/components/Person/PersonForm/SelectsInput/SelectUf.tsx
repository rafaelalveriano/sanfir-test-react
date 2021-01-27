import { useState, ChangeEvent } from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import useStyles from './style'

interface Props {
  changed: (value: string) => void
}
const CustomInputSelect = ({ changed }: Props) => {
  const classes = useStyles()
  const [value, setValue] = useState('')

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    const data = event.target.value as string
    setValue(data)
    changed(data)
  }

  return (
    <FormControl className={classes.root}>
      <InputLabel className={classes.label}>UF*</InputLabel>
      <Select value={value} onChange={handleChange}>
        <MenuItem className={classes.label} value={'AC'}>
          AC
        </MenuItem>
        <MenuItem className={classes.label} value={'AL'}>
          AL
        </MenuItem>
        <MenuItem className={classes.label} value={'AP'}>
          AP
        </MenuItem>
        <MenuItem className={classes.label} value={'AM'}>
          AM
        </MenuItem>
        <MenuItem className={classes.label} value={'BA'}>
          BA
        </MenuItem>
        <MenuItem className={classes.label} value={'CE'}>
          CE
        </MenuItem>
        <MenuItem className={classes.label} value={'DF'}>
          DF
        </MenuItem>
        <MenuItem className={classes.label} value={'ES'}>
          ES
        </MenuItem>
        <MenuItem className={classes.label} value={'GO'}>
          GO
        </MenuItem>
        <MenuItem className={classes.label} value={'MA'}>
          MA
        </MenuItem>
        <MenuItem className={classes.label} value={'MT'}>
          MT
        </MenuItem>
        <MenuItem className={classes.label} value={'MS'}>
          MS
        </MenuItem>
        <MenuItem className={classes.label} value={'MG'}>
          MG
        </MenuItem>
        <MenuItem className={classes.label} value={'PA'}>
          PA
        </MenuItem>
        <MenuItem className={classes.label} value={'PB'}>
          PB
        </MenuItem>
        <MenuItem className={classes.label} value={'PR'}>
          PR
        </MenuItem>
        <MenuItem className={classes.label} value={'PE'}>
          PE
        </MenuItem>
        <MenuItem className={classes.label} value={'PI'}>
          PI
        </MenuItem>
        <MenuItem className={classes.label} value={'RJ'}>
          RJ
        </MenuItem>
        <MenuItem className={classes.label} value={'RN'}>
          RN
        </MenuItem>
        <MenuItem className={classes.label} value={'RS'}>
          RS
        </MenuItem>
        <MenuItem className={classes.label} value={'RO'}>
          RO
        </MenuItem>
        <MenuItem className={classes.label} value={'RR'}>
          RR
        </MenuItem>
        <MenuItem className={classes.label} value={'SC'}>
          SC
        </MenuItem>
        <MenuItem className={classes.label} value={'SP'}>
          SP
        </MenuItem>
        <MenuItem className={classes.label} value={'SE'}>
          SE
        </MenuItem>
        <MenuItem className={classes.label} value={'TO'}>
          TO
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default CustomInputSelect
