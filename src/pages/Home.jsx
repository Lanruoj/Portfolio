import { Header } from "../components/Header";
import { ListCard } from "../components/styled/ListCard";

export const Home = () => {
  return (
    <>
      <Header>Snapshot</Header>
      <ListCard
        title="Details"
        items={[
          { label: "Name", value: "Tane" },
          { label: "Age", value: "27" },
          { label: "Location", value: "Melbourne, Victoria, Australia" },
        ]}
      />
      {/* <ListCard>
        <ListItem>
          <h3>Name:</h3>Tāne Kaio
        </ListItem>
        <ListItem>
          <h3>Age:</h3>27
        </ListItem>
        <ListItem>
          <h3>Location:</h3>Melbourne, Victoria, Australia
        </ListItem>
      </ListCard> 
      <h2>Tech stack</h2>
      <ListCard>
        <ListItem>HTML / CSS / SCSS</ListItem>
        <ListItem>JavaScript</ListItem>
        <ListItem>React</ListItem>
        <ListItem>Express</ListItem>
        <ListItem>Node</ListItem>
        <ListItem>Mongoose</ListItem>
        <ListItem>MongoDB</ListItem>
        <ListItem>Python</ListItem>
        <ListItem>Flask</ListItem>
        <ListItem>PostgreSQL</ListItem>
        <ListItem>SQL Alchemy</ListItem>
        <ListItem>Marshmallow</ListItem>
        <ListItem>Bcrypt</ListItem>
        <ListItem>JSON Web Tokens</ListItem>
      </ListCard>
      <h2>Software</h2>
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
