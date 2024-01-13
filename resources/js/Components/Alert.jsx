
export default function Alert({ className, children }) {
    return (
        <div className={'alert '+className} role="alert">
            { children }
        </div>
    );
}
