import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
export interface SendFormData {
  full_name: string;
  phone_number: string;
  option: string;
}

export function useSendEmail() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<SendFormData>({
    mode: "onChange",
    criteriaMode: "all",
  });

  const onSubmit = (data: SendFormData, event?: React.BaseSyntheticEvent) => {
    event?.preventDefault();
    const formData = data as unknown as Record<string, unknown>;

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_EMAIL_ID,
        formData,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return { register, handleSubmit, onSubmit, errors, isSubmitting, isValid };
}
