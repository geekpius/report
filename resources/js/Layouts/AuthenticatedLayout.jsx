
import SideBar from "@/Components/Menu/SideBar";
import NavBar from "@/Components/Menu/NavBar";
import Footer from "@/Components/Menu/Footer";
import RLink from "@/Components/RLink";
import Modal from "@/Components/Modals/Modal.jsx";
import PrimaryButton from "@/Components/PrimaryButton";
import ModalBody from "@/Components/Modals/ModalBody.jsx";
import ModalFooter from "@/Components/Modals/ModalFooter";
import {useForm} from "@inertiajs/react";

export default function Authenticated({ user, header, children }) {
    const { post } = useForm({});
    const submit = (e) => {
        e.preventDefault();

        post(route('logout'));
    };

    return (
        <>
            <div id="wrapper">
                <SideBar user={user} />

                <div id="content-wrapper" className="d-flex flex-column">

                    <div id="content">

                        <NavBar user={user} />

                        <div className="container-fluid">

                            {
                                header && <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    {header}
                                </div>
                            }

                            {children}

                        </div>

                    </div>

                    <Footer />

                </div>
            </div>

            <RLink className="scroll-to-top rounded" to='#page-top'>
                <i className="fas fa-angle-up"></i>
            </RLink>

            <Modal id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                   aria-hidden="true" title={'Ready to Leave?'} >
                <ModalBody>
                    Select "Logout" below if you are ready to end your current
                    session.
                </ModalBody>
                <ModalFooter>
                    <PrimaryButton className="btn bg-secondary text-white mr-3" type="button" data-dismiss="modal">Cancel</PrimaryButton>
                    <RLink className="btn btn-primary" data-dismiss="modal" to="#" onClick={submit}>Logout</RLink>
                </ModalFooter>
            </Modal>
        </>
    );
}
