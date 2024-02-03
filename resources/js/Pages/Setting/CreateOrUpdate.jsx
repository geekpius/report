import { useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm } from '@inertiajs/react';
import Card from "@/Components/Cards/Card.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import Row from "@/Components/Row";
import Column from "@/Components/Column";
import Alert from "@/Components/Alert.jsx";

export default function CreateOrUpdate({ auth, settings, flash }) {
    const { data, setData, post, processing, errors } = useForm({
        show_position: true,
        school_name: '',
        school_postal: '',
        motto: '',
        school_phone: '',
        sba_percent: 0,
        exam_percent: 0,
    });

    useEffect(() => {
        setData(data => ({
            ...data,
            show_position: settings.data.showPosition,
            school_name: settings.data.schoolName?? '',
            school_postal: settings.data.schoolPostal?? '',
            motto: settings.data.motto?? '',
            school_phone: settings.data.schoolPhone?? '',
            sba_percent: settings.data.sbaPercent?? 0,
            exam_percent: settings.data.examPercent?? 0,
        }));
    }, []);
    const submit = (e) => {
        e.preventDefault();

        post(route('setting.store'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h1 className="h3 mb-0 text-gray-800">Settings</h1>}
        >
            {
                flash.success && <Alert className='alert-info'>
                    <p>{ flash.success }</p>
                </Alert>
            }

            <Card className='mb-4'>
                <Row>
                    <Column xl={'4'} md={'6'} className={'offset-xl-4 offset-md-3'}>
                        <div className="w-full sm:max-w-md overflow-hidden">
                            <form onSubmit={submit}>
                                <div>
                                    <TextInput
                                        id="school_name"
                                        type="text"
                                        name="school_name"
                                        value={data.school_name}
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        onChange={(e) => setData('school_name', e.target.value)}
                                        placeholder={'Enter school name'}
                                    />

                                    <InputError message={errors.school_name} className="mt-2" />
                                </div>
                                <div className="mt-2">
                                    <TextInput
                                        id="school_postal"
                                        type="text"
                                        name="school_postal"
                                        value={data.school_postal}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('school_postal', e.target.value)}
                                        placeholder={'Enter school postal'}
                                    />

                                    <InputError message={errors.school_postal} className="mt-2" />
                                </div>
                                <div className="mt-2">
                                    <TextInput
                                        id="motto"
                                        type="text"
                                        name="motto"
                                        value={data.motto}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('motto', e.target.value)}
                                        placeholder={'Enter motto'}
                                    />

                                    <InputError message={errors.motto} className="mt-2" />
                                </div>
                                <div className="mt-2">
                                    <TextInput
                                        id="school_phone"
                                        type="text"
                                        name="school_phone"
                                        value={data.school_phone}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('school_phone', e.target.value)}
                                        placeholder={'Enter school phones'}
                                    />

                                    <InputError message={errors.school_phone} className="mt-2" />
                                </div>
                                <div className="mt-2">
                                    <TextInput
                                        id="sba_percent"
                                        type="tel"
                                        name="sba_percent"
                                        value={data.sba_percent}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('sba_percent', e.target.value)}
                                        placeholder={'Enter sba percent'}
                                    />

                                    <InputError message={errors.sba_percent} className="mt-2" />
                                </div>
                                <div className="mt-2">
                                    <TextInput
                                        id="exam_percent"
                                        type="tel"
                                        name="exam_percent"
                                        value={data.exam_percent}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('exam_percent', e.target.value)}
                                        placeholder={'Enter exam percent'}
                                    />

                                    <InputError message={errors.exam_percent} className="mt-2" />
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
