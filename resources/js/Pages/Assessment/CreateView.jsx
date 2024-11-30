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
import {useState} from "react";
import Alert from "@/Components/Alert.jsx";
import SelectInput from "@/Components/SelectInput";
import useLevel from "@/helpers/useLevel.ts";
import {isAdmin, isClassTeacher} from "@/helpers/functions.ts";

export default function View({ auth, levels, students, academic, routeInfo, flash }) {
    const { data, setData, post, processing, errors, clearErrors } = useForm({
        name: '',
        student_id: '',
        year: '',
        term: '',
        level: '',
        number_in_class: '',
        attendance: '',
        promoted: '',
        conduct: '',
        attitude: '',
        interest: '',
        remark: '',
        head_remark: '',
    });

    const [form, setForm] = useLevel(routeInfo.query.level)

    const [values, setValues] = useState({
        fieldDisabled: true,
        selectedIndex: -1,
    })
    function handleChange(e) {
        setForm(e.target.value)
    }

    function filterStudents(){
        if(!form){
            alert('Select all filters')
            return;
        }
        router.get(
            route('assessment.create'),
            { level: form},
            { replace: true, preserveScroll: true, },
            )
    }

    function selectRecord(index, student) {
        setValues({
            fieldDisabled: false,
            selectedIndex: index,
        })
        clearErrors()
        setData(data => ({
            ...data,
            name: student.name,
            student_id: student.id,
            year: academic.data.year,
            term: academic.data.term,
            level: routeInfo.query.level,
            number_in_class: students.data.length,
            attendance: student.attendance?? '',
            promoted: student.promoted?? routeInfo.query.level,
            conduct: student.conduct?? '',
            attitude: student.attitude?? '',
            interest: student.interest?? '',
            remark: student.remark?? '',
            head_remark: student.headRemark?? '',
        }));

    }
    const submit = (e) => {
        e.preventDefault();

        post(route('assessment.store'));
    };

    const PROMOTED_LIST = [...levels.data, {value: 'Repeated', name: 'Repeated'}, {value: 'On Trial', name: 'On Trial'}]

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
                            value={form}
                            onChange={(e) => handleChange(e)}
                            placeholder={'Select class'}
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
                                <h5 className="text-uppercase text-sm text-primary font-semibold">Student Info</h5>
                                <div>
                                    <TextInput
                                        id="student_id"
                                        type="tel"
                                        name="student_id"
                                        value={data.student_id}
                                        className="mt-1 w-full py-1 text-sm hidden"
                                        onChange={(e) => setData('student_id', e.target.value)}
                                        placeholder={'Student id'}
                                        disabled={true}
                                    />
                                    <TextInput
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full py-1 text-sm"
                                        onChange={(e) => setData('name', e.target.value)}
                                        placeholder={'Student name'}
                                        disabled={true}
                                    />

                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div className="mt-2">
                                    <TextInput
                                        id="year"
                                        type="text"
                                        name="year"
                                        value={data.year}
                                        className="mt-1 block w-full py-1 text-sm"
                                        onChange={(e) => setData('year', e.target.value)}
                                        placeholder={'Current year'}
                                        disabled={true}
                                    />

                                    <InputError message={errors.year} className="mt-2" />
                                </div>

                                <div className="mt-2">
                                    <TextInput
                                        id="term"
                                        type="text"
                                        name="term"
                                        value={data.term}
                                        className="mt-1 block w-full py-1 text-sm"
                                        onChange={(e) => setData('term', e.target.value)}
                                        placeholder={'Current term'}
                                        disabled={true}
                                    />

                                    <InputError message={errors.term} className="mt-2" />
                                </div>

                                <div className="mt-2">
                                    <TextInput
                                        id="number_in_class"
                                        type="tel"
                                        name="number_in_class"
                                        value={data.number_in_class}
                                        className="mt-1 block w-full py-1 text-sm"
                                        onChange={(e) => setData('number_in_class', e.target.value)}
                                        placeholder={'Number in class'}
                                        disabled={true}
                                    />

                                    <InputError message={errors.number_in_class} className="mt-2" />
                                </div>
                            </div>


                            <div className="border-2 p-2 rounded-md mt-4">
                                <h5 className="text-uppercase text-sm text-primary font-semibold">Assessment Info</h5>
                                <div>
                                    <TextInput
                                        id="attendance"
                                        type="tel"
                                        name="attendance"
                                        value={data.attendance}
                                        className="mt-1 block w-full py-1 text-sm"
                                        onChange={(e) => setData('attendance', e.target.value)}
                                        placeholder={'Enter attendance'}
                                        disabled={values.fieldDisabled}
                                    />

                                    <InputError message={errors.attendance} className="mt-2" />
                                </div>

                                {
                                    isAdmin(auth.roles) && <>
                                        <div className="mt-2">
                                            <ObjectSelection
                                                className={'block w-full py-1 text-sm'}
                                                data={PROMOTED_LIST || []}
                                                id={'promoted'}
                                                name="promoted"
                                                value={data.promoted}
                                                onChange={(e) => setData('promoted', e.target.value)}
                                                placeholder={'Select promoted'}
                                                disabled={values.fieldDisabled || data.term !== 'three'}
                                            />
                                            <InputError message={errors.promoted} className="mt-2"/>
                                        </div>

                                        <div className="mt-2">
                                            <SelectInput
                                                optionClassName={'capitalize'}
                                                className={'block w-full py-1 text-sm'}
                                                data={['Satisfactory', 'Respectful', 'Humble', 'Approachable', 'Truant', 'Bully', 'Sociable']}
                                                id={'conduct'}
                                                name="conduct"
                                                value={data.conduct}
                                                onChange={(e) => setData('conduct', e.target.value)}
                                                placeholder={'Select conduct'}
                                                disabled={values.fieldDisabled}
                                            />
                                            <InputError message={errors.conduct} className="mt-2"/>
                                        </div>

                                        <div className="mt-2">
                                            <SelectInput
                                                optionClassName={'capitalize'}
                                                className={'block w-full py-1 text-sm'}
                                                data={['Hardworking', 'Not serious in class', 'Quiet in class', 'Peer influence', 'Curios', 'Slow', 'Lazy', 'Dependable', 'Short attention span', 'Eager to learn']}
                                                id={'attitude'}
                                                name="attitude"
                                                value={data.attitude}
                                                onChange={(e) => setData('attitude', e.target.value)}
                                                placeholder={'Select attitude'}
                                                disabled={values.fieldDisabled}
                                            />
                                            <InputError message={errors.attitude} className="mt-2"/>
                                        </div>

                                        <div className="mt-2">
                                            <SelectInput
                                                optionClassName={'capitalize'}
                                                className={'block w-full py-1 text-sm'}
                                                data={['Reading', 'Drumming', 'Sports', 'Music and dance', 'Art work', 'Drawing', 'Experimenting', 'Adventurous', 'Technology and Gadget']}
                                                id={'interest'}
                                                name="interest"
                                                value={data.interest}
                                                onChange={(e) => setData('interest', e.target.value)}
                                                placeholder={'Select interest'}
                                                disabled={values.fieldDisabled}
                                            />
                                            <InputError message={errors.interest} className="mt-2"/>
                                        </div>
                                    </>
                                }

                                {
                                    (isAdmin(auth.roles) || isClassTeacher(auth.roles)) && <div className="mt-2">
                                        <SelectInput
                                            optionClassName={'capitalize'}
                                            className={'block w-full py-1 text-sm'}
                                            data={['Good Performance, Keep It Up', 'Could Do Better', 'More Room For Improvement', 'Has Improved', 'Buck Up', 'Must Do Extra Hard Work']}
                                            id={'remark'}
                                            name="remark"
                                            value={data.remark}
                                            onChange={(e) => setData('remark', e.target.value)}
                                            placeholder={'Select class teacher\'s remark'}
                                            disabled={values.fieldDisabled}
                                        />
                                        <InputError message={errors.remark} className="mt-2"/>
                                    </div>
                                }

                                {
                                    isAdmin(auth.roles) && <div className="mt-2">
                                        <SelectInput
                                            optionClassName={'capitalize'}
                                            className={'block w-full py-1 text-sm'}
                                            data={['Enthusiastic Learner who follow school rules', 'Has positive attitude towards school', 'Enjoys School Activities', 'Contributes to class discussion', 'Class participation has improved', 'Demonstrates creativity', 'Demonstrates progress', 'Unsatisfactory class work', 'Weak in math fundamentals']}
                                            id={'head_remark'}
                                            name="head_remark"
                                            value={data.head_remark}
                                            onChange={(e) => setData('head_remark', e.target.value)}
                                            placeholder={'Select head teacher\'s remark'}
                                            disabled={values.fieldDisabled}
                                        />
                                        <InputError message={errors.head_remark} className="mt-2"/>
                                    </div>
                                }
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <PrimaryButton className="ms-4 px-4 btn btn-primary" disabled={processing}>
                                    <i className="fas fa-save mr-2"></i> Record
                                </PrimaryButton>
                            </div>
                        </form>
                    </Column>
                </Row>
            </Card>


        </AuthenticatedLayout>
    );
}
