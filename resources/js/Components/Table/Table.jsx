

export default function Table({children}) {
    return (
        <div className="table-responsive overflow-x-scroll">
            <table className="table table-striped table-sm text-sm" width="100%" cellSpacing="0">
                { children }
            </table>
        </div>
    );
}
