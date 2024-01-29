import Poll from "./poll";

const Page2: React.FC = () => {
  const question = "What is your favorite cuisine?";
  const options = ["Italian", "Indian", "Mexican"];

  return (
    <div data-testid="page2">
      <Poll question={question} options={options} />
    </div>
  );
};

export default Page2;
