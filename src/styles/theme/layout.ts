declare module "@mui/material/styles" {
  interface Theme {
    layout: {
      [key: string]: any;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    layout?: {
      displayMiddle?: any;
      displayCenter?: any;
      displayMiddleCenter?: any;
      displayMiddleTop?: any;
      displayMiddleBottom?: any;
      displayStartCenter?: any;
      displayStartTop?: any;
      displayStartBottom?: any;
      displayEndCenter?: any;
      displayEndTop?: any;
      displayEndBottom?: any;
      displayBetweenCenter?: any;
      displayBetweenTop?: any;
      displayBetweenBottom?: any;
      displayAroundCenter?: any;
      displayAroundTop?: any;
      displayAroundBottom?: any;
    };
  }
}

export default function themeLayout() {
  return {
    displayMiddle: {
      display: "flex",
      justifyContent: "center",
    },
    displayCenter: {
      display: "flex",
      alignItems: "center",
    },
    displayMiddleCenter: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    displayMiddleTop: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
    },
    displayMiddleBottom: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
    },
    displayStartCenter: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    displayStartTop: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    displayStartBottom: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-end",
    },
    displayEndCenter: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    displayEndTop: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-start",
    },
    displayEndBottom: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
    displayBetweenCenter: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    displayBetweenTop: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    displayBetweenBottom: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
    },
    displayAroundCenter: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
    displayAroundTop: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "flex-start",
    },
    displayAroundBottom: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "flex-end",
    },
  };
}
