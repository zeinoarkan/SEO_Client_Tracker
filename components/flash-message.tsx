type FlashMessageProps = {
    message?: string;
};

export const FlashMessage = ({ message }: FlashMessageProps) => {
    if (!message) {
        return null;
    }

    return (
        <div className="mb-4 rounded-md border border-green-300 bg-green-50 px-4 py-3 text-sm text-green-700">
            {message}
        </div>
    );
};

export default FlashMessage;