import { InputContainer } from './styles'
import {} from './styles'

function Input({value, onChange}){
    return(
        <InputContainer>
            <input placeholder='nomeUsuario/nomeRepositorio' value={value} onChange={onChange}/>
        </InputContainer>
    )    
}

export default Input;