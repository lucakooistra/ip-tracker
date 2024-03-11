import { ChangeEvent, FormEvent, useId } from "react";
import "./ipform.scss";

type IpFormProps = {
  type: "text";
  value: string;
  placeholder: string;
  id?: string;
  name: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export function IpForm({ type, value, placeholder, onChange, onSubmit, name }: IpFormProps) {
  return (
    <>
      <div className="ipform">
        <form onSubmit={onSubmit}>
          <input
            type={type}
            id={useId()}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
          />
          <button><span></span></button>
        </form>
      </div>
    </>
  );
}
