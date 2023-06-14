import { Button, CardActions, CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import React from "react";

function Footprint() {
  return (
    <div>
      <div>
        <Card className="QCardFootprint">
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="QTitleFootprint"
            >
              Footprint{" "}
            </Typography>
          </CardContent>
          <div></div>
        </Card>
      </div>
    </div>
  );
}

export default Footprint;
