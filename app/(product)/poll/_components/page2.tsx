import Poll from "./poll";

const Page2: React.FC = () => {
  const question = "What is your favorite cuisine?";
  const options = ["Italian", "Indian", "Mexican"];

  return <Poll question={question} options={options} />;
};

export default Page2;
