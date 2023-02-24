import styled from "styled-components";
import Form from "./logic";
import Styles from "./styles";
import useForm from "./use-form";

export default styled(Form)`
  ${Styles}
`;

export { useForm };
