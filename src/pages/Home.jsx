import { LocalLink } from "../components/LocalLink";
import { ListCardWithLabels } from "../components/ListCardWithLabels";

export const Home = () => {
  const personalDetails = [
    { label: "Name", value: "Tāne Kaio" },
    { label: "Location", value: "Melbourne, Victoria, Australia" },
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
      <ListCardWithLabels items={personalDetails} />
      <ListCardWithLabels items={techSkills} />
      <LocalLink to="/about" text="Learn more" />
    </>
  );
};
