import {Link} from "@inertiajs/react";
import HorizontalDivider from "@/Components/HorizontalDivider";

export default function SideBar({ user }) {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <Link className="sidebar-brand d-flex align-items-center justify-content-center" href={route('dashboard')}>
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Report <sup>2</sup></div>
            </Link>

            <HorizontalDivider />

            <li className="nav-item active">
                <Link className="nav-link" href={route('dashboard')}>
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>

            <HorizontalDivider />

            <div className="sidebar-heading">
                Interface
            </div>

            <li className="nav-item">
                <Link className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                   aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Components</span>
                </Link>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <Link className="collapse-item" href={route('dashboard')}>Buttons</Link>
                        <Link className="collapse-item" href={route('dashboard')}>Cards</Link>
                    </div>
                </div>
            </li>

        </ul>
    );
}
