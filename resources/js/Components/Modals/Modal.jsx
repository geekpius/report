

export default function Modal({ title, children, ...props }) {

    return (
        <div className="modal fade" {...props}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
