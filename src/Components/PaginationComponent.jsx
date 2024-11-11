import { Pagination, Stack, ThemeProvider, createTheme } from "@mui/material";
import React, { useEffect, useState } from "react";

const PaginationComponent = ({
  setPaginatedData,
  filteredData,
}) => {
  // console.log(data, 'data')
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };


  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedData(filteredData?.slice(startIndex, endIndex));
  }, [currentPage, filteredData]);

  const theme = createTheme({
    palette: { primary: { main: "#E5E7EB", contrastText: "#00000" } },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Stack direction="row" justifyContent="center" marginTop={2}>
          <Pagination
            count={Math.ceil(filteredData?.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Stack>
      </ThemeProvider>
    </div>
  );
};

export default PaginationComponent;