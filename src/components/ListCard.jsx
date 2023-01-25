import { Ul } from "./styled/Ul";
import { ListItem } from "./styled/ListItem";

const ListCard = (props) => {
  return (
    <>
      <Ul>
        <h2>{props.title}</h2>
        {props.items.map((item) => {
          return <ListItem>{item}</ListItem>;
        })}
      </Ul>
    </>
  );
};

export { ListCard };
