interface Props {
  text: string;
}

const Title = ({ text }: Props) => {
  return (
    <div className="flexgap-4 text-2xl group pb-8">
      <h3 className="font-semibold  md:text-3xl text-gray-400 relative overflow-hidden">
        {text}
      </h3>
    </div>
  );
};

export default Title;