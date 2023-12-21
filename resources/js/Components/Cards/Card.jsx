import { Link } from '@inertiajs/react';

export default function Card({className='', headerTitle='', children}) {
    return (
        <div className={'card shadow '+className}>
            <div
                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">{headerTitle}</h6>
            </div>

            <div className="card-body">
                {children}
            </div>
        </div>
    );
}
