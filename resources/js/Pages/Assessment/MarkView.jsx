import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Card from "@/Components/Cards/Card";
import Table from "@/Components/Table/Table";
import THead from "@/Components/Table/THead";
import TBody from "@/Components/Table/TBody";
import TRow from "@/Components/Table/TRow";
import TH from "@/Components/Table/TH";
import TD from "@/Components/Table/TD.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {router, useForm} from "@inertiajs/react";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import ObjectSelection from "@/Components/ObjectSelection";
import Row from "@/Components/Row";
import Column from "@/Components/Column";
import {useEffect, useState} from "react";
import Alert from "@/Components/Alert.jsx";

export default function View({ auth, levels, subjects, students, routeInfo, flash }) {
    const { data, setData, post, processing, errors, clearErrors } = useForm({
        student_id: '',
        assessment_one: '',
        assessment_two: '',
        assessment_three: '',
        assessment_four: '',
        test_one: '',
        test_two: '',
        assignment_one: '',
        assignment_two: '',
        assignment_three: '',
        assignment_four: '',
        exam: '',
        form: '',
        subject: '',
    });

    const [filter, setFilter] = useState({
        form: '',
        subject: '',
    })

    const [filteredSubject, setFilteredSubject] = useState([])

    const [values, setValues] = useState({
        fieldDisabled: true,
        selectedIndex: -1,
    })
    function handleChange(e) {
        setFilter(filter => ({
            ...filter,
            [e.target.id]: e.target.value,
        }))
    }

    function filterStudents(){
        if(!filter.form || !filter.subject){
            alert('Select all filters')
            return;
        }
        router.get(
            route('mark'),
            { level: filter.form, subject: filter.subject },
            { replace: true, preserveScroll: true, },
            )
    }

    useEffect(() => {
        setFilter({
            form: routeInfo.query.level,
            subject: routeInfo.query.subject,
        })
    }, []);

    useEffect(() => {
        const newSubjects = subjects.data.filter((obj) => obj.levels.find((lvl) => lvl.name === filter.form))
        setFilteredSubject(newSubjects);
    }, [filter.form]);

    function selectRecord(index, student) {
        setValues({
            fieldDisabled: false,
            selectedIndex: index,
        })
        clearErrors()
        setData(data => ({
            ...data,
            student_id: student.id,
            form: routeInfo.query.level,
            subject: routeInfo.query.subject,
            assessment_one: student.assessmentOne?? '',
            assessment_two: student.assessmentTwo?? '',
            assessment_three: student.assessmentThree?? '',
            assessment_four: student.assessmentFour?? '',
            test_one: student.testOne?? '',
            test_two: student.testTwo?? '',
            assignment_one: student.assignmentOne?? '',
            assignment_two: student.assignmentTwo?? '',
            assignment_three: student.assignmentThree?? '',
            assignment_four: student.assignmentFour?? '',
            exam: student.exam?? '',
        }));

    }
    const submit = (e) => {
        e.preventDefault();

        post(route('mark.submit'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Card className='mb-2'
                  headerWidget={
                <div className="grid gap-x-8 gap-y-4 sm:grid-cols-1 md:grid-cols-3">
                    <div>
                        <ObjectSelection
                            className={'block w-full py-1 text-sm'}
                            data={levels.data}
                            id={'form'}
                            name="form"
                            value={filter.form}
                            onChange={(e) => handleChange(e)}
                            placeholder={'Select class'}
                        />
                    </div>
                    <div>
                        <ObjectSelection
                            className={'block w-full py-1 text-sm'}
                            data={filteredSubject}
                            id="subject"
                            name="subject"
                            value={filter.subject}
                            onChange={(e) => handleChange(e)}
                            placeholder={'Select subject'}
                        />
                    </div>
                    <div>
                        <PrimaryButton className="py-1 text-sm btn btn-primary" onClick={filterStudents}>
                            Fetch Students
                        </PrimaryButton>
                    </div>
                </div>
            }
            >
                {
                    flash.success && <Alert className='alert-info'>
                        <p>{ flash.success }</p>
                    </Alert>
                }

                <Row>
                    <Column xl='8' lg='8' md='6'>
                        <Table>
                            <THead>
                                <TRow className={'bg-dark text-white'}>
                                    <TH value={'ID#'} />
                                    <TH value={'Name'} />
                                    <TH value={'Gender'} />
                                </TRow>
                            </THead>
                            <TBody dataFound={students.data.length>0}>
                                {students.data.map((obj, index) => (
                                    <TRow
                                        className={'cursor-pointer ' + (values.selectedIndex === index? 'bg-primary':'')}
                                        key={obj.id}
                                        onClick={() => selectRecord(index, obj)}
                                    >
                                        <TD value={obj.number} className={values.selectedIndex === index? 'text-white':''} />
                                        <TD value={obj.name} className={values.selectedIndex === index? 'text-white':''} />
                                        <TD value={obj.gender} className={values.selectedIndex === index? 'text-white':''} />
                                    </TRow>
                                ))}

                            </TBody>
                        </Table>
                    </Column>

                    <Column xl='3' lg='3' md='5' className='offset-xl-1 offset-lg-1 offset-md-1'>
                        <form onSubmit={submit}>
                            <div className="border-2 p-2 rounded-md">
                                <h5 className="text-uppercase text-sm text-primary font-semibold">Class Assessment <small className="font-semibold">(10 each)</small></h5>
                                <div>
                                    <TextInput
                                        id="assessment_one"
                                        type="tel"
                                        name="assessment_one"
                                        value={data.assessment_one}
                                        className="mt-1 block w-full py-1 text-sm"
                                        isFocused={true}
                                        onChange={(e) => setData('assessment_one', e.target.value)}
                                        placeholder={'First'}
                                        disabled={values.fieldDisabled}
                                    />

                                    <InputError message={errors.assessment_one} className="mt-2" />
                                </div>

                                <div className="mt-2">
                                    <TextInput
                                        id="assessment_two"
                                        type="tel"
                                        name="assessment_two"
                                        value={data.assessment_two}
                                        className="mt-1 block w-full py-1 text-sm"
                                        onChange={(e) => setData('assessment_two', e.target.value)}
                                        placeholder={'Second'}
                                        disabled={values.fieldDisabled}
                                    />

                                    <InputError message={errors.assessment_two} className="mt-2" />
                                </div>

                                <div className="mt-2">
                                    <TextInput
                                        id="assessment_three"
                                        type="tel"
                                        name="assessment_three"
                                        value={data.assessment_three}
                                        className="mt-1 block w-full py-1 text-sm"
                                        onChange={(e) => setData('assessment_three', e.target.value)}
                                        placeholder={'Third'}
                                        disabled={values.fieldDisabled}
                                    />

                                    <InputError message={errors.assessment_three} className="mt-2" />
                                </div>

                                <div className="mt-2">
                                    <TextInput
                                        id="assessment_four"
                                        type="tel"
                                        name="assessment_four"
                                        value={data.assessment_four}
                                        className="mt-1 block w-full py-1 text-sm"
                                        onChange={(e) => setData('assessment_four', e.target.value)}
                                        placeholder={'Fourth'}
                                        disabled={values.fieldDisabled}
                                    />

                                    <InputError message={errors.assessment_four} className="mt-2" />
                                </div>
                            </div>

                            <div className="border-2 p-2 rounded-md mt-4">
                                <h5 className="text-uppercase text-sm text-primary font-semibold">Class Test <small className="font-semibold">(20 each)</small></h5>
                                <div>
                                    <TextInput
                                        id="test_one"
                                        type="tel"
                                        name="test_one"
                                        value={data.test_one}
                                        className="mt-1 block w-full py-1 text-sm"
                                        onChange={(e) => setData('test_one', e.target.value)}
                                        placeholder={'First'}
                                        disabled={values.fieldDisabled}
                                    />

                                    <InputError message={errors.test_one} className="mt-2" />
                                </div>

                                <div className="mt-2">
                                    <TextInput
                                        id="test_two"
                                        type="tel"
                                        name="test_two"
                                        value={data.test_two}
                                        className="mt-1 block w-full py-1 text-sm"
                                        onChange={(e) => setData('test_two', e.target.value)}
                                        placeholder={'Second'}
                                        disabled={values.fieldDisabled}
                                    />

                                    <InputError message={errors.test_two} className="mt-2" />
                                </div>
                            </div>

                            <div className="border-2 p-2 rounded-md mt-4">
                                <h5 className="text-uppercase text-sm text-primary font-semibold">Assignment/Project Work <small className="font-semibold">(5 each)</small></h5>
                                <div>
                                    <TextInput
                                        id="assignment_one"
                                        type="tel"
                                        name="assignment_one"
                                        value={data.assignment_one}
                                        className="mt-1 block w-full py-1 text-sm"
                                        onChange={(e) => setData('assignment_one', e.target.value)}
                                        placeholder={'First'}
                                        disabled={values.fieldDisabled}
                                    />

                                    <InputError message={errors.assignment_one} className="mt-2" />
                                </div>

                                <div className="mt-2">
                                    <TextInput
                                        id="assignment_two"
                                        type="tel"
                                        name="assignment_two"
                                        value={data.assignment_two}
                                        className="mt-1 block w-full py-1 text-sm"
                                        onChange={(e) => setData('assignment_two', e.target.value)}
                                        placeholder={'Second'}
                                        disabled={values.fieldDisabled}
                                    />

                                    <InputError message={errors.assignment_two} className="mt-2" />
                                </div>

                                <div className="mt-2">
                                    <TextInput
                                        id="assignment_three"
                                        type="tel"
                                        name="assignment_three"
                                        value={data.assignment_three}
                                        className="mt-1 block w-full py-1 text-sm"
                                        onChange={(e) => setData('assignment_three', e.target.value)}
                                        placeholder={'Third'}
                                        disabled={values.fieldDisabled}
                                    />

                                    <InputError message={errors.assignment_three} className="mt-2" />
                                </div>

                                <div className="mt-2">
                                    <TextInput
                                        id="assignment_four"
                                        type="tel"
                                        name="assignment_four"
                                        value={data.assignment_four}
                                        className="mt-1 block w-full py-1 text-sm"
                                        onChange={(e) => setData('assignment_four', e.target.value)}
                                        placeholder={'Fourth'}
                                        disabled={values.fieldDisabled}
                                    />

                                    <InputError message={errors.assignment_four} className="mt-2" />
                                </div>
                            </div>

                            <div className="border-2 p-2 rounded-md mt-4">
                                <h5 className="text-uppercase text-sm text-primary font-semibold">Exam</h5>
                                <div>
                                    <TextInput
                                        id="exam"
                                        type="tel"
                                        name="exam"
                                        value={data.exam}
                                        className="mt-1 block w-full py-1 text-sm"
                                        onChange={(e) => setData('exam', e.target.value)}
                                        placeholder={'Exam'}
                                        disabled={values.fieldDisabled}
                                    />

                                    <InputError message={errors.exam} className="mt-2" />
                                </div>
                            </div>


                            <div className="flex items-center justify-end mt-4">
                                <PrimaryButton className="ms-4 px-4 btn btn-primary" disabled={processing}>
                                    <i className="fas fa-save mr-2"></i>  Record
                                </PrimaryButton>
                            </div>
                        </form>
                    </Column>
                </Row>
            </Card>


        </AuthenticatedLayout>
        );
}
