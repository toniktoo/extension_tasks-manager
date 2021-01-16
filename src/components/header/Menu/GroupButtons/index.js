import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Delete from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemListTitle } from "../../../../redux/thunks/listTitle";
import {
  createItemListTask,
  deleteItemListTask,
} from "../../../../redux/thunks/listTask";

const useStyles = makeStyles(() => ({
  root: {},
}));

export default function GroupButtons() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { listTitle, listTask } = useSelector((state) => state);

  const handleCreateTask = () => {
    const { title: titleList } = listTitle.filter(({ active }) => active)[0];
    const value = prompt("Введите название нового задания.");
    if (value) {
      dispatch(createItemListTask({ title: value, titleList }));
    }
  };

  const handleDeleteTask = () => {
    const { title } = listTitle.filter(({ active }) => active)[0];
    const activeList = listTask.filter(({ titleList }) => titleList === title);

    if (activeList.length === 0) {
      dispatch(deleteItemListTitle({ title }));
      return;
    }
    dispatch(deleteItemListTask({ title }));
  };

  return (
    <div className={classes.root}>
      <ButtonGroup
        variant="text"
        color="white"
        aria-label="text primary button group"
      >
        <Button onClick={handleDeleteTask}>
          <IconButton>
            <Delete />
          </IconButton>
        </Button>
        <Button onClick={handleCreateTask}>
          <IconButton>
            <AddIcon />
          </IconButton>
        </Button>
      </ButtonGroup>
    </div>
  );
}
