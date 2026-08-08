import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  resultCount?: number;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, resultCount }) => {
  return (
    <div className="search-container">
      <Search className="search-icon" size={18} />
      <input
        type="text"
        className="search-input"
        placeholder="Search by Product ID (e.g. NIT-001), Name, or Category..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button
          className="search-clear"
          onClick={() => onChange('')}
          title="Clear search"
          aria-label="Clear search"
        >
          <X size={18} />
        </button>
      )}
      {value && resultCount !== undefined && (
        <div style={{ textAlign: 'center', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Found {resultCount} matching {resultCount === 1 ? 'product' : 'products'}
        </div>
      )}
    </div>
  );
};
