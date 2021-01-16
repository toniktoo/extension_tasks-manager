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
import CustomTimer from "../../timer";
import { toggleItemListTask } from "../../../redux/thunks/listTask";

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    height: "100%",
    minHeight: "200px",
    maxHeight: "200px",
    overflow: "auto",
    backgroundColor: "#424242",
  },
  listItemText: {
    color: "#fff",
  },
}));

const ItemsList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { listTask, listTitle } = useSelector((state) => state);

  const handleToggle = (id) => {
    dispatch(toggleItemListTask({ id }));
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
          <CustomTimer timer={timer} />
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
