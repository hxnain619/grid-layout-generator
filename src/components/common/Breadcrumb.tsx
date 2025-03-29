import React from "react";
import { Link } from "react-router-dom";
import StructuredData from "./StructuredData";

interface BreadcrumbProps {
    items: {
        label: string;
        href: string;
    }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.label,
            "item": `https://grid-layout-generator.vercel.app${item.href}`
        }))
    };

    return (
        <>
            <nav aria-label="Breadcrumb" className="py-2 px-4">
                <ol className="flex items-center space-x-2 text-sm text-brand-contrast/70">
                    {items.map((item, index) => (
                        <li key={item.href} className="flex items-center">
                            {index > 0 && <span className="mx-2">/</span>}
                            {index === items.length - 1 ? (
                                <span className="text-brand-primary">{item.label}</span>
                            ) : (
                                <Link
                                    to={item.href}
                                    className="hover:text-brand-primary transition-colors"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
            <StructuredData data={breadcrumbData} />
        </>
    );
};

export default Breadcrumb; 