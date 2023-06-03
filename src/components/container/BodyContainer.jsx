import { Grid, GridItem, Hide } from "@chakra-ui/react";
import { Fragment } from "react";

const BodyContainer = ({ children }) => {

  return (
    <>
      <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(18, 1fr)" gap={8}>
        {children.map((child, i) => {
          return (
            <Fragment key={i}>
              {i === 0 && (
                <GridItem rowSpan={0} colSpan={{ base: 18, md: 18, lg: 10 }}>
                  {child}
                </GridItem>
              )}
              {i !== 0 && (
                <Hide below="lg">
                  <GridItem rowSpan={0} colSpan={{ lg: 7 }}>
                    {child}
                  </GridItem>
                </Hide>
              )}
            </Fragment>
          );
        })}
      </Grid>
    </>
  );
};

export default BodyContainer;
