
import RLink from "@/Components/RLink";
import {usePage} from "@inertiajs/react";
import {isAdmin} from "@/helpers/functions.ts";

export default function NavBar({ user }) {
    const { auth } = usePage().props;
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>


            <ul className="navbar-nav ml-auto">

                <li className="nav-item dropdown no-arrow">
                    <RLink className="nav-link dropdown-toggle" to="#" id="userDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">{user.name}</span>
                        <img className="img-profile rounded-circle"
                             src="assets/img/undraw_profile.svg"  alt={'image'}/>
                    </RLink>

                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                         aria-labelledby="userDropdown">
                        {
                            isAdmin(auth.roles) &&  <RLink className="dropdown-item" to={route('setting')}>
                                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                Settings
                            </RLink>
                        }
                        <div className="dropdown-divider"></div>
                        <RLink className="dropdown-item" to="#" data-toggle="modal" data-target="#logoutModal">
                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Logout
                        </RLink>
                    </div>
                </li>

            </ul>

        </nav>
    );
}
