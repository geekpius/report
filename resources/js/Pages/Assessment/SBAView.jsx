import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Card from "@/Components/Cards/Card";
import Table from "@/Components/Table/Table";
import THead from "@/Components/Table/THead";
import TBody from "@/Components/Table/TBody";
import TRow from "@/Components/Table/TRow";
import TH from "@/Components/Table/TH";
import TD from "@/Components/Table/TD.jsx";
import ModalBody from "@/Components/Modals/ModalBody.jsx";
import ModalFooter from "@/Components/Modals/ModalFooter.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import Modal from "@/Components/Modals/Modal.jsx";
import {useForm} from "@inertiajs/react";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import SelectInput from "@/Components/SelectInput.jsx";
import closeModal from "@/helpers/closeModal.ts";
import ObjectSelection from "@/Components/ObjectSelection";

export default function View({ auth, students, levels }) {
    const { data, setData, post, processing, errors } = useForm({
        low: '',
        high: '',
        remark: '',
    });


    const submit = (e) => {
        e.preventDefault();

        post(route('grade.submit'), {
            onSuccess: () => closeModal('addGradeModal')
        });
    };


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h1 className="h3 mb-0 text-gray-800">SBA Assessment</h1>}
        >
            <Card className='mb-4'
                  headerWidget={
                <div className="grid gap-x-8 gap-y-4 sm:grid-cols-1 md:grid-cols-3">
                    <div>
                        <ObjectSelection
                            className={'block w-full'}
                            data={levels.data}
                            name="form"
                            // onChange={(e) => setData('type', e.target.value)}
                            placeholder={'Select class'}
                        />
                    </div>
                    <div>
                        <SelectInput
                            className={'block w-full'}
                            data={['Core', 'Elective']}
                            name="type"
                            // onChange={(e) => setData('type', e.target.value)}
                            placeholder={'Select subject'}
                        />
                    </div>
                    <div>
                        <PrimaryButton className="py-2 btn btn-primary" disabled={processing}>
                            Fetch Students
                        </PrimaryButton>
                    </div>
                </div>
            }
            >
                <Table>
                    <THead>
                        <TRow className={'bg-dark text-white'}>
                            <TH value={'Student #'} />
                            <TH value={'Name'} />
                            <TH value={'Gender'} />
                            <TH value={'Action'} />
                        </TRow>
                    </THead>
                    <TBody dataFound={students.data.length>0}>
                        {students.data.map((obj) => (
                            <TRow key={obj.id}>
                                <TD value={obj.number} />
                                <TD value={obj.name} />
                                <TD value={obj.gender} />
                                <TD>
                                </TD>
                            </TRow>
                        ))}

                    </TBody>
                </Table>
            </Card>

            <Modal id="addGradeModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                   aria-hidden="true" title={'Add Grade'} >
                <form onSubmit={submit}>
                    <ModalBody>

                        <div>
                            <TextInput
                                id="low"
                                type="tel"
                                name="low"
                                value={data.low}
                                className="mt-1 block w-full"
                                isFocused={true}
                                onChange={(e) => setData('low', e.target.value)}
                                placeholder={'Enter low mark'}
                            />

                            <InputError message={errors.low} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <TextInput
                                id="high"
                                type="tel"
                                name="high"
                                value={data.high}
                                className="mt-1 block w-full"
                                onChange={(e) => setData('high', e.target.value)}
                                placeholder={'Enter high mark'}
                            />

                            <InputError message={errors.high} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <SelectInput
                                className={'mt-1 block w-full'}
                                data={['High', 'Higher', 'Highest', 'Average', 'High Average', 'Low Average', 'Low']}
                                value={data.remark}
                                name="remark"
                                onChange={(e) => setData('remark', e.target.value)}
                                placeholder={'Select remark'}
                            />

                            <InputError message={errors.term} className="mt-2" />
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
