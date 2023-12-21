import { Link } from '@inertiajs/react';

export default function Column({children, className='', xl='', lg = '', md = '', sm=''}) {
    let extraLarge = xl === ''? '':`col-xl-${xl} `
    let large = lg === ''? '':`col-lg-${lg} `
    let medium = md === ''? '':`col-md-${md} `
    let small = sm === ''? '':`col-sm-${sm} `
    return (
        <div className={extraLarge + large + medium + small + className}>
            {children}
        </div>
    );
}
