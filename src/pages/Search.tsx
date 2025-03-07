import { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
  const [searchType, setSearchType] = useState<'player' | 'team'>('player');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - replace with actual API calls
  const searchResults = [
    {
      id: 1,
      name: 'Mike Olando',
      team: 'Gor Mahia',
      category: 'U12',
      age: 11,
      parentName: 'Joan Peter',
      parentPhone: '+254-723-021-232',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
        <div className="flex items-center space-x-3 mb-6">
          <SearchIcon className="h-8 w-8 text-emerald-600" />
          <h1 className="text-3xl font-bold text-gray-800">Search</h1>
        </div>

        <div className="mb-8">
          <div className="flex space-x-4 mb-4">
            <button
              className={`px-4 py-2 rounded-md ${
                searchType === 'player'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
              onClick={() => setSearchType('player')}
            >
              Search Players
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                searchType === 'team'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
              onClick={() => setSearchType('team')}
            >
              Search Teams
            </button>
          </div>

          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder={`Search ${searchType === 'player' ? 'players' : 'teams'}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {searchResults.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Team
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Age
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Parent Info
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {searchResults.map((result) => (
                  <tr key={result.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{result.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{result.team}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{result.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{result.age}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {result.parentName} <br />
                        {result.parentPhone}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;