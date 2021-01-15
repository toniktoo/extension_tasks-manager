import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";
import { useSelector, useDispatch } from "react-redux";
import { toggleTaskChecked } from "../../../redux/slices/listTask";
import CustomTimer from "../../timer";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    minHeight: "200px",
    maxHeight: "200px",
    overflow: "auto",
    backgroundColor: theme.palette.background.paper,
  },
  listItemText: {
    color: "#fff",
  },
  timerText: {
    color: "#f50057",
    marginRight: "3px",
    display: "flex",
    flexDirection: "row",
  },
}));

const ItemsList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { listTask, listTitle } = useSelector((state) => state);

  const handleToggle = (id) => {
    dispatch(toggleTaskChecked({ id }));
  };

  const renderItems = () => {
    const activeTitle = listTitle.filter(({ active }) => active)[0];
    const { title } = activeTitle;

    const activeList = listTask.filter(({ titleList }) => titleList === title);

    return activeList.map(({ id, title, checked, timer }) => {
      return (
        <ListItem
          key={id}
          role={undefined}
          dense
          button
          onClick={() => handleToggle(id)}
        >
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={checked}
              tabIndex={-1}
              disableRipple
            />
          </ListItemIcon>
          <ListItemText
            id={id}
            primary={title}
            className={classes.listItemText}
          />
          <>
            {timer ? (
              <div className={classes.timerText}>
                <CustomTimer from={timer.from} />
                <span> : {Math.ceil(timer.to / 60)}m</span>
              </div>
            ) : null}
          </>
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="comments">
              <CommentIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      );
    });
  };

  return <List className={classes.container}>{renderItems()}</List>;
};

export default ItemsList;
