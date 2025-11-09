import { StatusMessage } from "../StatusMessage/StatusMessage";

interface StatusErrorProps {
    title: string;
    text?: string;
}

function ErrorStatus({
    title,
    text = "Please check your connection and try again."
}: StatusErrorProps) {
    return (
        <StatusMessage
            role="alert"
            icon="⚠️"
            title={title}
            text={text}
        />
    );
}

export { ErrorStatus }