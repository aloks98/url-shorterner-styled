import styled from "styled-components";

const FormGroupContainer = styled.div`
  border: 3px solid darkslategrey;
  border-radius: 8px;
  padding: 10px;
  margin: 1%;
  text-align: left;
`;

const FormGroup = styled.form`
  padding: 2%;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
`;
const FormLabel = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 25px;
  font-weight: 600;
  color: white;
  margin: 4px;
`;
const FormInput = styled.input`
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
  color: white;
  margin: 8px 0px;
  padding: 10px;
  width: ${(props) => props.width || "100%"};
  border: 1px solid slategray;
  border-radius: 8px;
  background-color: inherit;
`;

const FormButton = styled.button`
  font-family: "Poppins", sans-serif;
  background-color: mediumturquoise;
  margin: 6px 0px;
  margin-top: 15px;
  border: none;
  border-radius: 4px;
  padding: 12px 50px;
`;

const FormErrorMessage = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: orangered;
  margin-top: 2px;
  margin-left: 3px;
`;

export {
  FormGroupContainer,
  FormGroup,
  FormLabel,
  FormInput,
  FormErrorMessage,
  FormButton,
};
