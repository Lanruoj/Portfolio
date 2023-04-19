import { Ul } from "./styled/Ul";
import { ListItem, ListItemLabel } from "./styled/ListItem";

const ListCardWithLabels = (props) => {
  return (
    <>
      <Ul>
        <h2>{props.title}</h2>
        {props.items.map((item) => {
          return (
            <ListItem key={item.label}>
              {item.label ? <ListItemLabel>{item.label}</ListItemLabel> : null}
              {item.value}
            </ListItem>
          );
        })}
      </Ul>
    </>
  );
};

export { ListCardWithLabels };
