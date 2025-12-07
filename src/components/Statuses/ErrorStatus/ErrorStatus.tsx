import { StatusMessage } from '../StatusMessage/StatusMessage';

interface StatusErrorProps {
  title: string;
  text?: string;
  className?: string;
}

function ErrorStatus({
  title,
  text = 'Please check your connection and try again.',
  className,
}: StatusErrorProps) {
  return <StatusMessage role="alert" icon="⚠️" title={title} text={text} className={className} />;
}

export { ErrorStatus };
