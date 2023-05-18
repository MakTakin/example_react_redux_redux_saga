import React, { FC, useEffect } from "react";
import { Button } from "components";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "store";
import { getInitialFakeState, toggleButtonState } from "store/buttonSlice";

export const Home: FC = () => {
  const buttonState = useSelector((state: RootState) => state.button);
  const dispatch = useDispatch();
  const onToggleButtonState = () => {
    dispatch(toggleButtonState(buttonState.value));
  };

  useEffect(() => {
    dispatch(getInitialFakeState());
  }, []);

  return (
    <>
      <Button state={buttonState} onClick={onToggleButtonState} />
    </>
  );
};
