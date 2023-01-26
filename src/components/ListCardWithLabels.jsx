import { Ul } from "./styled/Ul";
import { ListItem } from "./styled/ListItem";

const ListCardWithLabels = (props) => {
  return (
    <>
      <Ul>
        <h2>{props.title}</h2>
        {props.items.map((item) => {
          return (
            <ListItem key={item.label}>
              {item.label ? <h3>{item.label}</h3> : null}
              {item.value}
            </ListItem>
          );
        })}
      </Ul>
    </>
  );
};

export { ListCardWithLabels };
