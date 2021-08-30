import Button from "@/components/elements/Button";
import ComponentLayout from "@/components/layout/ComponentLayout";
import { EDITOR_THEME } from "@/editor/Theme";
import React, { useState } from "react";
import { LiveProvider, LiveEditor, LivePreview, LiveError } from "react-live";

const scope = { Button }

const Icon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
</svg>)


const Components = () => {
  const [color, setColor] = useState("")
  const [size, setSize] = useState("");
  const [icon, setIcon] = useState(false);

  const code = `
    <Button 
      label="My Button"
      type="button"
      onClick={() => alert("Hello")}
      ${color ? `color="${color}"` : ''}
      ${size ? `size="${size}"` : ''}
      ${icon ? `icon={
        <svg xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5" viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" 
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
            clipRule="evenodd" 
          />
        </svg>
      }` : ''}

    />
`

  return (
    <div className="w-full lg:w-1/2 m-auto shadow bg-gray-100 rounded p-2 flex flex-col items-center">
      <LiveProvider
        code={code}
        scope={scope}
        theme={EDITOR_THEME}
      >

        <div className="w-full border-2 border-gray-900 rounded">
          <div className="w-full py-5 flex justify-center bg-red-300">
            <LivePreview />
          </div>
          <div className="px-1 py-2 flex flex-wrap">
            <Button onClick={() => setColor("blue")} size="xs" rounded customClass="m-1" icon={<Icon />} />
            <Button onClick={() => setColor("green")} color="green" size="xs" rounded customClass="m-1" icon={<Icon />} />
            <Button onClick={() => setColor("blue")} size="xs" rounded customClass="m-1" icon={<Icon />} />
            <Button onClick={() => setColor("green")} color="green" size="xs" rounded customClass="m-1" icon={<Icon />} />
            <Button onClick={() => setColor("blue")} size="xs" rounded customClass="m-1" icon={<Icon />} />
            <Button onClick={() => setColor("green")} color="green" size="xs" rounded customClass="m-1" icon={<Icon />} />
            <Button onClick={() => setColor("blue")} size="xs" rounded customClass="m-1" icon={<Icon />} />
            <Button onClick={() => setColor("green")} color="green" size="xs" rounded customClass="m-1" icon={<Icon />} />
            <Button onClick={() => setColor("blue")} size="xs" rounded customClass="m-1" icon={<Icon />} />
            <Button onClick={() => setColor("green")} color="green" size="xs" rounded customClass="m-1" icon={<Icon />} />
            <Button onClick={() => setIcon(!icon)} size="xs" rounded customClass="m-1" label="Icon" />
            <button onClick={() => setSize("md")}>Medium</button>
          </div>
          <div className="w-full">
            <LiveEditor className="rounded-b" key={`${color}-${size}-${icon}`} />
          </div>

          <LiveError />
        </div>
      </LiveProvider>
    </div>
  )
}

export default Components;