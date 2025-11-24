import { motion } from 'motion/react';

const categories = [
  'All',
  'Productivity',
  'Tools',
  'Games',
  'Photography',
  'Health',
  'Education',
  'Weather',
  'Music',
];

interface CategoryFiltersProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryFilters({
  selectedCategory,
  onSelectCategory,
}: CategoryFiltersProps) {
  return (
    <section id="apps" className="py-12 px-6 lg:px-8 bg-white/80 backdrop-blur-sm border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelectCategory(category)}
              className={`px-6 py-3 rounded-full transition-all shadow-sm hover:shadow-md ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#008037] to-[#34A853] text-white shadow-lg shadow-[#008037]/20'
                  : 'bg-white text-[#0A0A0A] hover:bg-gray-50 border border-gray-200'
              }`}
              style={{ fontSize: '15px', fontWeight: 600 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}