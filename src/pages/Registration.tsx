import React, { useState, useEffect } from 'react';
import { UserPlus } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { playerAPI } from '../services/api';
import type { Player } from '../types';

const ageCategories = [
  { id: 'U8', range: '6-8 years' },
  { id: 'U10', range: '9-10 years' },
  { id: 'U12', range: '11-12 years' },
  { id: 'U14', range: '13-14 years' },
  { id: 'U16', range: '15-16 years' },
  { id: 'U18', range: '17-18 years' },
  { id: 'U22', range: '19-22 years' },
];

const getAgeCategory = (age: number): string => {
  if (age >= 19 && age <= 22) return 'U22';
  if (age >= 17 && age <= 18) return 'U18';
  if (age >= 15 && age <= 16) return 'U16';
  if (age >= 13 && age <= 14) return 'U14';
  if (age >= 11 && age <= 12) return 'U12';
  if (age >= 9 && age <= 10) return 'U10';
  if (age >= 6 && age <= 8) return 'U8';
  return '';
};

const Registration = () => {
  const [formData, setFormData] = useState<{
    fullName: string;
    gender: 'male' | 'female' | '';
    age: string;
    parentName: string;
    parentPhone: string;
    location: string;
    team: string;
    category: string;
  }>({
    fullName: '',
    gender: '',
    age: '',
    parentName: '',
    parentPhone: '',
    location: '',
    team: '',
    category: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (formData.age) {
      const age = parseInt(formData.age, 10);
      if (age >= 6 && age <= 22) {
        const category = getAgeCategory(age);
        setFormData(prev => ({ ...prev, category }));
      }
    }
  }, [formData.age]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (formData.gender === '') {
        toast.error('Please select a gender.');
        setLoading(false);
        return;
      }

      const playerData: Omit<Player, 'id' | 'createdAt' | 'updatedAt'> = {
        ...formData,
        age: parseInt(formData.age, 10),
        gender: formData.gender as 'male' | 'female',
      };
      await playerAPI.register(playerData);
      toast.success('Player registered successfully!');
      setFormData({
        fullName: '',
        gender: '',
        age: '',
        parentName: '',
        parentPhone: '',
        location: '',
        team: '',
        category: '',
      });
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('Failed to register player. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 w-full">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 sm:p-6 md:p-8">
        <div className="flex items-center space-x-3 mb-6">
          <UserPlus className="h-8 w-8 text-emerald-600" />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">Player Registration</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Age 
              </label>
              <input
                type="number"
                name="age"
                min="6"
                max="22"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white bg-gray-100 dark:bg-gray-600"
                disabled
                required
              >
                <option value="">Select Category</option>
                {ageCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.id} ({category.range})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Parent/Guardian Name
              </label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Parent/Guardian Phone
              </label>
              <input
                type="tel"
                name="parentPhone"
                value={formData.parentPhone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Team
              </label>
              <input
                type="text"
                name="team"
                value={formData.team}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={loading}
              className={`w-full sm:w-auto bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Registering...' : 'Register Player'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;