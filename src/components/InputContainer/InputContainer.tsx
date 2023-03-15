import React, { Component, createRef, RefObject, useContext } from 'react';
import { ThemeConsumer } from 'styled-components';
import { InputField } from '../../styledComponents';
import { themeContext } from '../../ThemeContext/ThemeContext';
interface Props {
    handleChangeInput: (value: string, type: string) => void;
    type: string;
}

class InputContainer extends Component<Props> {
    static contextType = themeContext;


    private inputRef: RefObject<HTMLInputElement> = createRef();

    focusInput(shouldfocus: boolean) {
        if (this.inputRef.current) {
            if (shouldfocus)
                this.inputRef.current.focus();
            this.inputRef.current.style.border = '5px solid red';
        }



    }
    unfocusInput() {
        if (this.inputRef.current)
            this.inputRef.current.style.border = '1px solid black';
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.handleChangeInput(e.target.value, this.props.type);
    }

    render() {


        return (
            <themeContext.Consumer>
                {({ theme }) => (
                    <InputField ref={this.inputRef} onChange={this.handleChange} theme={theme} />

                )}
            </themeContext.Consumer>

        );
    }
}

export default InputContainer;