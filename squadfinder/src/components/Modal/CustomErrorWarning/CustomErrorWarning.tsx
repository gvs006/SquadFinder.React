
import styled from "@emotion/styled";
import Swal from "sweetalert2";

export const ErrorButtonTest = styled.button`
height: 400px;
width: 400px;
background-color: red;
`

const CustomErrorWarning = ({ ...rest }) => {

  
  const fc = {
      
    dispararErro:() => Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo deu errado!',
          footer: '<a href="">Porque estou tendo esse problema?</a>',
        }),

  }
      
    return (
      <>
<ErrorButtonTest onClick={fc.dispararErro} value={'aaaa'} />
     
      
      </>
    );

}
  
  export default CustomErrorWarning;