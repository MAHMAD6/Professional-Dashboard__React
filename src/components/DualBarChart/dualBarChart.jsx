import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { day: "Sat", debit: 40, credit: 70 },
    { day: "Sun", debit: 30, credit: 60 },
    { day: "Mon", debit: 35, credit: 45 },
    { day: "Tue", debit: 75, credit: 50 },
    { day: "Wed", debit: 50, credit: 80 },
    { day: "Thu", debit: 60, credit: 30 },
    { day: "Fri", debit: 65, credit: 85 },
];

export default function DualBarChart() {
    return (
        <ResponsiveContainer width="100%" height={250} >
            <BarChart data={data} barCategoryGap="20%"  >
                <XAxis dataKey="day" tick={{ fill: "#9CA3AF" }} axisLine={false} tickLine={false}
                />
                <YAxis hide domain={[-5, 'dataMax']} />
                <Tooltip />
                <Bar dataKey="debit" fill="#0000FF" radius={[10, 10, 10, 10]} />
                <Bar dataKey="credit" fill="#FFA500" radius={[10, 10, 10, 10]} />
            </BarChart>
        </ResponsiveContainer>
    );
}
