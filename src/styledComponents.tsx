import styled from "styled-components";

export const SubmitButton = styled.button`
  background-color: ${props => props.theme === "light" ? "white" : "black"};
  border: 1px solid ${props => props.theme === "light" ? "black" : "white"};

    color: ${props => props.theme === "light" ? "black" : "white"};
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
`;
interface ThemeButtonProps {
    theme: string;
}


export const ThemeButton = styled.button <ThemeButtonProps>`
    background-color: ${props => props.theme === "light" ? "white" : "black"};
    border: 1px solid ${props => props.theme === "light" ? "black" : "white"};
    color: ${props => props.theme === "light" ? "black" : "white"};
    padding: 8px;
    text-align: center;
    font-size: 20px;
    margin: 4px 2px;
    cursor: pointer;
`;

export const InputField = styled.input`
    width: 40%;
    height: 40px;
    border: 1px solid ${props => props.theme === "light" ? "black" : "white"};
    text-align: center;

`;

export const DropDownField = styled.select`

    text-align: center;
    width: 40%;
    min-width: 400px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    
`;
export const RadioButtonField = styled.input`
/* display: flex; */
flex-direction: row;
color: aliceblue;
label{
    margin-left: 10px;
}
`;
export const RadioLabel = styled.label`
color: ${props => props.theme === "light" ? "black" : "white"};
`;
export const CheckBoxLabel = styled.label`
color: ${props => props.theme === "light" ? "black" : "white"};
`;

export const CheckBoxField = styled.input`
// width: 200px;
// height: 200px;

`;
export const TermsAndConditionsContainer = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
    label {
        margin-left: 10px;
    }       
    `;

export const FormContainer = styled.div`
    
  display: flex;
  height: 100%;
  width: 100%;
  min-width: 400px;
  flex-direction: column;
  align-items: center;
  background-color:${props => props.theme === "light" ? "white" : "black"} ;
  justify-content: space-around;


`;