import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { useTable, useGlobalFilter, useSortBy, useFilters, useExpanded, usePagination, useRowSelect } from "react-table";
import { Table, Row, Col, Button, Input, CardBody, CardFooter } from "reactstrap";
import { DefaultColumnFilter } from "../Filters";
import { TableContainerFooter, TableContainerFilters } from "shared/components";

const TableContainer = ({
  // Global Header----------
  isTableContainerFilter,
  isElectionCategoryFilter,
  isCampaignRankFilter,

  // Constants, going where?
  campaignMember,
  setElectionList,
  setCampaignMemberList,
  setElectionCandidateList,
  setCampaignGuaranteeList,

  // Filters----------
  isGlobalFilter,
  isSearchFilter,
  isStatusFilter,
  isPriorityFilter,
  isMemberRoleFilter,
  isCandidateGenderFilter,
  isGenderFilter,
  isGuaranteeAttendanceFilter,
  isAttendeesGenderFilter,
  isCommitteeFilter,
  isGuaranteeStatusFilter,
  isGuarantorFilter,
  isResetFilters,
  isTestFilter,

  // Settings
  activeTab,
  setActiveTab,
  filters,
  setFilters,
  customPageSize,
  SearchPlaceholder,

  // Actions
  onTabChange,
  getBgClassForStatus,

  // Data & Columns----------
  columns,
  data,

  // Table Sorting ----------
  sortBy,
  sortAsc,
  sortDesc,

  // Table Styling----------
  tableClass,
  theadClass,
  trClass,
  thClass,
  tdClass,
  divClass,

  // Global Header----------
  isTableFooter,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,

    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: DefaultColumnFilter },
      initialState: {
        pageIndex: 0,
        pageSize: customPageSize,
        selectedRowIds: 0,
        sortBy: [
          {
            id: sortBy, // replace with the actual column ID or accessor for the due date
            asc: sortAsc,
            desc: sortDesc,
          },
        ],
      },
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect
  );

  const generateSortingIndicator = (column) => {
    return column.isSorted ? (column.isSortedDesc ? " ↓" : " ↑") : " ↓↑";
  };

  const onChangeInSelect = (event) => {
    setPageSize(Number(event.target.value));
  };
  const onChangeInInput = (event) => {
    const page = event.target.value ? Number(event.target.value) - 1 : 0;
    gotoPage(page);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(windowWidth <= 768); // Assuming 768px as the breakpoint
  const [showFilters, setShowFilters] = useState(!isMobile); // Filters should be displayed by default for non-mobile
  useEffect(() => {
    const handleResize = () => {
      const isCurrentlyMobile = window.innerWidth <= 768;
      setWindowWidth(window.innerWidth);
      setIsMobile(isCurrentlyMobile);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <Fragment>
      <CardBody>
        {isMobile && (
          <Row className="d-grid mb-4">
            <button
              type="button"
              className="btn btn-danger mb-4"
              onClick={() => setShowFilters(!showFilters)}
            >
              عرض الفلاتر
            </button>
          </Row>
        )}

        {(showFilters || !isMobile) && isTableContainerFilter && (
          <TableContainerFilters

            isGlobalFilter={isGlobalFilter}
            // Upper Filters----------
            isElectionCategoryFilter={isElectionCategoryFilter}
            isCampaignRankFilter={isCampaignRankFilter}

            filters={filters}
            setFilters={setFilters}

            // Filters----------
            SearchPlaceholder={SearchPlaceholder}
            isSearchFilter={isSearchFilter}
            isStatusFilter={isStatusFilter}
            isPriorityFilter={isPriorityFilter}
            isCandidateGenderFilter={isCandidateGenderFilter}
            isGenderFilter={isGenderFilter}
            isGuaranteeAttendanceFilter={isGuaranteeAttendanceFilter}
            isAttendeesGenderFilter={isAttendeesGenderFilter}
            isMemberRoleFilter={isMemberRoleFilter}
            isCommitteeFilter={isCommitteeFilter}
            isGuaranteeStatusFilter={isGuaranteeStatusFilter}
            isGuarantorFilter={isGuarantorFilter}
            isResetFilters={isResetFilters}
            isTestFilter={isTestFilter}

            // Settings
            activeTab={activeTab}
            setActiveTab={setActiveTab}

            // Constant ----------
            campaignMember={campaignMember}
            setElectionList={setElectionList}
            setCampaignMemberList={setCampaignMemberList}
            setElectionCandidateList={setElectionCandidateList}
            setCampaignGuaranteeList={setCampaignGuaranteeList}
            // Actions
            onTabChange={onTabChange}

            // From useTable
            preGlobalFilteredRows={preGlobalFilteredRows}
            setPageSize={setPageSize}
            gotoPage={gotoPage}
          />
        )}
        <div className={divClass}>
          <Table hover {...getTableProps()} className={tableClass}>
            <thead className={theadClass}>
              {headerGroups.map((headerGroup) => (
                <tr
                  className={trClass}
                  key={headerGroup.id}
                  {...headerGroup.getHeaderGroupProps()}
                >
                  {headerGroup.headers.map((column) => (
                    <th
                      key={column.id}
                      className={thClass}
                      {...column.getSortByToggleProps()}
                    >
                      {column.render("Header")}
                      {generateSortingIndicator(column)}
                      {/* <Filter column={column} /> */}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <Fragment key={row.getRowProps().key}>
                    <tr>
                      {row.cells.map((cell, columnIndex) => {
                        let className = '';

                        // Check if getBgClassForStatus exists and columnIndex is not 0, then call it
                        if (getBgClassForStatus && columnIndex !== 0) {
                          className = getBgClassForStatus(columnIndex);
                        }

                        return (
                          <td
                            key={cell.id}
                            {...cell.getCellProps()}
                            className={className} // Assign the calculated className here
                          >
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  </Fragment>
                );
              })}
            </tbody>
            {isTableFooter &&
              <tfoot>
                {footerGroups.map((footerGroup) => (
                  <tr
                    {...footerGroup.getFooterGroupProps()}
                    key={footerGroup.id} // Add this line
                  >
                    {footerGroup.headers.map((column) => (
                      <td
                        {...column.getFooterProps()}
                        key={column.id} // Add this line
                      >
                        {column.render('Footer')}
                      </td>
                    ))}
                  </tr>
                ))}
              </tfoot>
            }
          </Table>
        </div>

        <Row className="justify-content-md-end justify-content-center align-items-center p-2">
          <Col className="col-md-auto">
            <div className="d-flex gap-1">
              <Button
                color="primary"
                onClick={previousPage}
                disabled={!canPreviousPage}
              >
                {"<"}
              </Button>
            </div>
          </Col>
          <Col className="col-md-auto d-none d-md-block">
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </Col>
          <Col className="col-md-auto">
            <Input
              type="number"
              min={1}
              style={{ width: 70 }}
              max={pageOptions.length}
              defaultValue={pageIndex + 1}
              onChange={onChangeInInput}
            />
          </Col>

          <Col className="col-md-auto">
            <div className="d-flex gap-1">
              <Button color="primary" onClick={nextPage} disabled={!canNextPage}>
                {">"}
              </Button>
            </div>
          </Col>
        </Row>
      </CardBody>

      <CardFooter>
        <TableContainerFooter />
      </CardFooter>
    </Fragment>
  );
};

TableContainer.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
};

export default TableContainer;
