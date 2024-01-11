
export default function closeModal(elementId: string): void
{
    $(document.getElementById(elementId)).modal('hide');
}
