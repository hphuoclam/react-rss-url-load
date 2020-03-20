import { createMuiTheme } from '@material-ui/core/styles';

const options = {
  overrides: {
    MuiContainer: {
      root: {
        padding: 0
      }
    },
    MuiTextField: {
      root: {
        width: "100%",
        marginBottom: 15
      }
    }
  }
}

const themes = createMuiTheme(options);

export default themes;