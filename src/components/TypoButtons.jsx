import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// or
// import { Typography } from '@mui/material';
// Tüm kütüphane içerisinden ilgili alt component i çıkarır.
// performans olarak problemli

const TypoButtons = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          border: "1px solid red",
          p: 2,
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          color="turquoise"
          align="center"
        >
          Deneme
        </Typography>

        <Typography variant="body1" color="violet" align="center">
          bu bir p elementidir
        </Typography>

        <Typography variant="body2" color="#dc143c" align="center">
          bu bir p elementidir
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          color="fuchsia"
          sx={{ color: "white", backgroundColor: "tomato", p: 2, m: 3 }}
        >
          bu bir p elementidir
        </Typography>

        <Typography variant="subtitle2" align="center">
          bu bir p elementidir
        </Typography>

        <Typography variant="button" align="center">
          bu bir p elementidir
        </Typography>
        <div>
          <Typography variant="caption" align="center">
            bu bir p elementidir
          </Typography>
        </div>
      </Box>
      <Stack direction={"row"} mt={4} spacing={2} justifyContent={"center"}>
        <Button variant="text">Text</Button>
        <Button variant="contained" color="secondary">Contained</Button>
        <Button variant="outlined" color="error">Outlined</Button>
        <Button variant="outlined" color="warning">Outlined</Button>
        <Button variant="outlined" color="success">Outlined</Button>
        <Button variant="contained" color="primary">Contained</Button>
      </Stack>
    </>
  );
};

export default TypoButtons;
