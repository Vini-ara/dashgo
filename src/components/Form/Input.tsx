import { InputProps as ChakraUiInputProps, Input as ChakraUiInput, FormControl, FormLabel } from "@chakra-ui/react";

interface InputProps extends ChakraUiInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraUiInput
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor:
            "gray.900"
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
}