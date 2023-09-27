interface ErrorMessageProps {
    error: string;
}
export default function ErrorMessage({ error }: ErrorMessageProps) {
    return (
        <h2 className="font-bold text-xl text-red-600 text-center">{error}</h2>
    )
}
