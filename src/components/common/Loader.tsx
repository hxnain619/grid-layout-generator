import React from "react";

const Loader: React.FC = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-brand-background/80 backdrop-blur-sm z-50">
            <div className="relative">
                {/* Outer ring */}
                <div className="w-16 h-16 rounded-full border-4 border-brand-contrast/20 animate-pulse" />

                {/* Spinning ring */}
                <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-t-brand-primary animate-spin" />

                {/* Center dot */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-brand-primary animate-ping" />
                </div>

                {/* Loading text */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-brand-contrast/70 text-sm font-medium">
                    Loading...
                </div>
            </div>
        </div>
    );
};

export default Loader; 