import styled, { css } from "styled-components";

// Sizes for screen breakpoint, fonts, etc
const size = {
  mobile: "20rem", //320px
  tablet: "30rem", //480px
  laptop: "48rem", //768px
  desktop: "64rem", //1024px
  desktopLarge: "76rem", //1216px
};

// Media queries for breakpoints
export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopLarge: `(min-width: ${size.desktopLarge})`,
};

// Paragraph font sizes
const paragraphFontSizes = {
  small: "14px",
  medium: "16px",
  large: "18px",
  xLarge: "20px",
};
// Heading font sizes (h1, h2 )
const h1fontSizes = {
  small: "36px",
  medium: "48px",
  large: "60px",
  xLarge: "72px",
};
const h2fontSizes = {
  small: parseInt(h1fontSizes.small) / 1.68 + "px",
  medium: parseInt(h1fontSizes.medium) / 1.68 + "px",
  large: parseInt(h1fontSizes.large) / 1.68 + "px",
  xLarge: parseInt(h1fontSizes.xLarge) / 1.68 + "px",
};

const h3fontSizes = {
  small: parseInt(h2fontSizes.small) / 1.15 + "px",
  medium: parseInt(h2fontSizes.medium) / 1.25 + "px",
  large: parseInt(h2fontSizes.large) / 1.68 + "px",
  xLarge: parseInt(h2fontSizes.xLarge) / 1.85 + "px",
};

// Color palette
export const colorPalette = {
  primary: {
    primaryOne: "#fff",
  },
  secondary: {
    secondaryOne: "rgba(169, 189, 255, 0.8)",
  },
  accent: {
    accentOne: "#6eb995",
    accentOneDark: "#41745b",

    accentTwo: "#bfdfd0ed",
    accentText: "#6d6d6d",
    accentTextDark: "#414040",
    accentTextLight: "#eceaea",
  },
};

// Box shadows
export const boxShadows = {
  boxShadowLighter: "rgba(0, 0, 0, 0.1) 0px 10px 20px, rgba(0, 0, 0, 0.15) 0px 6px 6px",
  boxShadowLight: "rgba(0, 0, 0, 0.15) 0px 10px 20px, rgba(0, 0, 0, 0.19) 0px 6px 6px",
  boxShadowBase: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  boxShadowDark: "rgba(0, 0, 0, 0.23) 0px 10px 20px, rgba(0, 0, 0, 0.27) 0px 6px 6px",
  boxShadowDarker: "rgba(0, 0, 0, 0.27) 0px 10px 20px, rgba(0, 0, 0, 0.31) 0px 6px 6px",
};

// Global styled components

export const StyledSpacing = styled.div`
  margin-block: ${(props) => `${props.size}px`};
`;
export const StyledPageContainer = styled.div`
  min-height: 100vh;
  max-width: 1400px; // change based on client request
  padding: 1rem;
  @media ${device.tablet} {
    padding: 2rem;
  }
  @media ${device.desktop} {
    padding: 2.5rem;
  }
`;

export const MainText = styled.p`
  color: ${colorPalette.accent.accentText}; // update when needed
  font-family: "Archivo", sans-serif;
  font-size: ${paragraphFontSizes.small}; // Default font size

  @media ${device.tablet} {
    font-size: ${paragraphFontSizes.medium};
  }

  @media ${device.desktop} {
    font-size: ${paragraphFontSizes.large};
  }

  @media ${device.desktopLarge} {
    font-size: ${paragraphFontSizes.xLarge};
  }
`;

export const HeaderOneText = styled.h1`
  font-size: ${h1fontSizes.small};
  line-height: 40px;
  font-family: "Poppins", sans-serif;

  @media ${device.tablet} {
    font-size: ${h1fontSizes.medium};
    line-height: 52px;
  }

  @media ${device.desktop} {
    font-size: ${h1fontSizes.large};
    line-height: 64px;
  }

  @media ${device.desktopLarge} {
    font-size: ${h1fontSizes.xLarge};
    line-height: 76px;
  }
`;

export const HeaderTwoText = styled.h2`
  padding-bottom: 1.5rem;
  font-family: "Poppins", sans-serif;
  font-size: ${h2fontSizes.small};
  @media ${device.tablet} {
    font-size: ${h2fontSizes.medium};
  }
  @media ${device.desktop} {
    font-size: ${h2fontSizes.large};
  }

  @media ${device.desktopLarge} {
    font-size: ${h2fontSizes.xLarge};
  }
`;

export const HeaderThreeText = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: ${h3fontSizes.small};
  @media ${device.tablet} {
    font-size: ${h3fontSizes.medium};
  }
  @media ${device.desktop} {
    font-size: ${h3fontSizes.large};
  }

  @media ${device.desktopLarge} {
    font-size: ${h3fontSizes.xLarge};
  }
`;

// Global styled css
export const GRID_CENTER_ITEM = css`
  display: grid;
  place-items: center;
`;

export const FLEX_ALIGN_ITEM_CENTER = css`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const LINK_HOVER = css`
  list-style: none;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: ${colorPalette.accent.accentOne};
    transition: width 0.5s ease-in-out;
    transform: translateX(-50%);
  }
  &:hover::before {
    width: 100%;
  }
`;
