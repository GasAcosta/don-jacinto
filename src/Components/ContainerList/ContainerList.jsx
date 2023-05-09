import CardMenu from "../CardMenu/CardMenu";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Contact from "../Contact/Contact";
import { menu } from "../../itemMock";
import { useState, useEffect } from "react";

const ContainerList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemList = new Promise((resolve) => {
      resolve(menu);
    });

    itemList
      .then((res) => {
        setItems(res);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  return (
    <Box
      sx={{
        position: "absolute",
        width: "375px",
        height: "574px",
        top: "238px",
        background: "#F8F8F8",
        borderRadius: "30px 30px 0px 0px",
        display: "flex",
        justifyContent: "space-around",
        padding: "32px",
      }}
    >
      <Grid>
        <Grid item xs={8}>
          <h3
            style={{
              color: "#5843BE",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "20px",
              lineHeight: "30px",
            }}
          >
            Información
          </h3>
          <p
            style={{
              color: "#948D97",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "21px",
            }}
          >
            Todo lo que necesitás saber para cuidar a tu minipig.
          </p>
        </Grid>
        <Grid item>
          <CardMenu key={items.id} items={items} />
        </Grid>
        <Grid item>
          <Contact />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContainerList;
