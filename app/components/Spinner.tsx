import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";

export default function Spinner() {
  return (
    <div className="mb-10">
      <Box sx={{ display: "flex" }}>
        <CircularProgress
          sx={{
            color: grey[800],
            animationDuration: "1.5s",
          }}
        />
      </Box>
    </div>
  );
}
