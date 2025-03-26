import React, { useState } from 'react';

const MarketMap = () => {
  // Company data from provided list
  const companies = [
    {
      id: '1',
      name: 'Spin Ventures',
      category: 'VENTURE CAPITAL',
      description: 'VC, Accelerator, Venture Builder / Venture Studio focusing on Supply Chain & Logistics, Packaging, Waste Mgmt & Recycling, Circular Economy, Recycling & Upcycling. Investment stages: Seed+. Geographic focus: Global.',
      website: 'https://spin.vc/',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png',
      primaryFocus: 'Supply Chain & Logistics',
      investmentRange: '$250,000 - $1,000,000'
    },
    {
      id: '2',
      name: 'Pontifax Agtech',
      category: 'VENTURE CAPITAL',
      description: 'VC focusing on Food & Agriculture. Investment stages: Growth Stage.',
      website: 'https://www.pontifaxagtech.com/',
      logo: '/api/placeholder/80/40',
      primaryFocus: 'Food & Agriculture',
      investmentRange: 'Not specified'
    },
    {
      id: '3',
      name: 'Spicehaus',
      category: 'VENTURE CAPITAL',
      description: 'VC focusing on Renewables & Energy Generation, Carbon Capture / CCUS, Carbon Markets & Offsets. Investment stages: Pre-Seed, Seed, Seed+, Series A. Geographic focus: DACH, Europe.',
      website: 'https://www.spicehaus.vc/',
      logo: '/api/placeholder/80/40',
      primaryFocus: 'Renewables & Energy Generation',
      investmentRange: '200k€ - 2m€'
    },
    {
      id: '4',
      name: 'FINCA Ventures',
      category: 'VENTURE CAPITAL',
      description: 'VC focusing on Food & Agriculture. Investment stages: Pre-Seed, Seed, Series A. Geographic focus: Africa, South America, Asia.',
      website: 'https://fincaventures.com/',
      logo: '/api/placeholder/80/40',
      primaryFocus: 'Food & Agriculture',
      investmentRange: '$100K - $500K'
    },
    {
      id: '5',
      name: 'Nimb Capital',
      category: 'VENTURE CAPITAL',
      description: 'VC, Family Office focusing on Food Waste, Industrial Decarbonization, Water & Natural Resources, Renewables & Energy Generation. Investment stages: Pre-Seed, Seed, Series A. Geographic focus: Global.',
      website: 'http://nimb.capital',
      logo: '/api/placeholder/80/40',
      primaryFocus: 'Food Waste',
      investmentRange: 'Not specified'
    },
    {
      id: '6',
      name: 'Leanox',
      category: 'VENTURE CAPITAL',
      description: 'VC focusing on Agnostic, Food & Agriculture, Climate Impact (Broad). Investment stages: Pre-Seed, Seed.',
      website: 'http://leanox.eu',
      logo: '/api/placeholder/80/40',
      primaryFocus: 'Agnostic',
      investmentRange: '$30k - $100k'
    },
    {
      id: '7',
      name: 'HAX/SOSV/IndieBio',
      category: 'VENTURE CAPITAL',
      description: 'Accelerator, VC focusing on Climate Impact (Broad), Biotech & Life Sciences, Real Estate & Proptech, Mobility & Transportation, Food & Agriculture. Investment stages: Pre-Seed, Seed. Geographic focus: Global.',
      website: 'https://sosv.com/',
      logo: '/api/placeholder/80/40',
      primaryFocus: 'Climate Impact (Broad)',
      investmentRange: 'Up to $500K'
    },
    {
      id: '8',
      name: 'SCG Chemicals',
      category: 'CORPORATE VENTURE',
      description: 'CVC focusing on Carbon Capture / CCUS, Hydrogen and e-Fuels, Chemicals, Plastics & Bioplastics. Investment stages: Series A, Series B, Series C, Series D, Growth. Geographic focus: Global.',
      website: 'http://scg.com',
      logo: '/api/placeholder/80/40',
      primaryFocus: 'Carbon Capture / CCUS',
      investmentRange: 'Not specified'
    },
    {
      id: '9',
      name: 'WIND Ventures',
      category: 'CORPORATE VENTURE',
      description: 'CVC focusing on Mobility & Transportation, Renewables & Energy Generation. Investment stages: Series A, Series B, Series C, Series C+. Geographic focus: Global, Expansion into Latin America.',
      website: 'https://www.windventures.vc/',
      logo: '/api/placeholder/80/40',
      primaryFocus: 'Mobility & Transportation',
      investmentRange: '$2M - $6M'
    },
    {
      id: '10',
      name: 'Impact Capital Managers',
      category: 'VENTURE CAPITAL',
      description: 'VC focusing on Climate Impact (Broad). Investment stages: Agnostic, Pre-Seed, Seed, Series A, Series B, Series C, Growth Stage, Pre-IPO. Geographic focus: North America, US.',
      website: 'https://www.impactcapitalmanagers.com/about-us-1',
      logo: '/api/placeholder/80/40',
      primaryFocus: 'Climate Impact (Broad)',
      investmentRange: 'Not specified'
    },
    {
      id: '11',
      name: 'XPV Water Partners',
      category: 'VENTURE CAPITAL',
      description: 'VC. Investment stages: Series D, Growth Stage, Pre-IPO, Series C. Geographic focus: Global, North America.',
      website: 'https://xpvwaterpartners.com/',
      logo: '/api/placeholder/80/40',
      primaryFocus: 'Water',
      investmentRange: 'Not specified'
    },
    {
      id: '12',
      name: 'DART Labs',
      category: 'VENTURE CAPITAL',
      description: 'VC, Accelerator focusing on Renewables & Energy Generation, Waste Mgmt & Recycling, Water & Natural Resources, Biotech & Life Sciences, Climate Impact (Broad). Investment stages: accelerator, incubator, Pre-Seed, Seed. Geographic focus: Europe.',
      website: 'https://www.dartlabs.io/',
      logo: '/api/placeholder/80/40',
      primaryFocus: 'Renewables & Energy Generation',
      investmentRange: '150000 - 500000'
    },
    {
      id: '13',
      name: 'Cleantech North',
      category: 'ANGEL INVESTORS',
      description: 'Angel focusing on Climate Impact (Broad). Investment stages: Pre-seed, Seed, Series A, Series B, Series C, Later stage growth, Pre IPO. Geographic focus: Canada.',
      website: 'http://www.cleantechnorth.org',
      logo: '/api/placeholder/80/40',
      primaryFocus: 'Climate Impact (Broad)',
      investmentRange: 'Not specified'
    },
    {
      id: '14',
      name: 'Lowercarbon Capital',
      category: 'VENTURE CAPITAL',
      description: 'VC focusing on Climate Impact (Broad), Real Estate & Proptech, Mobility & Transportation. Investment stages: Pre-seed, Seed, Series A. Geographic focus: Global.',
      website: 'http://lowercarboncapital.com/',
      logo: '/api/placeholder/80/40',
      primaryFocus: 'Climate Impact (Broad)',
      investmentRange: 'Not specified'
    },
    {
      id: '15',
      name: 'Use GForce',
      category: 'VENTURE CAPITAL',
      description: 'VC focusing on Climate Impact (Broad), Real Estate & Proptech, Mobility & Transportation, Circular Economy. Investment stages: Pre-seed, Seed. Geographic focus: Global with EU focus.',
      website: 'https://www.usegforce.com/',
      logo: '/api/placeholder/80/40',
      primaryFocus: 'Climate Impact (Broad)',
      investmentRange: 'Not specified'
    },
    {
      id: '16',
      name: 'Wiwin',
      category: 'VENTURE CAPITAL',
      description: 'Focusing on Renewables & Energy Generation. Investment stages: Series C, Series D, Growth, Pre-IPO, Public market investments. Geographic focus: DACH.',
      website: 'https://wiwin.de/',
      logo: '/api/placeholder/80/40',
      primaryFocus: 'Renewables & Energy Generation',
      investmentRange: 'Not specified'
    }
  ];

  // Extract unique categories from the data
  const categories = [...new Set(companies.map(company => company.category))];
  
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [hoveredCompany, setHoveredCompany] = useState(null);

  // Filter companies by selected category
  const filteredCompanies = companies.filter(company => company.category === selectedCategory);

  // Handle logo click
  const handleLogoClick = (website) => {
    window.open(website, '_blank');
  };

  return (
    <div className="flex flex-col w-full bg-gray-50 p-4">
      {/* Category selection tabs */}
      <div className="flex mb-4 bg-white rounded-t-lg border border-gray-200">
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 font-medium text-sm ${selectedCategory === category 
              ? 'bg-teal-600 text-white' 
              : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Category header */}
      <div className="bg-teal-600 text-white px-4 py-2 font-bold">
        {selectedCategory}
      </div>
      
      {/* Company grid */}
      <div className="bg-white p-4 border border-gray-200 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {filteredCompanies.map(company => (
          <div 
            key={company.id}
            className="relative border border-gray-200 p-2 flex items-center justify-center h-20 bg-white cursor-pointer hover:shadow-md transition-shadow"
            onMouseEnter={() => setHoveredCompany(company)}
            onMouseLeave={() => setHoveredCompany(null)}
            onClick={() => handleLogoClick(company.website)}
          >
            <img 
              src={company.logo} 
              alt={company.name} 
              className="max-h-12 max-w-full object-contain"
            />
            
            {/* Company name below logo */}
            <div className="absolute bottom-1 left-0 right-0 text-center text-xs font-medium text-gray-600 truncate px-1">
              {company.name}
            </div>
            
            {/* Hover tooltip with smart positioning */}
            {hoveredCompany && hoveredCompany.id === company.id && (
              <div 
                className="absolute bg-white p-3 rounded shadow-lg z-10 w-64"
                style={{
                  // Smart positioning logic to prevent going off-screen
                  left: '50%',
                  transform: 'translateX(-50%)',
                  bottom: '100%',
                  marginBottom: '10px',
                  maxHeight: '300px',
                  overflow: 'auto'
                }}
              >
                <h3 className="font-bold text-gray-800">{company.name}</h3>
                <div className="text-xs text-gray-500 mb-1">{company.category}</div>
                <p className="text-sm mb-2 text-gray-700">{company.description}</p>
                <div className="text-xs mb-2">
                  <span className="font-semibold">Focus:</span> {company.primaryFocus}
                </div>
                {company.investmentRange !== 'Not specified' && (
                  <div className="text-xs mb-2">
                    <span className="font-semibold">Investment:</span> {company.investmentRange}
                  </div>
                )}
                <a 
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  Visit website
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Instructions */}
      <div className="mt-4 text-sm text-gray-600 bg-gray-100 p-3 rounded">
        <p><strong>How to use:</strong> Hover over a logo to see company details. Click on any logo to visit the company website.</p>
      </div>
    </div>
  );
};

export default MarketMap;
