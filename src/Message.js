import React, { forwardRef } from "react";
import { Typography, Card, CardContent } from "@material-ui/core";
import "./Message.css";

const Message = forwardRef(({ username, message }, ref) => {
  const isUser = username === message.username;

  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent className="message__cardContent">
          <Typography
            className="message__content"
            color="white"
            variant="h5"
            component="h2"
          >
            <strong className="message__username">
              {!isUser && `${message.username || "Unknown User"}: `}
            </strong>
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
