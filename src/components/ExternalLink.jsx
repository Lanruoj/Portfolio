import { StyledLink } from "./styled/StyledLink";

const ExternalLink = (props) => {
  return (
    <StyledLink href={props.to} target="_blank">
      {props.text}{" "}
    </StyledLink>
  );
};

export { ExternalLink };
