import Card from "@/Components/Cards/Card";

export default function Bar() {
    return (
        <Card className="mb-4" headerTitle='Reports'>
            <div className="chart-area">
                <canvas id="myAreaChart"></canvas>
            </div>
        </Card>
    );
}
