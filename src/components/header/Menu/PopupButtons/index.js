import React from "react";
import { createUseStyles } from "react-jss";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AddIcon from "@material-ui/icons/Add";
import { useSelector, useDispatch } from "react-redux";
import {
  createItemTitle,
  setActiveItemTitle,
} from "../../../../redux/slices/listTitle";

const useStyles = createUseStyles(() => ({
  container: {
    maxWidth: "150px",
    height: "25px",
    position: "relative",
    margin: "10px 15px",
    borderRadius: "5px",
    padding: "8px",
    boxSizing: "borderBox",
    cursor: "pointer",
    "&:hover": {
      transition: "0.3",
      backgroundColor: "rgba(255, 255, 255, 0.08)",
    },
  },
  titleWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#f50057",
  },
  arrow: {
    color: "#f50057",
  },
  popup: {
    display: ({ isOpen }) => (isOpen ? "flex" : "none"),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    color: "#fff",
    backgroundColor: "#000",
    top: "40px",
    width: "180px",
    left: "-15px",
    backgroundColor: "#424242",
    border: "1px solid rgb(81 81 81)",
  },
  list: {
    width: "100%",
    padding: "0",
    margin: "0",
    maxHeight: "150px",
    overflow: "scroll",
  },
  item: {
    margin: "8px 0",
    listStyle: "none",
    padding: "10px",
    boxSizing: "border-box",

    "&:hover": {
      transition: "0.3",
      color: "#f50057",
      backgroundColor: "rgba(255, 255, 255, 0.08)",
    },

    "&.active": {
      color: "#f50057",
      backgroundColor: "rgba(255, 255, 255, 0.08)",
    },
  },
  buttonAdd: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    width: "100%",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      transition: "0.3",
      color: "#f50057",
    },
  },
  iconAdd: {
    height: "35px",
    margin: "0 5px",
    display: "flex",
    alignItems: "center",
  },
}));

export default function PopupButtons() {
  const [isOpen, setIsOpen] = React.useState(false);

  const classes = useStyles({ isOpen });

  const dispatch = useDispatch();
  const listTitle = useSelector((state) => state.listTitle);

  const handleItemCreate = () => {
    const title = prompt("Введите название нового списка.");
    if (title) {
      dispatch(createItemTitle(title));
    }
  };

  const handleItemActive = (index) => {
    dispatch(setActiveItemTitle(index));

    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const renderItem = () => {
    return listTitle.map(({ title, active }, index) => {
      const num = index + 1;
      return (
        <li
          className={`${classes.item}${active ? " active" : ""}`}
          key={title + index}
          onClick={() => handleItemActive(index)}
        >
          {`${num}. ${title}`}
        </li>
      );
    });
  };

  const renderTitle = () => {
    const activeItem = listTitle.filter(({ active }) => active);
    const title = activeItem[0].title;

    if (title.length > 11) {
      return title.substring(0, 8) + "...";
    }
    return title;
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.titleWrap} onClick={handleToggle}>
          <div className={classes.title}>{renderTitle()}</div>
          <div className={classes.arrow}>
            <ArrowDropDownIcon />
          </div>
        </div>

        <div className={classes.popup}>
          <ul className={classes.list}>{renderItem()}</ul>
          <div className={classes.buttonAdd} onClick={handleItemCreate}>
            <div className={classes.iconAdd}>
              <AddIcon />
            </div>
            <div>Добавить список</div>
          </div>
        </div>
      </div>
    </>
  );
}

