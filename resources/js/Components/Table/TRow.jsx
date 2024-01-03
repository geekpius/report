

export default function TRow({children, ...props}) {
    return (
        <tr {...props}>
            {children}
        </tr>
    );
}
