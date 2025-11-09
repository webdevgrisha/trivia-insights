import { StatusMessage } from "../StatusMessage/StatusMessage";

interface NoDataStatusProps {
    title: string;
    text?: string;
}

function NoDataStatus({ title, text = "Try changing the filter or query." }: NoDataStatusProps) {
    return (
        <StatusMessage
            icon="📭"
            title={title}
            text={text}
        />
    );
}

export {
    NoDataStatus
}