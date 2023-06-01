import { Grid, GridItem } from "@chakra-ui/react";
import { Fragment, useEffect, useState } from "react";

const BodyContainer = ({ children }) => {
  const [isWeb, setIsWeb] = useState(window.innerWidth > 1020);

  useEffect(() => {
    const handleResize = () => {
      setIsWeb(window.innerWidth > 1020);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Grid 
        templateRows="repeat(2, 1fr)" 
        templateColumns="repeat(18, 1fr)"
        gap={8}
      >
        {console.log(isWeb)}
      {children.map((child, i) => {
          return (
            <Fragment key={i}>
              {i === 0 && (
                <GridItem rowSpan={0} colSpan={{base:18, md:18, lg:10}}>
                  {child}
                </GridItem>
              )}
              {i !== 0 && isWeb && (
                <GridItem rowSpan={0} colSpan={{lg:7}}>
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
