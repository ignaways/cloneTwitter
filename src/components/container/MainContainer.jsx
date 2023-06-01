import { Grid, GridItem } from "@chakra-ui/react";
import { Fragment } from "react";

const MainContainer = ({ children }) => {
  return (
    <>
      <Grid templateColumns={{base: "repeat(1, 1fr)",md:"repeat(24, 1fr)"}}>
        {children.map((child, i) => {
          return (
            <Fragment key={i}>
              {i === 0 && (
                <GridItem colSpan={{base:1, md:4, lg:6}}>
                  {child}
                </GridItem>
              )}
              {i !== 0 && (
                <GridItem colSpan={{base:1, md:20, lg:18}}>
                  {child}
                </GridItem>
              )}
            </Fragment>
          );
        })}
      </Grid>
    </>
  );
};

export default MainContainer;
