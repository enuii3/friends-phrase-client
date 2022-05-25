import Image from 'next/image'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { languages } from '../utils/Language'

const FormItemLanguage = ({ SelectLanguage, setSelectLanguage }) => {
  return (
    <div className="flex justify-between items-center">
      <FormControl fullWidth>
        <div className="mr-4">
          <InputLabel id="demo-simple-select-helper-label">
            フレーズの言語
          </InputLabel>
          <Select
            className="w-full"
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={SelectLanguage}
            label="フレーズの言語"
            onChange={(e) => setSelectLanguage(e.target.value)}
          >
            {languages.map((language) => (
              <MenuItem
                className="w-full"
                key={language.id}
                value={language.code}
              >
                {language.name}
              </MenuItem>
            ))}
          </Select>
        </div>
      </FormControl>
      <div className="flex items-center">
        <Image
          src={`/${SelectLanguage}.svg`}
          alt={SelectLanguage}
          width={50}
          height={30}
        />
      </div>
    </div>
  )
}

export default FormItemLanguage
