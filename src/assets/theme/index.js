import { createTheme } from '@mui/material'

export const theme = createTheme({
  color: {
    primaryColor: "#ff385c",
    secondaryColor: "#00848a"
  },
  text: {
    primaryColor: "#484848",
    secondaryColor: "#222"
  },
  // 在css in js中抽取相同功能的css代码: 混入
  mixin: {
    boxShadow: `
      transition: box-shadow 200ms ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,.18);
      }
    `
  },
  // material UI theme
  palette: {
    mode: "dark",
  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: 1,
          borderColor: "#C1C2C5",
          borderStyle: "solid",
          borderRadius: 10,
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
          backgroundColor: "#C1C2C5",
          color: "#C1C2C5",
          padding: 10,
        },
      },
    },
  },
});

export default theme