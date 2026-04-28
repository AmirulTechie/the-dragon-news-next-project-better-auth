
const loading = () => {
    return (
        <div className="flex h-[85vh] items-center justify-center p-10 flex-col">
            {/* Spinner animation */}
            <div className="relative w-12 h-12">
                <div className="absolute w-full h-full border-4 border-gray-200 rounded-full"></div>
                <div className="absolute w-full h-full border-4 border-gray-900 rounded-full animate-spin border-t-transparent"></div>
            </div>

            {/* Optional loading text */}
            
        </div>
    );
};

export default loading;