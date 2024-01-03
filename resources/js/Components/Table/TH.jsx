

export default function TH({children, value=null, ...props}) {
    return (
        <th {...props}>
            {value?? children}
        </th>
    );
}
