import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/Index";
export const useTypeSelector:TypedUseSelectorHook<RootState> = useSelector