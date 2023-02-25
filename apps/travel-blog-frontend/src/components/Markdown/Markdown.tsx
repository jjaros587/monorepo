import { Box, Text } from '@ui';
import { HTMLAttributes, IframeHTMLAttributes, ImgHTMLAttributes } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { MarkdownImage } from './components/MarkdownImage';

interface Props {
  markdown: string;
}

type OmitColor<T> = Omit<T, 'color'>;

export const Markdown: React.FC<Props> = ({ markdown }) => {
  const H1 = (props: OmitColor<HTMLAttributes<HTMLHeadingElement>>) => (
    <Text variant="headline1" {...props} />
  );
  const H2 = (props: OmitColor<HTMLAttributes<HTMLHeadingElement>>) => (
    <Text variant="headline2" {...props} />
  );
  const P = (props: OmitColor<HTMLAttributes<HTMLParagraphElement>>) => (
    <Text variant="paragraph" style={{ textAlign: 'justify' }} {...props} />
  );

  const Img = (props: ImgHTMLAttributes<HTMLImageElement>) => (
    <MarkdownImage {...props} />
  );

  const IFrame = (props: IframeHTMLAttributes<HTMLIFrameElement>) => {
    return (
      <Box align="center">
        <iframe {...props} />
      </Box>
    );
  };

  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: H1,
        h2: H2,
        p: P,
        iframe: IFrame,
        img: Img,
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
};
