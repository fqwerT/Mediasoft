import { useFirstMountFetch } from "../../hooks/useFirstMountedFetch";
import { Products } from "../Products/Products";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import "./style.css";
import { useTypeSelector } from "../../store/hooks/useTypeSelector";
import { shallowEqual } from "react-redux";
import { useMemo } from "react";
import { checkStep } from "./utils";
const steps = ["Select product", "Add to cart", "Pay for the goods", "Enjoy:)"];

export const ProductsList: React.FC = () => {
  const items = useFirstMountFetch("https://fakestoreapi.com/products?limit=4");
  const cart = useTypeSelector((state) => state.cart.cart, shallowEqual);
  const isPay = useTypeSelector((state) => state.cart.isPay);

  const checkCurrentStep = useMemo(() => {
    return checkStep(cart, isPay);
  }, [cart, isPay]);
  return (
    <div className="home">
      <Products items={items} type={"home"} />

      <Stepper
        activeStep={checkCurrentStep}
        alternativeLabel
        sx={{ marginTop: "15px" }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};
