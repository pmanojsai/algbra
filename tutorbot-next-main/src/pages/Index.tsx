import { useState, useEffect } from "react";
import { CodeEditor } from "@/components/CodeEditor";
import { ExplanationPanel } from "@/components/ExplanationPanel";

const Index = () => {
  const [code, setCode] = useState(`// Example code
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Calculate first 5 Fibonacci numbers
for (let i = 0; i < 5; i++) {
  console.log(fibonacci(i));
}`);

  useEffect(() => {
    const savedCode = localStorage.getItem("lastCode");
    if (savedCode) {
      setCode(savedCode);
    }
  }, []);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    localStorage.setItem("lastCode", newCode);
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">AI Code Tutor</h1>
          <p className="text-muted-foreground">
            Write or paste your code below and get instant explanations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Code Editor</h2>
            <CodeEditor code={code} onChange={handleCodeChange} />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">AI Analysis</h2>
            <ExplanationPanel code={code} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;