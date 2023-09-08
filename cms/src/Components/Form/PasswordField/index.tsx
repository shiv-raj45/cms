import { Form, Input, InputProps } from "antd";
import { forwardRef } from "react";

export interface ITextFieldProps extends InputProps {
  error?: string;
  label: string;
}

const PassordField = forwardRef(({ label }: ITextFieldProps, ref) => {
  return (
    <Form.Item label={label}>
      <Input.Password />
    </Form.Item>
  );
});

export default PassordField;
