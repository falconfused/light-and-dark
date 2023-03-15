import React, { Component, createRef, Fragment, RefObject } from 'react';

import { CheckBoxField, TermsAndConditionsContainer,CheckBoxLabel } from '../../styledComponents';
import { themeContext } from '../../ThemeContext/ThemeContext';
interface Props {
    handleChangeInput: (value: boolean, type: string) => void;
    type: string;

}

class CheckBoxContainer extends Component<Props> {
    state = {
        terms: false
    }
    private inputRef: RefObject<HTMLInputElement> = createRef();

    focusInput(shouldfocus: boolean) {
        if (this.inputRef.current) {
            if (shouldfocus)
                this.inputRef.current.focus();

            this.inputRef.current.style.border = '3px solid red';
        }



    }
    unfocusInput() {
        if (this.inputRef.current)
            this.inputRef.current.style.border = 'none';
    }
    handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {

        this.setState({ terms: e.target.checked });
        this.props.handleChangeInput(e.target.checked, this.props.type);
        
    }
 

    render() {
        return (

            <themeContext.Consumer>
                {({ theme }) => (
                    <TermsAndConditionsContainer ref={this.inputRef}>
                        <CheckBoxField type={'checkbox'}  onChange={this.handleCheck} />
                        <CheckBoxLabel theme={theme} htmlFor='terms'>I agree to the terms and conditions</CheckBoxLabel>
                    </TermsAndConditionsContainer>
                )}
            </themeContext.Consumer>



        );
    }
}

export default CheckBoxContainer;