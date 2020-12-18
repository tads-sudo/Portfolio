import { createUseStyles } from "react-jss";
import { TUATARA, SCREEN_TABLET, SCREEN_DESKTOP } from "../../../theme";

export const useStyles = createUseStyles({
  buttonText: {
    color: TUATARA,
    fontFamily: "Roboto, sans-serif",
    fontSize: "0.875em",
    fontWeight: "bold",
    letterSpacing: "0.0109375em",
    lineHeight: "135%",
  },
  [`@media (min-width: ${SCREEN_TABLET.MIN}px)`]: {
    buttonText: {
      fontSize: "1em",
      letterSpacing: "0.0125em",
      lineHeight: "120%",
    },
  },
  [`@media (min-width: ${SCREEN_DESKTOP.MIN}px)`]: {
    buttonText: {
      fontSize: "1.25em",
      letterSpacing: "0.015625em",
      fontWeight: "500",
    },
  },
});
