import { javascript } from "@codemirror/lang-javascript";
import CodeMirror from "@uiw/react-codemirror";

interface CodeEditorProps {
  code: string;
  onChange: (value: string) => void;
}

export const CodeEditor = ({ code, onChange }: CodeEditorProps) => {
  return (
    <div className="w-full h-full min-h-[300px] rounded-lg overflow-hidden border border-border">
      <CodeMirror
        value={code}
        height="100%"
        theme="dark"
        extensions={[javascript()]}
        onChange={onChange}
        className="text-sm"
      />
    </div>
  );
};