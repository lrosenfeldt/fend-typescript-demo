type Props = {
  children: string;
  refetch: () => void;
};

const QueryError = ({ children, refetch }: Props) => {
  return (
    <div className="flex justify-center items-center text-gray-50 h-10">
      <h2 className="text-2xl">{children}</h2>
      <button
        className="h-full pl-2 hover:scale-110 transition-transform"
        type="button"
        aria-label="Neu laden"
        onClick={() => refetch()}
      >
        {/* refresh icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 m-auto"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};
export default QueryError;
