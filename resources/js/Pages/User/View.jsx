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
import Modal from "@/Components/Modals/Modal.jsx";
import ModalBody from "@/Components/Modals/ModalBody.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import ModalFooter from "@/Components/Modals/ModalFooter.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {useForm} from "@inertiajs/react";
import closeModal from "@/helpers/closeModal.ts";
import Checkbox from "@/Components/Checkbox.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import {useState} from "react";

export default function View({ auth, flash, users, roles, subjects, levels }) {
    const [subjectId, setSubjectId] = useState(0);
    const [levelId, setLevelId] = useState(0);
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        roles: [],
        subjects: [],
        levels: [],
    });


    const submit = (e) => {
        e.preventDefault();
        if((subjectId > 0 && data.subjects.length === 0) || (levelId > 0 && data.levels.length === 0)) return;

        post(route('users.store'), {
            onSuccess: () => closeModal('addUserModal')
        });
    };

    const handleCheckboxChecked = (role) => {
        const alreadyExist = data.roles.find(pId => pId === role.id);
        if(alreadyExist){
            setData('roles', data.roles.filter(pId => pId !== role.id));
        }else{
            setData('roles', [...data.roles, role.id]);
        }


        if(role.name === 'subject teacher'){
            setSubjectId(alreadyExist ? 0 : role.id)
        }
        if(role.name === 'class teacher'){
            setLevelId(alreadyExist ? 0 : role.id)
        }
    }

    const handleSubjectChecked = (subject) => {
        const alreadyExist = data.subjects.find(pId => pId === subject.id);
        if(alreadyExist){
            setData('subjects', data.subjects.filter(pId => pId !== subject.id));
        }else{
            setData('subjects', [...data.subjects, subject.id]);
        }
    }

    const handleLevelChecked = (level) => {
        const alreadyExist = data.levels.find(pId => pId === level.id);
        if(alreadyExist){
            setData('levels', data.levels.filter(pId => pId !== level.id));
        }else{
            setData('levels', [...data.levels, level.id]);
        }
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h1 className="h3 mb-0 text-gray-800">Users</h1>}
        >
            <Card className='mb-4'
                  headerWidget={<RLink className='btn-link text-decoration-none' to="#" data-toggle="modal" data-target="#addUserModal">
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
                            <TH value={'Name'} />
                            <TH value={'Email Address'} />
                            <TH value={'Roles'} />
                            <TH value={'Status'} />
                        </TRow>
                    </THead>
                    <TBody dataFound={users.data.length>0}>
                        {users.data.map((user) => (
                            <TRow key={user.id}>
                                <TD value={user.name} />
                                <TD value={user.email} />
                                <TD value={user.roles.map(role => role.name).join(", ")} />
                                <TD value={user.status} />
                            </TRow>
                        ))}

                    </TBody>
                </Table>
            </Card>

            <Modal id="addUserModal" tabIndex="-1" role="dialog" aria-labelledby="addUserModal"
                   aria-hidden="true" title={'Add User'} >
                <form onSubmit={submit}>
                    <ModalBody>

                        <div>
                            <TextInput
                                id="name"
                                type="text"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                isFocused={true}
                                onChange={(e) => setData('name', e.target.value)}
                                placeholder={'Enter name'}
                            />

                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder={'Enter email address'}
                            />

                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <TextInput
                                id="password"
                                type="text"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                onChange={(e) => setData('password', e.target.value)}
                                placeholder={'Enter password'}
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <h4 className="text-md font-medium text-gray-900 mt-4">
                                Roles
                            </h4>
                            <div className={'mt-3'}>
                                <div className={'flex flex-wrap gap-6'}>
                                    {
                                        roles.data.map((obj) => (
                                            <div className={'flex gap-2'} key={obj.id}>
                                                <Checkbox
                                                    name={obj.id}
                                                    checked={data.roles.find(pId => pId === obj.id) !== undefined}
                                                    className={'mt-0.5'}
                                                    onChange={() => {
                                                        handleCheckboxChecked(obj);
                                                    }}
                                                />
                                                <InputLabel value={obj.name} className={'capitalize'}/>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <InputError message={errors.roles} className="mt-2" />
                        </div>

                        {
                            data.roles.includes(subjectId) && <div className="mt-4">
                                <h4 className="text-md font-medium text-gray-900 mt-4">
                                    Subjects
                                </h4>
                                <div className={'mt-3'}>
                                    <div className={'flex flex-wrap gap-6'}>
                                        {
                                            subjects.data.map((obj) => (
                                                <div className={'flex gap-2'} key={obj.id}>
                                                    <Checkbox
                                                        name={obj.id}
                                                        checked={data.subjects.find(pId => pId === obj.id) !== undefined}
                                                        className={'mt-0.5'}
                                                        onChange={() => {
                                                            handleSubjectChecked(obj);
                                                        }}
                                                    />
                                                    <InputLabel value={obj.name}/>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>

                                <InputError message={errors.subjects} className="mt-2"/>
                            </div>
                        }

                        {
                            data.roles.includes(levelId) && <div className="mt-4">
                                <h4 className="text-md font-medium text-gray-900 mt-4">
                                    Class
                                </h4>
                                <div className={'mt-3'}>
                                    <div className={'flex flex-wrap gap-6'}>
                                        {
                                            levels.data.map((obj) => (
                                                <div className={'flex gap-2'} key={obj.id}>
                                                    <Checkbox
                                                        name={obj.id}
                                                        checked={data.levels.find(pId => pId === obj.id) !== undefined}
                                                        className={'mt-0.5'}
                                                        onChange={() => {
                                                            handleLevelChecked(obj);
                                                        }}
                                                    />
                                                    <InputLabel value={obj.name}/>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>

                                <InputError message={errors.levels} className="mt-2"/>
                            </div>
                        }

                    </ModalBody>

                    <ModalFooter>
                        <PrimaryButton className="btn bg-secondary text-white mr-3" type="button"
                                       data-dismiss="modal">Cancel</PrimaryButton>
                        <PrimaryButton className="ms-4 btn btn-primary" disabled={processing}>
                            Submit
                        </PrimaryButton>
                    </ModalFooter>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
}
