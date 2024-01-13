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

export default function View({ auth, flash, students }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h1 className="h3 mb-0 text-gray-800">Students</h1>}
        >
            <Card className='mb-4'
                  headerWidget={<RLink className='btn-link text-decoration-none' to={route('student.create')}>
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
                            <TH value={'Number#'} />
                            <TH value={'Name'} />
                            <TH value={'Gender'} />
                            <TH value={'Class'} />
                            <TH value={'Status'} />
                        </TRow>
                    </THead>
                    <TBody dataFound={students.data.length>0}>
                        {students.data.map((student) => (
                            <TRow key={student.id}>
                                <TD value={student.number} />
                                <TD value={student.name} />
                                <TD value={student.gender} />
                                <TD value={student.form} />
                                <TD value={student.status} />
                            </TRow>
                        ))}

                    </TBody>
                </Table>
            </Card>
        </AuthenticatedLayout>
        );
}
