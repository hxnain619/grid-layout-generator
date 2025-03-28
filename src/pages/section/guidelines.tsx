import { FaArrowRight, FaCode, FaCopy, FaDesktop, FaPencilAlt } from "react-icons/fa";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { tools } from "../../data";

const GuideLines = () => {
    const headerRef = useScrollAnimation();
    const step1Ref = useScrollAnimation();
    const step2Ref = useScrollAnimation();
    const step3Ref = useScrollAnimation();
    const step4Ref = useScrollAnimation();

    return (
        <div id="guidelines" className="min-h-screen bg-brand-secondary/20">
            <div className="container mx-auto px-4 py-20 relative overflow-hidden">
                <div className="absolute animate-pulse hidden md:block text-[1020px] -top-[600px] left-[960px] font-extrabold text-brand/50 z-0">
                    r
                </div>
                {/* Header Section */}
                <div ref={headerRef} className="max-w-4xl mx-auto text-center mb-16 opacity-0">
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-contrast mb-6">
                        Grid Generator Guidelines
                    </h1>
                    <p className="text-xl text-brand-contrast/80">
                        Learn how to create perfect grid layouts with our intuitive tool
                    </p>
                </div>

                {/* Steps Section */}
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Step 1 */}
                    <div ref={step1Ref} className="bg-brand-contrast/10 backdrop-blur-sm rounded-xl p-6 border border-brand-contrast/20 opacity-0">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-brand-primary/20 p-3 rounded-lg">
                                <FaPencilAlt className="w-6 h-6 text-brand-primary" />
                            </div>
                            <h3 className="text-xl font-semibold text-brand-contrast">Step 1: Configure Your Grid</h3>
                        </div>
                        <p className="text-brand-contrast/70 mb-4">
                            Start by defining your grid structure:
                        </p>
                        <ul className="space-y-2 text-brand-contrast/70">
                            <li className="flex items-center gap-2">
                                <FaArrowRight className="w-4 h-4 text-brand-primary" />
                                Set the number of columns
                            </li>
                            <li className="flex items-center gap-2">
                                <FaArrowRight className="w-4 h-4 text-brand-primary" />
                                Define row heights
                            </li>
                            <li className="flex items-center gap-2">
                                <FaArrowRight className="w-4 h-4 text-brand-primary" />
                                Adjust gaps between cells
                            </li>
                        </ul>
                    </div>

                    {/* Step 2 */}
                    <div ref={step2Ref} className="bg-brand-contrast/10 backdrop-blur-sm rounded-xl p-6 border border-brand-contrast/20 opacity-0">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-brand-primary/20 p-3 rounded-lg">
                                <FaCode className="w-6 h-6 text-brand-primary" />
                            </div>
                            <h3 className="text-xl font-semibold text-brand-contrast">Step 2: Choose Output Format</h3>
                        </div>
                        <p className="text-brand-contrast/70 mb-4">
                            Select your preferred code format:
                        </p>
                        <ul className="flex justify-between space-y-2 text-brand-contrast/70">
                            <div>
                                {tools.map((tool, index) => {
                                    if (index < 4) {
                                        return (<li key={tool.value} className="flex items-center gap-2 capitalize">
                                            <FaArrowRight className="w-4 h-4 text-brand-primary" />
                                            {tool.label}
                                        </li>)
                                    }
                                })}
                            </div>
                            <div>
                                {tools.map((tool, index) => {
                                    if (index >= 4) {
                                        return (<li key={tool.value} className="flex items-center gap-2 capitalize">
                                            <FaArrowRight className="w-4 h-4 text-brand-primary" />
                                            {tool.label}
                                        </li>)
                                    }
                                })}
                            </div>

                        </ul>
                    </div>


                    {/* Step 3 */}
                    <div ref={step3Ref} className="bg-brand-contrast/10 backdrop-blur-sm rounded-xl p-6 border border-brand-contrast/20 opacity-0">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-brand-primary/20 p-3 rounded-lg">
                                <FaDesktop className="w-6 h-6 text-brand-primary" />
                            </div>
                            <h3 className="text-xl font-semibold text-brand-contrast">Step 3: Preview & Adjust</h3>
                        </div>
                        <p className="text-brand-contrast/70 mb-4">
                            Fine-tune your grid layout:
                        </p>
                        <ul className="space-y-2 text-brand-contrast/70">
                            <li className="flex items-center gap-2">
                                <FaArrowRight className="w-4 h-4 text-brand-primary" />
                                View real-time preview
                            </li>
                            <li className="flex items-center gap-2">
                                <FaArrowRight className="w-4 h-4 text-brand-primary" />
                                Test responsiveness
                            </li>
                            <li className="flex items-center gap-2">
                                <FaArrowRight className="w-4 h-4 text-brand-primary" />
                                Adjust breakpoints
                            </li>
                        </ul>
                    </div>

                    {/* Step 4 */}
                    <div ref={step4Ref} className="bg-brand-contrast/10 backdrop-blur-sm rounded-xl p-6 border border-brand-contrast/20 opacity-0">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-brand-primary/20 p-3 rounded-lg">
                                <FaCopy className="w-6 h-6 text-brand-primary" />
                            </div>
                            <h3 className="text-xl font-semibold text-brand-contrast">Step 4: Copy & Implement</h3>
                        </div>
                        <p className="text-brand-contrast/70 mb-4">
                            Get your grid code:
                        </p>
                        <ul className="space-y-2 text-brand-contrast/70">
                            <li className="flex items-center gap-2">
                                <FaArrowRight className="w-4 h-4 text-brand-primary" />
                                Copy generated code
                            </li>
                            <li className="flex items-center gap-2">
                                <FaArrowRight className="w-4 h-4 text-brand-primary" />
                                Download as file
                            </li>
                            <li className="flex items-center gap-2">
                                <FaArrowRight className="w-4 h-4 text-brand-primary" />
                                Paste into your project
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuideLines;