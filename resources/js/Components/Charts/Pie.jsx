import Card from "@/Components/Cards/Card";

export default function Pie() {
    return (
        <Card className="mb-4" headerTitle='Top Students'>
            <div className="chart-pie pt-4 pb-2">
                <canvas id="myPieChart"></canvas>
            </div>
            <div className="mt-4 text-center small">
                <span className="mr-2">
                    <i className="fas fa-circle text-primary"></i> BS 7
                </span>
                <span className="mr-2">
                    <i className="fas fa-circle text-success"></i> BS 8
                </span>
                <span className="mr-2">
                    <i className="fas fa-circle text-info"></i> BS 9
                </span>
            </div>
        </Card>
    );
}
