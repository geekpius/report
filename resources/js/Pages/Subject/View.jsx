import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Card from "@/Components/Cards/Card";
import Table from "@/Components/Table/Table";
import THead from "@/Components/Table/THead";
import TBody from "@/Components/Table/TBody";
import TRow from "@/Components/Table/TRow";
import TH from "@/Components/Table/TH";
import TD from "@/Components/Table/TD.jsx";
import RLink from "@/Components/RLink";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import Modal from "@/Components/Modals/Modal.jsx";
import ModalBody from "@/Components/Modals/ModalBody.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import ModalFooter from "@/Components/Modals/ModalFooter.jsx";
import {useForm} from "@inertiajs/react";
import {useState} from "react";
import Checkbox from "@/Components/Checkbox.jsx";
import closeModal from "@/helpers/closeModal.ts";

export default function View({ auth, subjects, levels }) {
    const { data, setData, post, processing, errors } = useForm({
        subject_id: '',
        form_ids: [],
    });

    let [subject, setSubject] = useState('')

    const submit = (e) => {
        e.preventDefault();
        post(route('subject.assign.class'), {
            onSuccess: function (){
                closeModal('assignClass')
                setData('form_ids', [])
            },
        });
    };

    function selectForm(id){
        if(data.form_ids.includes(id)){
            const newIds = data.form_ids.filter((obj) => obj !== id)
            setData('form_ids', newIds)
        }else{
            setData('form_ids', [...data.form_ids, id])
        }
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h1 className="h3 mb-0 text-gray-800">Subjects</h1>}
        >
            <Card className='mb-4'
                  headerWidget={<RLink className='btn-link text-decoration-none' to={route('subject.create')}>
                      <i className="fas fa-fw fa-plus-circle"></i> Add New
            </RLink>}
            >
                <Table>
                    <THead>
                        <TRow className={'bg-dark text-white'}>
                            <TH value={'Name'} />
                            <TH value={'Type'} />
                            <TH value={'Assigned Classes'} />
                            <TH value={'Action'} />
                        </TRow>
                    </THead>
                    <TBody dataFound={subjects.data.length>0}>
                        {subjects.data.map((obj) => (
                            <TRow key={obj.id}>
                                <TD value={obj.name} />
                                <TD value={obj.type} />
                                <TD>
                                    {obj.levels.length === 0 ? 'N/A' :
                                        obj.levels.map((lvl, index) => (
                                        <span className={index === obj.levels.length-1? '':'mr-2'} key={lvl.id}>{lvl.name}{index !== obj.levels.length-1 && ','} </span>
                                    ))}
                                </TD>
                                <TD>
                                    <RLink to='#' onClick={()=>{
                                        setSubject(obj.name)
                                        setData('subject_id', obj.id)
                                    }} className="ms-4 btn btn-link text-decoration-none btn-sm" data-toggle="modal" data-target="#assignClass">
                                        Assign Class
                                    </RLink>
                                </TD>
                            </TRow>
                        ))}

                    </TBody>
                </Table>
            </Card>

            <Modal id="assignClass" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                   aria-hidden="true" title={'Assign Class'} >
                <form onSubmit={submit}>
                    <ModalBody>
                        <div>
                            <TextInput
                                id="subject_id"
                                type="text"
                                name="subject_id"
                                readOnly={true}
                                hidden={true}
                                value={data.subject_id}
                                className="mt-1 block w-full"
                                placeholder={'Select subject'}
                            />
                            <TextInput
                                id="subject"
                                type="text"
                                readOnly={true}
                                name="subject"
                                value={subject}
                                className="mt-1 block w-full"
                                placeholder={'Select subject'}
                            />

                            <InputError message={errors.subject_id} className="mt-2" />
                        </div>
                        <div className='mt-4'>
                            <div className="grid gap-x-8 gap-y-4 sm:grid-cols-1 md:grid-cols-3">
                                {levels.data.map((obj) => (
                                    <label
                                        key={obj.id}
                                        className="flex items-center">
                                        <Checkbox
                                            name="form_ids[]"
                                            checked={data.form_ids.includes(obj.id)}
                                            onChange={() => selectForm(obj.id) }
                                        />
                                        <span className="ms-2 text-sm text-gray-600">{obj.name}</span>
                                    </label>
                                ))}
                            </div>
                            <InputError message={errors.form_ids} className="mt-2" />
                        </div>

                    </ModalBody>

                    <ModalFooter>
                        <PrimaryButton className="btn bg-secondary text-white mr-3" type="button" data-dismiss="modal">Cancel</PrimaryButton>
                        <PrimaryButton className="ms-4 btn btn-primary" disabled={processing}>
                            Assign
                        </PrimaryButton>
                    </ModalFooter>
                </form>
            </Modal>

        </AuthenticatedLayout>
        );
}
