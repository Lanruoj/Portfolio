import { Ul } from "./styled/Ul";
import { ListItem } from "./styled/ListItem";

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
