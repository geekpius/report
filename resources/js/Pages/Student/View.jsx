import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Card from "@/Components/Cards/Card";
import Table from "@/Components/Table/Table";
import THead from "@/Components/Table/THead";
import TBody from "@/Components/Table/TBody";
import TRow from "@/Components/Table/TRow";
import TH from "@/Components/Table/TH";
import TD from "@/Components/Table/TD.jsx";
import RLink from "@/Components/RLink";
import Alert from "@/Components/Alert.jsx";
import ModalBody from "@/Components/Modals/ModalBody.jsx";
import ModalFooter from "@/Components/Modals/ModalFooter.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import Modal from "@/Components/Modals/Modal.jsx";
import {useState} from "react";
import capitalize from "@/helpers/capitalize.ts";
import {useForm} from "@inertiajs/react";
import closeModal from "@/helpers/closeModal.ts";

export default function View({ auth, flash, students }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { data, setData, put, processing } = useForm({
        id: '',
        status: '',
    });

    const setValues = (student) => {
        const isActive = student.status === 'active';
        setTitle(`Ready to ${isActive? 'Drop': 'Activate'} Student`);
        setDescription(`You are about to ${isActive? 'drop': 'activate'} '${capitalize(student.fullName)}'. Do you wish to continue?`);

        setData(data => ({
            ...data,
            id: student.id,
            status: isActive ? 'dropped out' : 'active',
        }));
    }

    const updateStatus = () => {
        put(route('student.update.status', { student: data.id }), {
            onSuccess: () => closeModal('dropModal')
        });
    }


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h1 className="h3 mb-0 text-gray-800">Students</h1>}
        >
            <Card className='mb-4'
                  headerWidget={<RLink className='btn-link text-decoration-none' to={route('student.create')}>
                      <i className="fas fa-fw fa-plus-circle"></i> Add New
            </RLink>}
            >
                {
                    flash.success && <Alert className='alert-info'>
                        <p>{ flash.success }</p>
                    </Alert>
                }

                <Table>
                    <THead>
                        <TRow className={'bg-dark text-white'}>
                            <TH value={'Number#'} />
                            <TH value={'Full Name'} />
                            <TH value={'Gender'} />
                            <TH value={'Class'} />
                            <TH value={'Status'} />
                            <TH value={'Action'} />
                        </TRow>
                    </THead>
                    <TBody dataFound={students.data.length>0}>
                        {students.data.map((student) => (
                            <TRow key={student.id}>
                                <TD value={student.number} />
                                <TD className={'!uppercase'} value={student.fullName} />
                                <TD value={student.gender} />
                                <TD value={student.form} />
                                <TD value={student.status} />
                                <TD title={'Drop student'}>
                                    {
                                        student.status === 'active' ?
                                            <button
                                                onClick={() => {
                                                    setValues(student);
                                                }}
                                                className={'flex items-center gap-2'}
                                                data-toggle="modal"
                                                data-target="#dropModal"
                                            >
                                                <i className={'fa fa-times-circle text-danger'}/>
                                                Drop student
                                            </button>
                                            :
                                            <button
                                                onClick={() => {
                                                    setValues(student);
                                                }}
                                                className={'flex items-center gap-2'}
                                                data-toggle="modal"
                                                data-target="#dropModal"
                                            >
                                                <i className={'fa fa-check-circle text-primary'}/>
                                                Activate student
                                            </button>
                                    }
                                </TD>
                            </TRow>
                        ))}

                    </TBody>
                </Table>
            </Card>

            <Modal id="dropModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                   aria-hidden="true" title={title} >
                <ModalBody>
                    {description}
                </ModalBody>
                <ModalFooter>
                    <PrimaryButton className="btn bg-secondary text-white mr-3 px-4" type="button" data-dismiss="modal">No</PrimaryButton>
                    <PrimaryButton
                        onClick={updateStatus}
                        className="btn btn-primary px-4"
                        disabled={processing} to="#"
                    >Yes</PrimaryButton>
                </ModalFooter>
            </Modal>
        </AuthenticatedLayout>
        );
}
