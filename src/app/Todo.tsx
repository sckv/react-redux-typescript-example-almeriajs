import React from 'react';

import {withStyles, Theme} from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import Cancel from '@material-ui/icons/Cancel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

type Props = {
  handleDelete(): void;
  title: string;
  description: string;
  classes?: {[k: string]: string};
};

export const Todo: React.SFC<Props> = props => {
  const {classes} = props;
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes!.heading}>{props.title}</Typography>
        <Cancel className={classes!.cancel} onClick={props.handleDelete} />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography color="primary">{props.description}</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

const styles = (theme: Theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  cancel: {
    marginLeft: 'auto',
  },
});

export const ThemedTodo = withStyles(styles)(Todo);
