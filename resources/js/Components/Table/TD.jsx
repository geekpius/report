

export default function TD({children, value=null, ...props}) {
    return (
        <td {...props}>
            {value?? children}
        </td>
    );
}
