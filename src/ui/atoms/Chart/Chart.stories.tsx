import type { Story, Meta } from '@ladle/react';
import * as RC from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from '.';

const meta: Meta = {
  title: 'D Atoms/P Chart',
  parameters: {
    docs: {
      description: {
        component:
          'A chart wrapper built on Recharts. ChartContainer provides context, CSS variable color injection, and responsive sizing. Pair with ChartTooltip, ChartLegend, and any Recharts primitive.',
      },
    },
  },
};

export default meta;

const monthlyData = [
  { month: 'Jan', revenue: 4200, expenses: 2800 },
  { month: 'Feb', revenue: 5800, expenses: 3100 },
  { month: 'Mar', revenue: 4900, expenses: 2600 },
  { month: 'Apr', revenue: 7200, expenses: 3400 },
  { month: 'May', revenue: 6100, expenses: 2900 },
  { month: 'Jun', revenue: 8400, expenses: 3800 },
];

const weeklyData = [
  { day: 'Mon', visitors: 420 },
  { day: 'Tue', visitors: 380 },
  { day: 'Wed', visitors: 610 },
  { day: 'Thu', visitors: 540 },
  { day: 'Fri', visitors: 730 },
  { day: 'Sat', visitors: 290 },
  { day: 'Sun', visitors: 190 },
];

const pieData = [
  { name: 'Direct',   value: 400 },
  { name: 'Organic',  value: 300 },
  { name: 'Referral', value: 180 },
  { name: 'Social',   value: 120 },
];

const PIE_COLORS = ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)', 'var(--chart-4)'];

export const Bar: Story = () => {
  const config: ChartConfig = {
    revenue:  { label: 'Revenue',  color: 'var(--chart-1)' },
    expenses: { label: 'Expenses', color: 'var(--chart-2)' },
  };
  return (
    <div className="w-full max-w-xl p-4">
      <ChartContainer config={config} className="h-64 w-full">
        <RC.BarChart data={monthlyData} barGap={4}>
          <RC.CartesianGrid vertical={false} strokeDasharray="3 3" />
          <RC.XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
          <RC.YAxis tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <RC.Bar dataKey="revenue"  fill="var(--color-revenue)"  radius={[4, 4, 0, 0]} />
          <RC.Bar dataKey="expenses" fill="var(--color-expenses)" radius={[4, 4, 0, 0]} />
        </RC.BarChart>
      </ChartContainer>
    </div>
  );
};

export const Line: Story = () => {
  const config: ChartConfig = {
    revenue:  { label: 'Revenue',  color: 'var(--chart-1)' },
    expenses: { label: 'Expenses', color: 'var(--chart-3)' },
  };
  return (
    <div className="w-full max-w-xl p-4">
      <ChartContainer config={config} className="h-64 w-full">
        <RC.LineChart data={monthlyData}>
          <RC.CartesianGrid vertical={false} strokeDasharray="3 3" />
          <RC.XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
          <RC.YAxis tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <RC.Line type="monotone" dataKey="revenue"  stroke="var(--color-revenue)"  strokeWidth={2} dot={false} />
          <RC.Line type="monotone" dataKey="expenses" stroke="var(--color-expenses)" strokeWidth={2} dot={false} />
        </RC.LineChart>
      </ChartContainer>
    </div>
  );
};

export const Area: Story = () => {
  const config: ChartConfig = {
    visitors: { label: 'Visitors', color: 'var(--chart-2)' },
  };
  return (
    <div className="w-full max-w-xl p-4">
      <ChartContainer config={config} className="h-64 w-full">
        <RC.AreaChart data={weeklyData}>
          <defs>
            <linearGradient id="fillVisitors" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="var(--color-visitors)" stopOpacity={0.2} />
              <stop offset="95%" stopColor="var(--color-visitors)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <RC.CartesianGrid vertical={false} strokeDasharray="3 3" />
          <RC.XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
          <RC.YAxis tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <RC.Area
            type="monotone"
            dataKey="visitors"
            stroke="var(--color-visitors)"
            strokeWidth={2}
            fill="url(#fillVisitors)"
          />
        </RC.AreaChart>
      </ChartContainer>
    </div>
  );
};

export const Donut: Story = () => {
  const config: ChartConfig = {
    Direct:   { label: 'Direct',   color: 'var(--chart-1)' },
    Organic:  { label: 'Organic',  color: 'var(--chart-2)' },
    Referral: { label: 'Referral', color: 'var(--chart-3)' },
    Social:   { label: 'Social',   color: 'var(--chart-4)' },
  };
  return (
    <div className="w-full max-w-xl p-4">
      <ChartContainer config={config} className="h-64 w-full">
        <RC.PieChart>
          <ChartTooltip content={<ChartTooltipContent nameKey="name" hideLabel />} />
          <ChartLegend content={<ChartLegendContent nameKey="name" />} />
          <RC.Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            innerRadius={48}
            strokeWidth={2}
          >
            {pieData.map((_, index) => (
              <RC.Cell key={index} fill={PIE_COLORS[index % PIE_COLORS.length]} />
            ))}
          </RC.Pie>
        </RC.PieChart>
      </ChartContainer>
    </div>
  );
};
