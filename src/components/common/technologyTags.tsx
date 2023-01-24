import * as React from "react";

interface Props {
  data: any;
}
const TechTags: React.FC<Props> = ({ data }: any) => {
  return <div>{data}</div>;
};

export default TechTags;
