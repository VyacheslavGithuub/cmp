import React from "react";
import ContentParams from "./ContentParams/ContentParams";
import ContentTab from "./ContentTab/ContentTab";

import { useContentStyle } from "./style";

export default function Content() {
  const { ContentSC } = useContentStyle();

  return (
    <ContentSC>
      <ContentTab titleTab="Строительно-монтажные работы" />
      <ContentParams />
    </ContentSC>
  );
}
