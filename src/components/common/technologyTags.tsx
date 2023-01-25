import * as React from "react";

interface Props {
  data: any;
}
const TechTags: React.FC<Props> = ({ data }: any) => {
  return (
    <p className="techTags" style={{ backgroundColor: data.color }}>
      {data.language}
    </p>
  );
};

export default TechTags;
