import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

interface ExplanationPanelProps {
  code: string;
}

export const ExplanationPanel = ({ code }: ExplanationPanelProps) => {
  const [explanation, setExplanation] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const generateSimpleExplanation = (code: string) => {
    // Simple explanation generator
    const lines = code.split('\n').filter(line => line.trim() !== '');
    let explanation = "Here's what this code does:\n\n";
    
    lines.forEach(line => {
      if (line.includes('function')) {
        explanation += `- Defines a function\n`;
      } else if (line.includes('for')) {
        explanation += `- Contains a loop\n`;
      } else if (line.includes('if')) {
        explanation += `- Has a conditional statement\n`;
      } else if (line.includes('return')) {
        explanation += `- Returns a value\n`;
      } else if (line.includes('console.log')) {
        explanation += `- Prints something to the console\n`;
      }
    });

    return explanation || "This is a code snippet. Try adding more code to get a detailed explanation.";
  };

  const getExplanation = () => {
    setLoading(true);
    try {
      // Simulate a brief delay for better UX
      setTimeout(() => {
        const newExplanation = generateSimpleExplanation(code);
        setExplanation(newExplanation);
        toast.success("Explanation generated");
      }, 500);
    } catch (error) {
      toast.error("Failed to generate explanation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-4 h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Code Explanation</h3>
        <Button onClick={getExplanation} disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analyzing...
            </>
          ) : (
            "Explain Code"
          )}
        </Button>
      </div>
      <div className="prose prose-invert max-w-none">
        {explanation ? (
          <p className="whitespace-pre-wrap">{explanation}</p>
        ) : (
          <p className="text-muted-foreground">
            Click "Explain Code" to get a simple explanation of your code.
          </p>
        )}
      </div>
    </Card>
  );
};