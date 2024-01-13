import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Row from "@/Components/Row";
import Column from "@/Components/Column";
import DataCard from "@/Components/Cards/DataCard.jsx";
import Bar from "@/Components/Charts/Bar";
import Pie from "@/Components/Charts/Pie.jsx";

export default function Dashboard({ auth, academic, statistics }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h1 className="h3 mb-0 text-gray-800">Dashboard</h1>}
        >

            <>
                <div className="alert alert-info" role="alert">
                    <span className="mr-3">Academic Year: {academic.data.year}</span>
                    <span>Academic Term: {academic.data.term}</span>
                </div>

                <Row>
                    <Column xl='3' md='6' className="mb-4">
                        <DataCard className="border-left-primary" title='Students' data={statistics.studentCount} icon='fas fa-graduation-cap' />
                    </Column>
                    <Column xl='3' md='6' className="mb-4">
                        <DataCard className='border-left-primary' title='Dropped Out' data={statistics.droppedOutStudentCount} icon='fas fa-graduation-cap' />
                    </Column>
                    <Column xl='3' md='6' className="mb-4">
                        <DataCard className='border-left-primary' title='Completed' data={statistics.completedStudentCount} icon='fas fa-graduation-cap' />
                    </Column>
                    <Column xl='3' md='6' className="mb-4">
                        <DataCard className='border-left-primary' title='Subjects' data={statistics.subjectCount} icon='fas fa-book-open' />
                    </Column>
                </Row>


                <Row>
                    <Column xl='8' lg='7'>
                       <Bar />
                    </Column>

                    <Column xl='4' lg='5'>
                        <Pie />
                    </Column>
                </Row>
            </>

        </AuthenticatedLayout>


    );
}
