import { Link } from '@inertiajs/react';

export default function DataCard({className='', title='', data='', icon=''}) {
    return (
        <div className={'card shadow h-100 py-2 ' + className}>
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            {title}
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{data}</div>
                    </div>
                    <div className="col-auto">
                        <i className={'fa-2x text-gray-300 ' + icon}></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
