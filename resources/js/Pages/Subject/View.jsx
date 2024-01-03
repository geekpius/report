import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Card from "@/Components/Cards/Card";
import Table from "@/Components/Table/Table";
import THead from "@/Components/Table/THead";
import TBody from "@/Components/Table/TBody";
import TRow from "@/Components/Table/TRow";
import TH from "@/Components/Table/TH";
import TD from "@/Components/Table/TD.jsx";
import RLink from "@/Components/RLink";

export default function View({ auth, subjects }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h1 className="h3 mb-0 text-gray-800">Subjects</h1>}
        >
            <Card className='mb-4'
                  headerWidget={<RLink className='btn-link text-decoration-none' to={route('subject.create')}>
                      <i className="fas fa-fw fa-plus-circle"></i> Add New
            </RLink>}
            >
                <Table>
                    <THead>
                        <TRow className={'bg-dark text-white'}>
                            <TH value={'Name'} />
                            <TH value={'Type'} />
                        </TRow>
                    </THead>
                    <TBody dataFound={subjects.data.length>0}>
                        {subjects.data.map((obj) => (
                            <TRow key={obj.id}>
                                <TD value={obj.name} />
                                <TD value={obj.type} />
                            </TRow>
                        ))}

                    </TBody>
                </Table>
            </Card>
        </AuthenticatedLayout>
        );
}
