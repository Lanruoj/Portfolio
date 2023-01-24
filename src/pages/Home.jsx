import { Header } from "../components/Header";
import { ListCard } from "../components/styled/ListCard";
import { ListItem } from "../components/styled/ListItem";

export const Home = () => {
  return (
    <>
      <Header>Snapshot</Header>
      <h2>Personal details</h2>
      <ListCard>
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
      <ul>
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
      </ul>
      <h2>Software</h2>
      <ul>
        <ListItem>Visual Studio Code</ListItem>
        <ListItem>Git / GitHub</ListItem>
        <ListItem>Postman</ListItem>
        <ListItem>Balsamiq</ListItem>
        <ListItem>Trello</ListItem>
        <ListItem>CLI</ListItem>
      </ul>
    </>
  );
};
