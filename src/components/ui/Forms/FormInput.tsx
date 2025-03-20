"use client";

import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

interface IInput {
    name: string; // name should be required
    type?: string;
    size?: "large" | "small";
    value?: string | string[] | undefined;
    id?: string;
    placeholder?: string;
    validation?: object;
    label?: string;
}

const FormInput = ({
    name,
    type = "text",
    size,
    value,
    id,
    placeholder,
    validation,
    label,
}: IInput) => {
    const { control } = useFormContext(); // get control from react-hook-form context

    return (
        <>
        {label? label : null}
        <Controller
            control={control}
            name={name}
            rules={validation}
            render={({ ...field}) => (
                <Input
                    id={id}
                    type={type}
                    size={size}
                    placeholder={placeholder}
                    {...field}
                    value={value ? value : field.value}
                   
                />
            )}
        />
        </>
    );
};

export default FormInput;
