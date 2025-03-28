import React from 'react';
import { OutputCode } from './types';
import Button from '../common/Button';

interface CodeOutputPanelProps {
  output: OutputCode;
}

const CodeOutputPanel: React.FC<CodeOutputPanelProps> = ({ output }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const CodeSection: React.FC<{ title: string; code: string }> = ({ title, code }) => (
    <div className="flex-1">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-sm font-medium text-brand-contrast/70">{title}</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => copyToClipboard(code)}
          className="h-6 px-2"
        >
          Copy
        </Button>
      </div>
      <pre className="bg-brand-contrast/10 rounded-lg p-2 overflow-x-auto">
        <code className="text-xs text-brand-contrast/90">
          {code}
        </code>
      </pre>
    </div>
  );

  return (
    <div className="col-span-4 bg-brand-contrast/5 backdrop-blur-sm border border-brand-contrast/20 rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-medium text-brand-contrast">Generated Code</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* HTML/CSS Section */}
        <div className="space-y-2">
          {output.html && <CodeSection title="HTML" code={output.html} />}
          {output.tsx && <CodeSection title="TSX" code={output.tsx} />}
          {output.jsx && <CodeSection title="JSX" code={output.jsx} />}
        </div>

        {/* TSX/JSX Section */}
        <div className="space-y-2">
          {output.css && <CodeSection title="CSS" code={output.css} />}
        </div>
      </div>
    </div>
  );
};

export default CodeOutputPanel;