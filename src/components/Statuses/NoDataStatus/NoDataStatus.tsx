import { StatusMessage } from '../StatusMessage/StatusMessage';

interface NoDataStatusProps {
  title: string;
  text?: string;
  className?: string;
  action?: React.ReactNode;
}

function NoDataStatus({
  title,
  text = 'Try changing the filter or query.',
  className,
  action,
}: NoDataStatusProps) {
  return (
    <StatusMessage icon="📭" title={title} text={text} className={className} action={action} />
  );
}

export { NoDataStatus };
