import React, { useEffect, useRef, useState } from "react";
import Editor from "@monaco-editor/react";

export default function Playground() {
  const inputRef = useRef(null);
  const [formattedJson, setFormattedJson] = useState("");
  const styles = {
    textContainer:
      "border-2 border-gray-300 rounded-md p-2 w-full h-[calc(100vh-100px)]",
    button: "bg-indigo-500 p-2 rounded text-white text-xs"
  };

  const editorOptions = {
    minimap: { enabled: false },
    fontSize: 14,
    lineNumbers: "off",
    bracketPairColorization: true,
    formatOnPaste: true,
    formatOnType: true,
    colorDecorators: true,
    scrollbar: {
      vertical: "hidden",
      horizontal: "hidden"
    }
  };

  const handleFormat = () => {
    const formatted = JSON.stringify(
      JSON.parse(inputRef.current.value),
      null,
      4
    );
    setFormattedJson(formatted);
  };

  const handleReset = () => {
    inputRef.current.value = "";
    setFormattedJson("");
  };
  return (
    <>
      <div className="flex flex-col justify-between lg:flex-row">
        {/* Input */}

        <textarea
          className={`${styles.textContainer} lg:w-4/12 text-sm`}
          ref={inputRef}
          placeholder="Input json..."
        ></textarea>

        {/* Controls */}
        <div className="flex flex-col justify-center mx-4 space-y-10">
          <button
            onClick={handleFormat}
            className={`${styles.button} bg-green-500`}
          >
            Format
          </button>
          <button onClick={handleReset} className={styles.button}>
            Reset
          </button>
        </div>
        {/* Output */}
        <Editor
          height="90vh"
          className={`${styles.textContainer} lg:w-6/12`}
          defaultLanguage="json"
          defaultValue={""}
          value={formattedJson}
          options={editorOptions}
          theme="one-dark"
        />
      </div>
    </>
  );
}
