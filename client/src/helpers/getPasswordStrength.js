import { initialSecurityPass } from "../pages/register/initialValuesForm";

export const getPasswordStrength = (value) => {
  if (value.length === 0) {
    return initialSecurityPass;
  }

  if (value.length > 0 && value.length <= 5) {
    return {
      message: "Baja",
      background: "bg-red-100",
      strong: "border-red-900",
      text: "text-red-700",
    };
  }

  if (value.length > 5 && value.length <= 10) {
    return {
      message: "Media",
      background: "bg-orange-100",
      strong: "border-orange-900",
      text: "text-orange-700",
    };
  }
  if (value.length > 10) {
    return {
      message: "Alta",
      background: "bg-green-100",
      strong: "border-green-800",
      text: "text-green-700",
    };
  }
};
