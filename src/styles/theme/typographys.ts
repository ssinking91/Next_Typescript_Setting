// Typography
declare module "@mui/material/styles" {
  interface TypographyVariants {
    [key: string]: any;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    fontFamily?: string;
    s48_w700?: React.CSSProperties;
    s32_w700?: React.CSSProperties;
    s28_w700?: React.CSSProperties;
    s24_w700?: React.CSSProperties;
    s22_w700?: React.CSSProperties;
    s20_w700?: React.CSSProperties;
    s18_w400?: React.CSSProperties;
    s18_w500?: React.CSSProperties;
    s18_w700?: React.CSSProperties;
    s16_w400?: React.CSSProperties;
    s16_w500?: React.CSSProperties;
    s16_w700?: React.CSSProperties;
    s15_w400?: React.CSSProperties;
    s15_w500?: React.CSSProperties;
    s15_w700?: React.CSSProperties;
    s14_w400?: React.CSSProperties;
    s14_w500?: React.CSSProperties;
    s14_w700?: React.CSSProperties;
    s13_w400?: React.CSSProperties;
    s13_w500?: React.CSSProperties;
    s13_w700?: React.CSSProperties;
    s12_w400?: React.CSSProperties;
    s12_w500?: React.CSSProperties;
    s12_w700?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    fontFamily: true;
    s48_w700: true;
    s32_w700: true;
    s28_w700: true;
    s24_w700: true;
    s22_w700: true;
    s20_w700: true;
    s18_w400: true;
    s18_w500: true;
    s18_w700: true;
    s16_w400: true;
    s16_w500: true;
    s16_w700: true;
    s15_w400: true;
    s15_w500: true;
    s15_w700: true;
    s14_w400: true;
    s14_w500: true;
    s14_w700: true;
    s13_w400: true;
    s13_w500: true;
    s13_w700: true;
    s12_w400: true;
    s12_w500: true;
    s12_w700: true;
  }
}

export default function themeTypographys() {
  return {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    //
    s48_w700: {
      fontSize: "3rem",
      fontWeight: 700,
      // lineHeight: '150%'
    },
    s32_w700: {
      fontSize: "2rem",
      fontWeight: 700,
      // lineHeight: '150%'
    },
    s28_w700: {
      fontSize: "1.75rem",
      fontWeight: 700,
      // lineHeight: '150%'
    },
    s24_w700: {
      fontSize: "1.5rem",
      fontWeight: 700,
      // lineHeight: '150%'
    },
    s22_w700: {
      fontSize: "1.375rem",
      fontWeight: 700,
      // lineHeight: '150%'
    },
    s20_w700: {
      fontSize: "1.25rem",
      fontWeight: 700,
      // lineHeight: '150%'
    },
    s18_w400: {
      fontSize: "1.125rem",
      fontWeight: 400,
      // lineHeight: '150%'
    },
    s18_w500: {
      fontSize: "1.125rem",
      fontWeight: 500,
      // lineHeight: '150%'
    },
    s18_w700: {
      fontSize: "1.125rem",
      fontWeight: 700,
      // lineHeight: '150%'
    },
    s16_w400: {
      fontSize: "1rem",
      fontWeight: 400,
      // lineHeight: '150%'
    },
    s16_w500: {
      fontSize: "1rem",
      fontWeight: 500,
      // lineHeight: '150%'
    },
    s16_w700: {
      fontSize: "1rem",
      fontWeight: 700,
      // lineHeight: '150%'
    },
    s15_w400: {
      fontSize: "0.9375rem",
      fontWeight: 400,
      // lineHeight: '150%'
    },
    s15_w500: {
      fontSize: "0.9375rem",
      fontWeight: 500,
      // lineHeight: '150%'
    },
    s15_w700: {
      fontSize: "0.9375rem",
      fontWeight: 700,
      // lineHeight: '150%'
    },
    s14_w400: {
      fontSize: "0.875rem",
      fontWeight: 400,
      // lineHeight: '150%'
    },
    s14_w500: {
      fontSize: "0.875rem",
      fontWeight: 500,
      // lineHeight: '150%'
    },
    s14_w700: {
      fontSize: "0.875rem",
      fontWeight: 700,
      // lineHeight: '150%'
    },
    s13_w400: {
      fontSize: "0.8125rem",
      fontWeight: 400,
      // lineHeight: '150%'
    },
    s13_w500: {
      fontSize: "0.8125rem",
      fontWeight: 500,
      // lineHeight: '150%'
    },
    s13_w700: {
      fontSize: "0.8125rem",
      fontWeight: 700,
      // lineHeight: '150%'
    },
    s12_w400: {
      fontSize: "0.75rem",
      fontWeight: 400,
      // lineHeight: '150%'
    },
    s12_w500: {
      fontSize: "0.75rem",
      fontWeight: 500,
      // lineHeight: '150%'
    },
    s12_w700: {
      fontSize: "0.75rem",
      fontWeight: 700,
      // lineHeight: '150%'
    },
  };
}
