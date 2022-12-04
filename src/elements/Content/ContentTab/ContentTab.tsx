import { IContentTabProps } from "../../../../types";
import { useContentTabStyle } from "./style";

export default function ContentTab({ titleTab }: IContentTabProps) {
  const { ContentTabSC, ContentTabTitleSC } = useContentTabStyle();

  return (
    <ContentTabSC>
      <ContentTabTitleSC>{titleTab}</ContentTabTitleSC>
    </ContentTabSC>
  );
}
