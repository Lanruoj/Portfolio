import styled from "styled-components";
import Link from "./styled/Link";

const LocalLink = (props) => {
  return <Link to={props.to}>&gt; {props.text} </Link>;
};

export { LocalLink };
