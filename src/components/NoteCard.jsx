import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Avatar, IconButton, Typography } from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { blue, green, pink, yellow } from "@mui/material/colors";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (item) => {
      if (item.category == "work") {
        return yellow[700];
      }
      if (item.category == "money") {
        return green[500];
      }
      if (item.category == "todos") {
        return pink[500];
      }
      return blue[500];
    },
  }
});

const NoteCard = ({ item, onHandleDelete }) => {
  const classes = useStyles(item);

  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {item.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => onHandleDelete(item.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={item.title}
          subheader={item.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {item.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
