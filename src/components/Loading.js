import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import {CircularProgress} from 'material-ui/Progress';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import theme from '../theme.js';

const GGrid = glamorous(Grid)({
  textAlign: 'center',
});

/**
 * Loading component
 * @extends React
 */
class Loading extends React.Component {
  /**
   * render
   * @return {ReactElement} Loading
   */
  render() {
    return (
      <Grid container spacing={24}>
        <GGrid item xs={12} sm={12} md={12}>
          <CircularProgress style={{color: theme.yellow}} size={50} />
          <br />
          <Typography variant=""> generating plots </Typography>
        </GGrid>
      </Grid>
    );
  }
}
Loading.propTypes = {};
export default Loading;
