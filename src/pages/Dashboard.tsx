import { useAuthStore } from '../store/authStore';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const attendanceData = [
  { name: 'Mon', count: 45 },
  { name: 'Tue', count: 52 },
  { name: 'Wed', count: 48 },
  { name: 'Thu', count: 50 },
  { name: 'Fri', count: 55 },
];

const categoryDistribution = [
  { name: 'U8', value: 30 },
  { name: 'U10', value: 40 },
  { name: 'U12', value: 35 },
  { name: 'U14', value: 25 },
  { name: 'U16', value: 20 },
  { name: 'U18', value: 15 },
];

const COLORS = ['#047857', '#059669', '#10b981', '#34d399', '#6ee7b7', '#a7f3d0'];

const Dashboard = () => {
  const { user } = useAuthStore();
  const isAdmin = user?.role === 'admin';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Welcome back, {user?.name}!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Total Players
            </h3>
            <p className="text-3xl font-bold text-emerald-600">165</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Active Teams
            </h3>
            <p className="text-3xl font-bold text-emerald-600">12</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Today's Attendance
            </h3>
            <p className="text-3xl font-bold text-emerald-600">85%</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Weekly Attendance
            </h3>
            <LineChart width={500} height={300} data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="count" stroke="#059669" />
            </LineChart>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Category Distribution
            </h3>
            <PieChart width={500} height={300}>
              <Pie
                data={categoryDistribution}
                cx={250}
                cy={150}
                innerRadius={60}
                outerRadius={100}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {categoryDistribution.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>

        {isAdmin && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Administrative Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <button className="bg-emerald-600 text-white p-4 rounded-lg hover:bg-emerald-700">
                Manage Users
              </button>
              <button className="bg-emerald-600 text-white p-4 rounded-lg hover:bg-emerald-700">
                Generate Reports
              </button>
              <button className="bg-emerald-600 text-white p-4 rounded-lg hover:bg-emerald-700">
                System Settings
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;