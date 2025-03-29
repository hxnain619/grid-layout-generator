import React, { useEffect } from "react";

interface SchemaOrgData {
    "@context": string;
    "@type": string;
    [key: string]: unknown;
}

interface StructuredDataProps {
    data: SchemaOrgData;
}

const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
    useEffect(() => {
        // Create script element
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.text = JSON.stringify(data);

        // Add script to document head
        document.head.appendChild(script);

        // Cleanup
        return () => {
            document.head.removeChild(script);
        };
    }, [data]);

    return null;
};

export default StructuredData; 