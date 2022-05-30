type Props = {
  text: string;
};

const PageHeader = ({ text }: Props) => {
  return (
    <header>
      <h1 className="text-4xl text-gray-50 font-bold py-8">{text}</h1>
    </header>
  );
};

export default PageHeader;
