import { StyledLink } from "./styled/StyledLink";

const LocalLink = (props) => {
  return <StyledLink to={props.to}>{props.text}</StyledLink>;
};

export { LocalLink };
