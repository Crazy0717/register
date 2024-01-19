interface props {
  type?: string;
  label: string;
  placeholder: string;
  id?: string;
  state?: string;
  setState: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Input = ({
  type = "text",
  label,
  id,
  placeholder,
  state,
  setState,
}: props) => {
  return (
    <div className="form-floating pb-2">
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        value={state || ""}
        onChange={(e) => setState(e.target.value)}
      />
      <label htmlFor="floatingInput">{label}</label>
    </div>
  );
};

export default Input;
