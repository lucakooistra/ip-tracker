import { ChangeEvent } from "react"

type IpFormProps = {
    type: 'text',
    id: string,
    value: string,
    placeholder: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function IpForm({
    type,
    id,
    value,
    placeholder,
    onChange
}: IpFormProps) {
    return (
        <>
            <input 
            type={type}
            id={id}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            />
        </>
    )
    }