import Poll from "./poll";

const Page1: React.FC = () => {
  const question = "How do you feel today?";
  const options = ["Brilliant!", "Could be worse", "End my misery"];

  return <Poll question={question} options={options} />;
};

export default Page1;
