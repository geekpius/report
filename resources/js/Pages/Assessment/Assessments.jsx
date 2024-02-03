import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Card from "@/Components/Cards/Card";
import Table from "@/Components/Table/Table";
import THead from "@/Components/Table/THead";
import TBody from "@/Components/Table/TBody";
import TRow from "@/Components/Table/TRow";
import TH from "@/Components/Table/TH";
import TD from "@/Components/Table/TD.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {router} from "@inertiajs/react";
import ObjectSelection from "@/Components/ObjectSelection";
import RLink from "@/Components/RLink";
import useLevel from "@/helpers/useLevel.ts";

export default function View({ auth, levels, assessments, routeInfo }) {

    const [form, setForm] = useLevel(routeInfo.query.level)

    function handleChange(e) {
        setForm(e.target.value)
    }

    function filterStudents(){
        if(!form){
            alert('Select all filters')
            return;
        }
        router.get(
            route('assessment'),
            { level: form },
            { replace: true, preserveScroll: true, },
            )
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Card className='mb-2'
                  headerWidget={
                      <div>
                          <div className="mb-3">
                              <RLink className="text-sm btn-link" to={route('assessment.create')}>
                                  <i className="fas fa-plus-circle"></i> Assess Students
                              </RLink>
                          </div>
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
                      </div>
            }
            >
                <Table>
                    <THead>
                        <TRow className={'bg-dark text-white'}>
                            <TH value={'ID#'} />
                            <TH value={'Name'} />
                            <TH value={'Gender'} />
                            <TH value={'Term'} />
                            <TH value={'Promoted'} />
                            <TH value={'Conduct'} />
                            <TH value={'Attitude'} />
                            <TH value={'Interest'} />
                            <TH value={'C.T Remark'} />
                        </TRow>
                    </THead>
                    <TBody dataFound={assessments.data.length>0}>
                        {assessments.data.map((obj) => (
                            <TRow
                                key={obj.id}
                            >
                                <TD value={obj.student.number} />
                                <TD value={obj.student.name} />
                                <TD value={obj.student.gender} />
                                <TD value={obj.term} />
                                <TD value={obj.promoted} />
                                <TD value={obj.conduct} />
                                <TD value={obj.attitude} />
                                <TD value={obj.interest} />
                                <TD value={obj.remark} />
                            </TRow>
                        ))}

                    </TBody>
                </Table>

            </Card>


        </AuthenticatedLayout>
        );
}
