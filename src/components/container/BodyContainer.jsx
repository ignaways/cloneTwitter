import { Grid, GridItem } from "@chakra-ui/react";
import { Fragment } from "react";

const BodyContainer = ({ children }) => {
  return (
    <>
      <Grid 
        templateRows="repeat(2, 1fr)" 
        templateColumns="repeat(18, 1fr)"
        gap={8}
      >
      {children.map((child, i) => {
          return (
            <Fragment key={i}>
              {i === 0 && (
                <GridItem rowSpan={0} colSpan={10}>
                  {child}
                </GridItem>
              )}
              {i !== 0 && (
                <GridItem rowSpan={0} colSpan={6}>
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

export default BodyContainer;
