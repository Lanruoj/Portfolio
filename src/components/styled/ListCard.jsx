import styled from "styled-components";
import { ListItem } from "./ListItem";

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
`;

const ListCard = (props) => {
  return (
    <>
      <StyledUl>
        <h2>{props.title}</h2>
        {props.items.map((item) => {
          return <ListItem>{item}</ListItem>;
        })}
      </StyledUl>
    </>
  );
};

export { ListCard };
