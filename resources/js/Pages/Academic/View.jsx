import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Card from "@/Components/Cards/Card";
import Table from "@/Components/Table/Table";
import THead from "@/Components/Table/THead";
import TBody from "@/Components/Table/TBody";
import TRow from "@/Components/Table/TRow";
import TH from "@/Components/Table/TH";
import TD from "@/Components/Table/TD.jsx";
import RLink from "@/Components/RLink";
import ModalBody from "@/Components/Modals/ModalBody.jsx";
import ModalFooter from "@/Components/Modals/ModalFooter.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import Modal from "@/Components/Modals/Modal.jsx";
import {useForm} from "@inertiajs/react";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import SelectInput from "@/Components/SelectInput.jsx";
import closeModal from "@/helpers/closeModal.ts";

export default function View({ auth, academics }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        year: '',
        term: '',
        next_term_date: '',
        total_attendant: '',
    });


    const submit = (e) => {
        e.preventDefault();

        post(route('academic.submit'), {
            onSuccess: () => closeModal('addAcademicModal')
        });
    };


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h1 className="h3 mb-0 text-gray-800">Academics</h1>}
        >
            <Card className='mb-4'
                  headerWidget={<RLink className='btn-link text-decoration-none' to="#" data-toggle="modal" data-target="#addAcademicModal">
                      <i className="fas fa-fw fa-plus-circle"></i> Add New
            </RLink>}
            >
                <Table>
                    <THead>
                        <TRow className={'bg-dark text-white'}>
                            <TH value={'Year'} />
                            <TH value={'Term'} />
                            <TH value={'Next Term Date'} />
                            <TH value={'Total Attendant'} />
                        </TRow>
                    </THead>
                    <TBody dataFound={academics.data.length>0}>
                        {academics.data.map((obj) => (
                            <TRow key={obj.id}>
                                <TD value={obj.year} />
                                <TD value={obj.term} />
                                <TD value={obj.nextTermDate} />
                                <TD value={obj.totalAttendant} />
                            </TRow>
                        ))}

                    </TBody>
                </Table>
            </Card>

            <Modal id="addAcademicModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                   aria-hidden="true" title={'Add Academic'} >
                <form onSubmit={submit}>
                    <ModalBody>

                        <div>
                            <TextInput
                                id="year"
                                type="text"
                                name="year"
                                value={data.year}
                                className="mt-1 block w-full"
                                isFocused={true}
                                onChange={(e) => setData('year', e.target.value)}
                                placeholder={'Enter academic year'}
                            />

                            <InputError message={errors.year} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <SelectInput
                                className={'mt-1 block w-full'}
                                data={['One', 'Two', 'Three']}
                                value={data.term}
                                name="type"
                                onChange={(e) => setData('term', e.target.value)}
                                placeholder={'Select term'}
                            />

                            <InputError message={errors.term} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <TextInput
                                id="next_term_date"
                                type="date"
                                name="next_term_date"
                                value={data.next_term_date}
                                className="mt-1 block w-full"
                                onChange={(e) => setData('next_term_date', e.target.value)}
                                placeholder={'Select next term date'}
                            />

                            <InputError message={errors.next_term_date} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <TextInput
                                id="total_attendant"
                                type="tel"
                                name="total_attendant"
                                value={data.total_attendant}
                                className="mt-1 block w-full"
                                onChange={(e) => setData('total_attendant', e.target.value)}
                                placeholder={'Enter total attendant'}
                            />

                            <InputError message={errors.total_attendant} className="mt-2" />
                        </div>

                    </ModalBody>

                    <ModalFooter>
                        <PrimaryButton className="btn bg-secondary text-white mr-3" type="button" data-dismiss="modal">Cancel</PrimaryButton>
                        <PrimaryButton className="ms-4 btn btn-primary" disabled={processing}>
                            Submit
                        </PrimaryButton>
                    </ModalFooter>
                </form>
            </Modal>

        </AuthenticatedLayout>
        );
}
