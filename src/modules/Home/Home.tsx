import React, { FC } from "react";
import { Button } from "components";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "store";
import { toggleState } from "store";

export const Home: FC = () => {
  const buttonState = useSelector((state: RootState) => state.button.value);
  const dispatch = useDispatch();
  const onToggleButtonState = () => {
    dispatch(toggleState());
  };

  return (
    <>
      <Button state={buttonState} onClick={onToggleButtonState} />
    </>
  );
};
