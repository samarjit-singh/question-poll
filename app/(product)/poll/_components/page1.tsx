import Poll from "./poll";

const Page1: React.FC = () => {
  const question = "How do you feel today?";
  const options = ["Brilliant!", "Could be better.", "Awesome!!!!"];

  return (
    <div data-testid="page1">
      <Poll question={question} options={options} />
    </div>
  );
};

export default Page1;
