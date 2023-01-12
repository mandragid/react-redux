import { useSelector } from "react-redux";

const Result = () => {
  const { total } = useSelector((counterState) => counterState);
  return <div>{total}</div>;
};

export default Result;
