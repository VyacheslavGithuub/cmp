import { useContentTabStyle } from "./style";

interface IContentTabProps {
  titleTab: string;
}
export default function ContentTab({ titleTab }: IContentTabProps) {
  const { ContentTabSC, ContentTabTitleSC } = useContentTabStyle();

  return (
    <ContentTabSC>
      <ContentTabTitleSC>{titleTab}</ContentTabTitleSC>
    </ContentTabSC>
  );
}
