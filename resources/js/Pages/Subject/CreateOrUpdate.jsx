import { useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import RLink from "@/Components/RLink.jsx";
import Card from "@/Components/Cards/Card.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import Row from "@/Components/Row";
import Column from "@/Components/Column";
import SelectInput from "@/Components/SelectInput";
import ObjectSelection from "@/Components/ObjectSelection";

export default function CreateOrUpdate({ auth, subject }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        type: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('subject.submit'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h1 className="h3 mb-0 text-gray-800">Subjects</h1>}
        >
            <Card className='mb-4'
                  headerWidget={<RLink className='btn-link text-decoration-none' to={route('subject')}>
                      <i className="fas fa-fw fa-eye"></i> View
                  </RLink>}
            >
                <Row>
                    <Column xl={'4'} md={'6'} className={'offset-xl-4 offset-md-3'}>
                        <div className="w-full sm:max-w-md overflow-hidden">
                            <form onSubmit={submit}>
                                <div>
                                    <TextInput
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        onChange={(e) => setData('name', e.target.value)}
                                        placeholder={'Enter subject name'}
                                    />

                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <SelectInput
                                        className={'mt-1 block w-full'}
                                        data={['Core', 'Elective']}
                                        value={data.type}
                                        name="type"
                                        onChange={(e) => setData('type', e.target.value)}
                                        placeholder={'Select type'}
                                    />

                                    <InputError message={errors.type} className="mt-2" />
                                </div>


                                <div className="flex items-center justify-end mt-4">
                                    <PrimaryButton className="ms-4 btn btn-primary" disabled={processing}>
                                        Submit
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </Column>
                </Row>

            </Card>

        </AuthenticatedLayout>
    );
}
