export default function PrimaryButton({ disabled = false, children, ...props }) {
    return (

        <button{...props} disabled={disabled}>{children}</button>
    );
}
