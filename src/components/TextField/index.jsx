import { TextField as TextFieldMaterial} from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

const DefaultTextField = (props) => {
    return props.decimal ?
                <FormControl fullWidth>
                    <OutlinedInput {...props} startAdornment={<InputAdornment position="start">R$</InputAdornment>}/>
                </FormControl>
            : <TextFieldMaterial {...props}/>
}

export default DefaultTextField;