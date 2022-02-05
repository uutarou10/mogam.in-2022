import React from "react";

type Props = {
  level?: 2 | 3;
  children: React.ReactNode;
};

const Heading: React.FC<Props> = ({ level, children = 2 }) => {
  const Wrapper = (() => {
    switch (level) {
      case 2:
        return "h2";
      case 3:
        return "h3";
    }
  })();

  return <Wrapper>{children}</Wrapper>;
};

export default Heading;
