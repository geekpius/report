

export default function TD({className = '', children, value=null, ...props}) {
    return (
        <td className={`capitalize ${className}`} {...props}>
            {value?? children}
        </td>
    );
}
