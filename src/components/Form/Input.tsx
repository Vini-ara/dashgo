import { InputProps as ChakraUiInputProps, Input as ChakraUiInput, FormControl, FormLabel, forwardRef, FormErrorMessage } from "@chakra-ui/react";
import { FieldError} from "react-hook-form";
import { ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraUiInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error = null,...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
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
        ref={ref}
        size="lg"
        {...rest}
      />

      { !!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  );
}

export const Input = forwardRef(InputBase);