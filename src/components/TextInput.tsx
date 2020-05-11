import * as React from 'react'
import styled from 'styled-components'

interface ITextInputProps {
    type: 'text' | 'password' | 'submit'
    onChange?: (value: string) => void
    onClick?: () => void
    label?: string
    value?: string
    btnText?: string
    placeholder?: string
    readOnly?: boolean
    elId?: string
}

const TextInput = (props: ITextInputProps) => {
    const { 
        label, 
        type, 
        placeholder, 
        btnText, 
        value, 
        readOnly,
        elId,
        onChange, 
        onClick 
    } = props
    return <StyledTextInput>
        {
            type !== 'submit' 
                ? <>
                    <label>{label}</label>
                    <input 
                        id={elId || undefined}
                        type={type}
                        placeholder={placeholder || ''}
                        value={value}
                        onChange={event => onChange && onChange(event.target.value)}
                        readOnly={readOnly || false}
                    />
                </>
                : <input
                    type="submit"
                    value={btnText}
                    onClick={onClick}
                />
        }
    </StyledTextInput>
}

export default TextInput

const StyledTextInput = styled.div`
    margin-top: 20px;
    label {
        display: block;
        color: #868686;
        margin-bottom: 5px;
        font-size: 18px;
    }
    input {
        width: 100%;
        height: 50px;
        background: #131419;
        border: none;
        outline: none;
        border-radius: 40px;
        padding: 5px 15px;
        /* color: #fff; */
        font-size: 18px;
        color: #03a9f4;
        box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.1),
                    inset 2px 2px 6px rgba(0, 0, 0, 0.8);
    }
    input[type="submit"] {
        box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.1),
                    2px 2px 6px rgba(0, 0, 0, 0.8);
    }
    input[type="submit"]:active {
        color: #006c9c;
        box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.1),
                    inset 2px 2px 6px rgba(0, 0, 0, 0.8);
    }
    input::placeholder {
        color: #555;
        font-size: 18px;
    }
`