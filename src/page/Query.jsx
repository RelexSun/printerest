// import { useEffect } from "react";
import useApi from "../hooks/useApi";
import ImageList from "../component/ImageList";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

function Query() {
  const { apiResponse, loading, error } = useApi();

  // useEffect(() => {
  //   console.log(apiResponse);
  // }, [apiResponse]);

  // useEffect(() => {
  //   if (error) {
  //     console.error("Error:", error);
  //   }
  // }, [error]);

  return (
    <div>
      {!error ? (
        <div>
          {loading ? (
            <Box sx={{ width: "100%" }}>
              <LinearProgress />
            </Box>
          ) : (
            <ImageList images={apiResponse} />
          )}
        </div>
      ) : (
        <h1>404</h1>
      )}
    </div>
  );
}

export default Query;
