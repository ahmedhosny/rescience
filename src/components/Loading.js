import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import theme from '../theme.js';

const GGrid = glamorous(Grid)({
  textAlign: 'center',
});

const GCircularProgress = glamorous(CircularProgress)({
  paddingTop: 0,
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
          <GCircularProgress style={{color: theme.orange}} size={50} />
          <br />
          <Typography> generating plots </Typography>
        </GGrid>
      </Grid>
    );
  }
}
Loading.propTypes = {};
export default Loading;
