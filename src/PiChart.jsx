import  { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Facebook', value: 330 },
    { name: 'Youtube', value: 550 },
    { name: 'Direct Search', value: 120 },

];
const COLORS = ['#9A52DA', '#EF5350', '#0466C2'];

export default class Example extends PureComponent {
  

    render() {
        return (
            <PieChart width={320} height={400} onMouseEnter={this.onPieEnter}>
                <Pie
                    data={data}
                    cx={120}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
               
            </PieChart>
        );
    }
}
