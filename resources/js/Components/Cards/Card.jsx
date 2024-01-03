
export default function Card({className='', headerTitle='', headerWidget=null, children}) {
    return (
        <div className={'card shadow '+className}>
            <div
                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                {
                    headerWidget === null ? <h6 className="m-0 font-weight-bold text-primary">{headerTitle}</h6>
                        : headerWidget
                }
            </div>

            <div className="card-body">
                {children}
            </div>
        </div>
    );
}
