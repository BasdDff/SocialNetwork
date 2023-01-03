import { bindActionCreators } from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../redux";
import {allActions} from "../redux/actions";

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(allActions, dispatch)
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector