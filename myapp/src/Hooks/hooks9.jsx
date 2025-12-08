import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
const CustomInput = forwardRef((props, ref) => {
  const [value, setValue] = useState("");
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      setValue("");
    },
    getValue: () => {
      return value;
    },
  }));
  return (
    <input
      ref={inputRef}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type="text"
      placeholder="Type something"
    />
  );
});
const Hook9 = () => {
  const inputRef = useRef();
  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
      <button onClick={() => inputRef.current.clear()}>Clear Input</button>
      <button onClick={() => alert(inputRef.current.getValue())}>
        Get Value
      </button>{" "}
    </div>
  );
};
export default Hook9;
