
const LoadingSpinner = () => {
    return (
        <div className="flex h-[85vh] flex-col items-center justify-center p-10">
            {/* Spinner animation */}
            <div className="relative w-12 h-12">
                <div className="absolute w-full h-full border-4 border-gray-200 rounded-full"></div>
                <div className="absolute w-full h-full border-4 border-gray-900 rounded-full animate-spin border-t-transparent"></div>
            </div>

            {/* Optional loading text */}
            <p className="mt-4 text-sm font-medium text-gray-600 animate-pulse">
                Loading News...
            </p>
        </div>
    );
};

export default LoadingSpinner;