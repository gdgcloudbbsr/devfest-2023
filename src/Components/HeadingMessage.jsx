import Wrapper from "./Wrapper";

const HeadingMessage = ({ text = "", ...props }) => {
  return (
    <div className="HeadingMessage" {...props}>
      <Wrapper>
        <p>{text}</p>
      </Wrapper>
    </div>
  );
};

export default HeadingMessage;
