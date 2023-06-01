import { Grid, GridItem } from "@chakra-ui/react";
import { Fragment } from "react";

const MainContainer = ({ children }) => {
  return (
    <>
      <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(24, 1fr)">
        {children.map((child, i) => {
          return (
            <Fragment key={i}>
              {i === 0 && (
                <GridItem rowSpan={0} colSpan={6}>
                  {child}
                </GridItem>
              )}
              {i !== 0 && (
                <GridItem rowSpan={0} colSpan={18}>
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
