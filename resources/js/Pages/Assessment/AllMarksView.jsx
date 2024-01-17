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
import ObjectSelection from "@/Components/ObjectSelection";
import {useEffect, useState} from "react";
import RLink from "@/Components/RLink";

export default function View({ auth, levels, subjects, marks, routeInfo }) {

    const [filter, setFilter] = useState({
        form: '',
        subject: '',
    })

    const [filteredSubject, setFilteredSubject] = useState([])

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
            route('mark.all'),
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
                <Table>
                    <THead>
                        <TRow className={'bg-dark text-white'}>
                            <TH value={'ID#'} />
                            <TH value={'Name'} />
                            <TH value={'Gender'} />
                            <TH value={'Subject'} />
                            <TH value={'Ex.1'} />
                            <TH value={'Ex.2'} />
                            <TH value={'Ex.3'} />
                            <TH value={'Ex.4'} />
                            <TH value={'SubTotal'} />
                            <TH value={'Test1'} />
                            <TH value={'Test2'} />
                            <TH value={'SubTotal'} />
                            <TH value={'H/W1'} />
                            <TH value={'H/W2'} />
                            <TH value={'H/W3'} />
                            <TH value={'H/W4'} />
                            <TH value={'SubTotal'} />
                            <TH value={'Exam'} />
                            <TH value={'Remark'} />
                        </TRow>
                    </THead>
                    <TBody dataFound={marks.data.length>0}>
                        {marks.data.map((obj) => (
                            <TRow
                                key={obj.id}
                            >
                                <TD value={obj.student.number} />
                                <TD value={obj.student.name} />
                                <TD value={obj.student.gender} />
                                <TD value={obj.subject} />
                                <TD value={obj.assessmentOne} />
                                <TD value={obj.assessmentTwo} />
                                <TD value={obj.assessmentThree} />
                                <TD value={obj.assessmentFour} />
                                <TD value={obj.assessmentSubTotal} className='text-primary font-semibold' />
                                <TD value={obj.testOne} />
                                <TD value={obj.testTwo} />
                                <TD value={obj.testSubTotal} className='text-primary font-semibold' />
                                <TD value={obj.assignmentOne} />
                                <TD value={obj.assignmentTwo} />
                                <TD value={obj.assignmentThree} />
                                <TD value={obj.assignmentFour} />
                                <TD value={obj.assignmentSubTotal} className='text-primary font-semibold' />
                                <TD value={obj.exam} />
                                <TD value={obj.remark} />
                            </TRow>
                        ))}

                    </TBody>
        </Table>

            </Card>


        </AuthenticatedLayout>
        );
}
