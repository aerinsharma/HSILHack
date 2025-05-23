import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Eye } from 'lucide-react';

const data = [
  { name: 'Glaucoma Risk', value: 76 },
  { name: 'Healthy', value: 24 },
];

const COLORS = ['#2563EB', '#E5E7EB']; // Blue and Gray

function ResultsPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <div className="flex items-center mb-6">
            <Eye className="h-8 w-8 text-blue-600" />
            <h1 className="ml-3 text-2xl font-bold text-gray-900">Scan Analysis Result</h1>
          </div>
          
          <p className="text-lg text-gray-700 mb-4">
            The AI analysis indicates a <span className="font-semibold text-blue-600">76% probability</span> that the eye image presented shows signs consistent with early-stage <span className="font-semibold">Glaucoma</span>.
          </p>

          <p className="text-md text-gray-600 mt-4">
            This analysis is based on patterns detected through the AI model trained on thousands of ophthalmology images. The result helps guide further testing or referral.
          </p>

          <div className="mt-6 p-4 border-l-4 border-yellow-500 bg-yellow-50 text-yellow-800 text-sm">
            ⚠️ This result is generated by an AI model and should not be considered a professional medical diagnosis. Please consult an eye care specialist for confirmation.
          </div>
        </div>

        {/* Right Donut Graph */}
        <div className="w-full h-72">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} cornerRadius={10} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="text-center mt-4 text-gray-700">
            AI Risk Probability (Glaucoma)
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultsPage;
