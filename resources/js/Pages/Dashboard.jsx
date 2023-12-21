import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Row from "@/Components/Row";
import Column from "@/Components/Column";
import DataCard from "@/Components/Cards/DataCard.jsx";
import Bar from "@/Components/Charts/Bar";
import Pie from "@/Components/Charts/Pie.jsx";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h1 className="h3 mb-0 text-gray-800">Dashboard</h1>}
        >

            <>
                <Row>
                    <Column xl='3' md='6' className="mb-4">
                        <DataCard className='border-left-primary' title='Earnings (Monthly)' data='$40,000' icon='fas fa-calendar' />
                    </Column>
                    <Column xl='3' md='6' className="mb-4">
                        <DataCard className='border-left-primary' title='Earnings (Monthly)' data='$40,000' icon='fas fa-calendar' />
                    </Column>
                    <Column xl='3' md='6' className="mb-4">
                        <DataCard className='border-left-primary' title='Earnings (Monthly)' data='$40,000' icon='fas fa-calendar' />
                    </Column>
                    <Column xl='3' md='6' className="mb-4">
                        <DataCard className='border-left-primary' title='Earnings (Monthly)' data='$40,000' icon='fas fa-calendar' />
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
