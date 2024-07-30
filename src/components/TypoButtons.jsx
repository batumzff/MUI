import Typography from "@mui/material/Typography";
// or
// import { Typography } from '@mui/material';
// Tüm kütüphane içerisinden ilgili alt component i çıkarır.
// performans olarak problemli

const TypoButtons = () => {
  return (
    <div>
      <Typography variant="h5" component="h3" color="turquoise" align="center">
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
        
        sx={{ color: "white", backgroundColor: "tomato", p: 2 , m: 3}}
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
    </div>
  );
};

export default TypoButtons;
