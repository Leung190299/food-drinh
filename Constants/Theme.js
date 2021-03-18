import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export const COLORS={
    
    primary: "#37e400", // orange
    secondary: "#e6e0e0eb",   // gray

    // colors
    black: "#1E1F20",
    white: "#FFFFFF",
}
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};
export const FONTS = {
    largeTitle: { fontFamily: "Pacifico-Regular", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Pacifico-Regular", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Pacifico-Regular", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Pacifico-Regular", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Pacifico-Regular", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Pacifico-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Pacifico-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Pacifico-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Pacifico-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Pacifico-Regular", fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;