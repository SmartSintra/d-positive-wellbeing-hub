import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { CloudLightning, Cloud } from "lucide-react";
const AnxietyGlucoseConnection = () => {
  // Data for HbA1c levels chart
  const hbA1cData = [{
    group: "Without Anxiety",
    hbA1c: 7.2,
    label: "T1D individuals without significant anxiety symptoms"
  }, {
    group: "With Anxiety",
    hbA1c: 8.4,
    label: "T1D individuals with moderate-to-severe anxiety symptoms"
  }];

  // Data for daily glucose fluctuations
  const glucoseData = [{
    time: "6:00",
    withStressManagement: 120,
    withoutStressManagement: 180
  }, {
    time: "9:00",
    withStressManagement: 140,
    withoutStressManagement: 220
  }, {
    time: "12:00",
    withStressManagement: 160,
    withoutStressManagement: 280
  }, {
    time: "15:00",
    withStressManagement: 130,
    withoutStressManagement: 250
  }, {
    time: "18:00",
    withStressManagement: 145,
    withoutStressManagement: 190
  }, {
    time: "21:00",
    withStressManagement: 125,
    withoutStressManagement: 170
  }, {
    time: "24:00",
    withStressManagement: 110,
    withoutStressManagement: 150
  }];
  const chartConfig = {
    hbA1c: {
      label: "HbA1c Level (%)",
      color: "#3ED3FE"
    },
    withStressManagement: {
      label: "With Stress Management",
      color: "#3ED3FE"
    },
    withoutStressManagement: {
      label: "Without Stress Management",
      color: "#B86DFE"
    }
  };
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#18143C] mb-6 md:text-4xl">Emotions and Blood Glucose: Understanding the Connection in Type 1 Diabetes</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Research shows that managing emotional well-being is as crucial as insulin in controlling blood glucose levels for individuals with Type 1 Diabetes.
            </p>
          </div>

          {/* Charts Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Panel - HbA1c Bar Chart */}
            <div className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B86DFE] to-[#18143C] rounded-xl flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#18143C]">Anxiety Impact on HbA1c</h3>
                  <p className="text-sm text-gray-600">Average HbA1c levels comparison</p>
                </div>
              </div>
              
              <ChartContainer config={chartConfig} className="h-64">
                <BarChart data={hbA1cData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="group" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="hbA1c" fill="var(--color-hbA1c)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
              
              <p className="text-sm text-gray-600 mt-4 italic">
                Data shows anxiety symptoms are associated with higher HbA1c levels in T1D patients
              </p>
            </div>

            {/* Right Panel - Glucose Fluctuations Line Chart */}
            <div className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#3ED3FE] to-[#B86DFE] rounded-xl flex items-center justify-center">
                  <CloudLightning className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#18143C]">Stress Management Benefits</h3>
                  <p className="text-sm text-gray-600">Daily blood glucose fluctuations</p>
                </div>
              </div>
              
              <ChartContainer config={chartConfig} className="h-64">
                <LineChart data={glucoseData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="withStressManagement" stroke="var(--color-withStressManagement)" strokeWidth={3} dot={{
                  fill: "var(--color-withStressManagement)",
                  r: 4
                }} />
                  <Line type="monotone" dataKey="withoutStressManagement" stroke="var(--color-withoutStressManagement)" strokeWidth={3} dot={{
                  fill: "var(--color-withoutStressManagement)",
                  r: 4
                }} />
                </LineChart>
              </ChartContainer>
              
              <p className="text-sm text-gray-600 mt-4 italic">
                Stress-reduction techniques lead to improved blood glucose stability
              </p>
            </div>
          </div>

          {/* Key Insights */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-[#B86DFE]/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#B86DFE] to-[#18143C] rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-[#18143C] mb-3">Anxiety's Impact</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Anxiety symptoms are prevalent in T1D youth and associated with higher HbA1c levels, indicating poorer glycemic control.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-[#3ED3FE]/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3ED3FE] to-[#B86DFE] rounded-full flex items-center justify-center mx-auto mb-4">
                <CloudLightning className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-[#18143C] mb-3">Emotional Burden</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                The emotional and psychological needs of people with diabetes significantly affect their management of the condition.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-[#B86DFE]/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3ED3FE] to-[#18143C] rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-br from-[#3ED3FE] to-[#B86DFE] rounded-full"></div>
                </div>
              </div>
              <h4 className="font-bold text-[#18143C] mb-3">Management Benefits</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Implementing stress-reduction strategies leads to improved blood glucose stability and better overall health outcomes.
              </p>
            </div>
          </div>

          {/* Caption */}
          <div className="text-center mt-12">
            <blockquote className="text-2xl font-semibold text-[#18143C] italic max-w-4xl mx-auto">
              "Managing emotional well-being is as crucial as insulin in controlling blood glucose levels for individuals with Type 1 Diabetes."
            </blockquote>
          </div>
        </div>
      </div>
    </section>;
};
export default AnxietyGlucoseConnection;