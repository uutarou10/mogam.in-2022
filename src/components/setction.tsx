import React from "react";
import Heading from "./heading";

type Props = {
  children: React.ReactNode;
  title: string;
};

const Section: React.FC<Props> = ({ children, title }) => {
  return (
    <section>
      <Heading>{title}</Heading>
      {children}
    </section>
  );
};

export default Section;
