const LoadingSpinner = () => {
  return (
    <div className="relative w-8 h-8 m-auto">
      <div className="absolute top-0 left-0 animate-ping w-full h-full rounded-full border-2 border-gray-50" />
      <div className="absolute top-1/4 left-1/4 animate-ping w-1/2 h-1/2 rounded-full border-2 border-gray-50" />
    </div>
  );
};
export default LoadingSpinner;
