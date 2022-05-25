function ProgramCard({ className, title }) {
  return (
    <div
      className={`my-4 text-center py-16 text-gray-50 font-bold text-xl rounded-xl ${className}`}
    >
      <h2>{title}</h2>
    </div>
  );
}
export default ProgramCard;
