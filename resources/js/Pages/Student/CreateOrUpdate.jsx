import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm } from '@inertiajs/react';
import RLink from "@/Components/RLink.jsx";
import Card from "@/Components/Cards/Card.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import Row from "@/Components/Row";
import Column from "@/Components/Column";
import SelectInput from "@/Components/SelectInput";
import ObjectSelection from "@/Components/ObjectSelection";

export default function CreateOrUpdate({ auth, student, levels }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        gender: '',
        form: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('student.submit'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h1 className="h3 mb-0 text-gray-800">Students</h1>}
        >
            <Card className='mb-4'
                  headerWidget={<RLink className='btn-link text-decoration-none' to={route('student')}>
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
                                        placeholder={'Enter student name'}
                                    />

                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <SelectInput
                                        className={'mt-1 block w-full'}
                                        data={['Male', 'Female', 'Other']}
                                        value={data.gender}
                                        name="gender"
                                        onChange={(e) => setData('gender', e.target.value)}
                                        placeholder={'Select gender'}
                                    />

                                    <InputError message={errors.gender} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <ObjectSelection
                                        className={'mt-1 block w-full'}
                                        data={levels.data}
                                        value={data.form}
                                        name="form"
                                        onChange={(e) => setData('form', e.target.value)}
                                        placeholder={'Select form'}
                                    />


                                    <InputError message={errors.form} className="mt-2" />
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
