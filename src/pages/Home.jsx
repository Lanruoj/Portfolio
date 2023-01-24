import { Header } from "../components/Header";
import { ListCard } from "../components/styled/ListCard";
import { ListCardWithLabels } from "../components/styled/ListCardWithLabels";

export const Home = () => {
  return (
    <>
      <Header>Snapshot</Header>
      <ListCardWithLabels
        title="Details"
        items={[
          { label: "Name", value: "Tane" },
          { label: "Age", value: "27" },
          { label: "Location", value: "Melbourne, Victoria, Australia" },
        ]}
      />
      <h2>Tech stack</h2>
      <ListCard title="Tech stack" items={["Banana"]} />
      {/* <h2>Software</h2>
      <ListCard>
        <ListItem>Visual Studio Code</ListItem>
        <ListItem>Git / GitHub</ListItem>
        <ListItem>Postman</ListItem>
        <ListItem>Balsamiq</ListItem>
        <ListItem>Trello</ListItem>
        <ListItem>CLI</ListItem>
      </ListCard> */}
    </>
  );
};
