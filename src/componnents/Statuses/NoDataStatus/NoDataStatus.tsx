import { StatusMessage } from '../StatusMessage/StatusMessage';

interface NoDataStatusProps {
  title: string;
  text?: string;
  className?: string;
}

function NoDataStatus({
  title,
  text = 'Try changing the filter or query.',
  className,
}: NoDataStatusProps) {
  return <StatusMessage icon="📭" title={title} text={text} className={className} />;
}

export { NoDataStatus };
