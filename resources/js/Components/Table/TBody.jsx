import TRow from "@/Components/Table/TRow.jsx";
import TD from "@/Components/Table/TD.jsx";


export default function TBody({children, dataFound= false}) {
    return (
        <tbody>
        {dataFound ? children :
            <TRow>
                <TD colSpan={'10'} className="text-center" value={'No records found'}/>
            </TRow>
        }
        </tbody>
    );
}
