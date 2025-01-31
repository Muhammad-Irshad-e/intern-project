import React from "react";
import { Card, Typography, Avatar, Button } from "@mui/material";
import { Stack } from "@mui/system";

const Userprofile = () => {
  const user = {
    fullname: "John Doe",
    email: "johndoe@example.com",
    mobile: "123-456-7890",
    password: "password123",
    avatar: "https://via.placeholder.com/100"
  };

  return (
    <div className="flex justify-center items-center p-0">
    <Card
      sx={{
        maxWidth: 400,
        paddingLeft:30,
        paddingRight:30,
        boxShadow: 5,
        borderRadius: 5,
        
        textAlign: "center",
      }}
    >
      <Stack direction="column" alignItems="center" spacing={4}>
        
        <Avatar
          src={user.avatar}
          alt={user.fullname}
          sx={{ width: 100, height: 100, border: "4px solid white", boxShadow: 3 }}
        />
        <Typography variant="h5" fontWeight={700} color="primary.dark">
          Name
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontStyle: "italic" }}>
          Email@gmail.com
        </Typography>
        <Typography variant="body1" color="text.secondary">
          9984307475
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontStyle: "italic" }}>
          ●●●●●●●●
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: 3, px: 4, py: 1, textTransform: "none" ,width:500 }}
        >
          Edit Profile
        </Button>
      </Stack>
    </Card>
    </div>
  );
};

export default Userprofile;
