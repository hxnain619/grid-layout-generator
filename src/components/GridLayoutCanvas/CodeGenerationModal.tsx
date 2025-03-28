import React from 'react';
import { CodeGenerationOptions, CodeGenerationTool } from './types';
import Button from '../common/Button';
import { IoClose } from 'react-icons/io5';
import { tools } from '../../data';

interface CodeGenerationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onGenerate: (options: CodeGenerationOptions) => void;
    currentOptions: CodeGenerationOptions;
}


export const CodeGenerationModal: React.FC<CodeGenerationModalProps> = ({
    isOpen,
    onClose,
    onGenerate,
    currentOptions,
}) => {
    const [options, setOptions] = React.useState<CodeGenerationOptions>(currentOptions);

    if (!isOpen) return null;

    const handleToolChange = (tool: CodeGenerationTool) => {
        setOptions({ ...options, tool });
    };

    const handleOptionToggle = (option: keyof CodeGenerationOptions) => {
        setOptions({
            ...options,
            [option]: !options[option],
        });
    };

    const handleGenerate = () => {
        onGenerate(options);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-brand-background/95 border border-brand-contrast/20 rounded-2xl p-6 max-w-2xl w-full mx-4 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold text-brand-contrast">Code Generation Options</h2>
                    <button
                        onClick={onClose}
                        className="text-brand-contrast/60 hover:text-brand-contrast transition-colors"
                    >
                        <IoClose className="w-5 h-5" />
                    </button>
                </div>

                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-brand-contrast/70 mb-3">
                            Select Framework
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {tools.map((tool) => (
                                <button
                                    key={tool.value}
                                    onClick={() => handleToolChange(tool.value)}
                                    className={`p-4 rounded-xl border transition-all duration-200 ${options.tool === tool.value
                                        ? 'border-brand-primary bg-brand-primary/10 text-brand-primary'
                                        : 'border-brand-contrast/20 hover:border-brand-contrast/40 bg-brand-contrast/5 hover:bg-brand-contrast/10'
                                        }`}
                                >
                                    <div className="text-left">
                                        <div className="font-medium mb-1">{tool.label}</div>
                                        <div className="text-sm text-brand-contrast/60">{tool.description}</div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-brand-contrast/5 rounded-xl p-4">
                        <h3 className="text-sm font-medium text-brand-contrast/70 mb-3">Additional Options</h3>
                        <div className="space-y-3">
                            <label className="flex items-center justify-between p-2 rounded-lg hover:bg-brand-contrast/10 transition-colors cursor-pointer">
                                <div className="flex items-center space-x-3">
                                    <input
                                        type="checkbox"
                                        checked={options.useCSSVariables}
                                        onChange={() => handleOptionToggle('useCSSVariables')}
                                        className="w-4 h-4 rounded border-brand-contrast/20 text-brand-primary focus:ring-brand-primary"
                                    />
                                    <span className="text-sm text-brand-contrast">Use CSS Variables</span>
                                </div>
                                <span className="text-xs text-brand-contrast/40">For dynamic values</span>
                            </label>

                            <label className="flex items-center justify-between p-2 rounded-lg hover:bg-brand-contrast/10 transition-colors cursor-pointer">
                                <div className="flex items-center space-x-3">
                                    <input
                                        type="checkbox"
                                        checked={options.useCSSModules}
                                        onChange={() => handleOptionToggle('useCSSModules')}
                                        className="w-4 h-4 rounded border-brand-contrast/20 text-brand-primary focus:ring-brand-primary"
                                    />
                                    <span className="text-sm text-brand-contrast">Use CSS Modules</span>
                                </div>
                                <span className="text-xs text-brand-contrast/40">For scoped styles</span>
                            </label>

                            <label className="flex items-center justify-between p-2 rounded-lg hover:bg-brand-contrast/10 transition-colors cursor-pointer">
                                <div className="flex items-center space-x-3">
                                    <input
                                        type="checkbox"
                                        checked={options.useTypeScript}
                                        onChange={() => handleOptionToggle('useTypeScript')}
                                        className="w-4 h-4 rounded border-brand-contrast/20 text-brand-primary focus:ring-brand-primary"
                                    />
                                    <span className="text-sm text-brand-contrast">Use TypeScript</span>
                                </div>
                                <span className="text-xs text-brand-contrast/40">For type safety</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-3 mt-8">
                    <Button
                        variant="ghost"
                        onClick={onClose}
                        size="sm"
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="primary"
                        onClick={handleGenerate}
                        size="sm"
                    >
                        Generate Code
                    </Button>
                </div>
            </div>
        </div>
    );
}; 