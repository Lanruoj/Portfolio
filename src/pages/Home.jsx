import { LocalLink } from "../components/LocalLink";
import { ListCardWithLabels } from "../components/ListCardWithLabels";
import { Header } from "../components/Header";
import { Wrapper } from "../components/Wrapper";

export const Home = () => {
  const personalDetails = [
    { label: "Name", value: "Tāne Kaio" },
    { label: "Location", value: "Melbourne, Victoria, Australia" },
    { label: "Age", value: "27 y/o" },
    {
      label: "Education",
      value: "Diploma of Information Technology (Coder Academy)",
    },
    {
      label: "Experience",
      value: "Junior",
    },
  ];
  const techSkills = [
    { label: "Languages", value: "JavaScript / Python / HTML / CSS / SQL" },
    {
      label: "JavaScript stack",
      value: "React / MongoDB / Mongoose / Express / Node",
    },
    {
      label: "Python stack",
      value: "Flask / PostgreSQL / SQL Alchemy / Marshmallow",
    },
    { label: "Data protection", value: "JWT / Bcrypt" },
    { label: "Project management", value: "Git / GitHub / Trello" },
  ];
  return (
    <>
      <Header>Overview</Header>
      <Wrapper>
        <div>
          <ListCardWithLabels items={personalDetails} />
        </div>
        <div>
          <ListCardWithLabels items={techSkills} />
        </div>
      </Wrapper>
      <LocalLink to="/about" text="Learn more" />
    </>
  );
};
