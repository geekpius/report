
export default function RLink({to, children, ...props}) {
    return (
        <a href={to} {...props}>
            {children}
        </a>
    );
}
