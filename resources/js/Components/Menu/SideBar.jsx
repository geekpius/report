import {Link, usePage} from "@inertiajs/react";
import HorizontalDivider from "@/Components/HorizontalDivider";
import {isAdmin, isClassTeacher} from "@/helpers/functions.ts";

export default function SideBar({ user }) {
    const { auth } = usePage().props;

    let dashboardStatus = route().current('dashboard')? 'active':''
    let userStatus = route().current('users')? 'active':''
    let academicStatus = route().current('academic')? 'active':''
    let studentStatus = route().current('student')? 'active':''
    let subjectStatus = route().current('subject')? 'active':''
    let gradeStatus = route().current('grade')? 'active':''
    let markStatus = route().current('mark')? 'active':''
    let allMarkStatus = route().current('mark.all')? 'active':''
    let allAssessmentStatus = route().current('assessment')? 'active':''

    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <Link className="sidebar-brand d-flex align-items-center justify-content-center" href={route('dashboard')}>
                <img className="img-profile rounded-circle h-10 w-10"
                     src="assets/img/logo.png" alt={'Logo'}/>
                <div className="sidebar-brand-text mx-3">Report</div>
            </Link>

            <HorizontalDivider/>

            <li className={'nav-item ' + dashboardStatus}>
                <Link className="nav-link" href={route('dashboard')}>
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>

            {
                isAdmin(auth.roles) && <>
                    <HorizontalDivider />

                    <li className={'nav-item '+userStatus}>
                        <Link className="nav-link" href={route('users')}>
                            <i className="fas fa-fw fa-users"></i>
                            <span>Users</span></Link>
                    </li>

                    <HorizontalDivider />

                    <li className={'nav-item '+academicStatus}>
                        <Link className="nav-link" href={route('academic')}>
                            <i className="fas fa-fw fa-language"></i>
                            <span>Academics</span></Link>
                    </li>

                    <HorizontalDivider />

                    <li className={'nav-item '+studentStatus}>
                        <Link className="nav-link" href={route('student')}>
                            <i className="fas fa-fw fa-graduation-cap"></i>
                            <span>Students</span></Link>
                    </li>

                    <HorizontalDivider />

                    <li className={'nav-item '+subjectStatus}>
                        <Link className="nav-link" href={route('subject')}>
                            <i className="fas fa-fw fa-book-open"></i>
                            <span>Subjects</span></Link>
                    </li>

                    <HorizontalDivider />

                    <li className={'nav-item '+gradeStatus}>
                        <Link className="nav-link" href={route('grade')}>
                            <i className="fas fa-fw fa-sort-numeric-up"></i>
                            <span>Grades</span></Link>
                    </li>
                </>
            }

            <HorizontalDivider />

            <li className={'nav-item '+markStatus}>
                <Link className="nav-link" href={route('mark')}>
                    <i className="fas fa-fw fa-sort-numeric-up-alt"></i>
                    <span>Assign Marks</span></Link>
            </li>

            <HorizontalDivider />

            <li className={'nav-item '+allMarkStatus}>
                <Link className="nav-link" href={route('mark.all')}>
                    <i className="fas fa-fw fa-table"></i>
                    <span>View Marks</span></Link>
            </li>

            {
                (isAdmin(auth.roles) || isClassTeacher(auth.roles)) && <>
                    <HorizontalDivider />

                    <li className={'nav-item '+allAssessmentStatus}>
                        <Link className="nav-link" href={route('assessment')}>
                            <i className="fas fa-fw fa-table"></i>
                            <span>View Assessments</span></Link>
                    </li>
                </>
            }

        </ul>
    );
}
