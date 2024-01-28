import Poll from "./poll";

const Page2: React.FC = () => {
  const question = "How you like the Opinary test?";
  const options = [
    "It was great and so challenging.",
    "Not bad, but you can improve.",
    "It was a nightmare, never again.",
  ];

  return <Poll question={question} options={options} />;
};

export default Page2;
