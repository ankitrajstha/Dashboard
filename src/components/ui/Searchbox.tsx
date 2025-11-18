interface SearchboxProps {
  onSetGlobalFilter: (value: string) => void;
}
const Searchbox = ({ onSetGlobalFilter }: SearchboxProps) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      className="mb-4 p-2 border border-gray-300 rounded w-full"
      onChange={(e) => onSetGlobalFilter(e.target.value)}
    />
  );
};

export default Searchbox;
