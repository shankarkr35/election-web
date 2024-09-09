// React imports
import React from "react";
import { Loader, TableContainer } from "shared/components";


const ElectionResultParties = ({ candidatesResult, columns, error }) => {

  return (
    <React.Fragment>
      {candidatesResult && candidatesResult.length ? (
        <TableContainer
          // Data
          columns={columns}
          data={candidatesResult || []}
          customPageSize={50}

          // Sorting
          sortBy="position"

          // Styling
          divClass="table-responsive table-card mb-3"
          tableClass="align-middle table-nowrap mb-0"
          theadClass="table-light table-nowrap"
          thClass="table-light text-muted"
        />
      ) : (
        <Loader error={error} />
      )}
    </React.Fragment >
  );
};

export default ElectionResultParties;
