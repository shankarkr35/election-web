// React imports
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { deleteUserElection } from "../../../store/actions";
import UserElectionModal from "./Modals/UserElectionModal";

// Utility and helper imports
import { isEmpty } from "lodash";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Custom component imports
import {
  ImageGenderCircle,
  Loader,
  DeleteModal,
  ExportCSVModal,
  TableContainer,
} from "../../../shared/components";

// Reactstrap (UI) imports
import { Badge, Col, Container, Row, Card, CardBody } from "reactstrap";

// Additional package imports
import SimpleBar from "simplebar-react";

const UsersTab = () => {
  const dispatch = useDispatch();

  const { election_id, userElections, isUserElectionSuccess, isElectionSuccess, error } = useSelector((state) => ({
    election_id: state.Elections.electionDetails.id,
    userElections: state.Elections.userElections,
    isUserElectionSuccess: state.Elections.isUserElectionSuccess,
    isUsersSuccess: state.Users.isUsersSuccess,
    error: state.Users.error,
  }));

  const [userElection, setUserElection] = useState([]);
  const [userElectionList, setUserElectionList] =
    useState(userElections);

  useEffect(() => {
    setUserElectionList(userElections);
  }, [userElections]);

  // Modals: Delete, Set, Edit
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteModalMulti, setDeleteModalMulti] = useState(false);
  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  // Toggle for Add / Edit Models
  const toggle = useCallback(() => {
    if (modal) {
      setModal(false);
      setUserElection(null);
    } else {
      setModal(true);
    }
  }, [modal]);

  // Delete Data
  const handleDeleteUserElection = () => {
    if (userElection) {
      dispatch(deleteUserElection(userElection.id));
      setDeleteModal(false);
    }
  };

  const onClickDelete = (userElection) => {
    setUserElection(userElection);
    setDeleteModal(true);
  };

  // Add Dataa
  // handleUserElectionClicks Function
  // const handleUserElectionClicks = () => {
  //   setUserElection(""); // Changed from empty string to null
  //   setIsEdit(false);
  //   toggle();
  // };

  // Update Data
  const handleUserElectionClick = useCallback(
    (arg) => {
      const userElection = arg;

      setUserElection({
        // Basic Information
        id: userElection.id,
        election_id: userElection.election_id,
        user_id: userElection.user_id,
        name: userElection.name,
        votes: userElection.votes,
        remarks: userElection.remarks,
      });

      setIsEdit(true);
      toggle();
    },
    [toggle]
  );

  // Checked All
  const checkedAll = useCallback(() => {
    const checkall = document.getElementById("checkBoxAll");
    const checkedEntry = document.querySelectorAll(".userElectionCheckBox");

    if (checkall.checked) {
      checkedEntry.forEach((checkedEntry) => {
        checkedEntry.checked = true;
      });
    } else {
      checkedEntry.forEach((checkedEntry) => {
        checkedEntry.checked = false;
      });
    }
    deleteCheckbox();
  }, []);

  // Delete Multiple
  const [selectedCheckBoxDelete, setSelectedCheckBoxDelete] = useState([]);
  const [isMultiDeleteButton, setIsMultiDeleteButton] = useState(false);

  const deleteMultiple = () => {
    const checkall = document.getElementById("checkBoxAll");
    selectedCheckBoxDelete.forEach((element) => {
      dispatch(deleteUserElection(element.value));
      setTimeout(() => {
        toast.clearWaitingQueue();
      }, 3000);
    });
    setIsMultiDeleteButton(false);
    checkall.checked = false;
  };

  const deleteCheckbox = () => {
    const checkedEntry = document.querySelectorAll(".userElectionCheckBox:checked");
    checkedEntry.length > 0
      ? setIsMultiDeleteButton(true)
      : setIsMultiDeleteButton(false);
    setSelectedCheckBoxDelete(checkedEntry);
  };

  const columns = useMemo(
    () => [
      {
        Header: (
          <input
            type="checkbox"
            id="checkBoxAll"
            className="form-check-input"
            onClick={() => checkedAll()}
          />
        ),
        Cell: (cellProps) => {
          return (
            <input
              type="checkbox"
              className="userElectionCheckBox form-check-input"
              value={cellProps.row.original.id}
              onChange={() => deleteCheckbox()}
            />
          );
        },
        id: "id",
      },
      {
        Header: "Position",
        accessor: "position",
        filterable: false,
        Cell: (cellProps) => {
          return <p>{cellProps.row.original.position}</p>;
        },
      },

      {
        Header: "User",
        filterable: true,
        Cell: (userElection) => (
          <>
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                {userElection.row.original.image ? (
                  // Use the ImageCircle component here
                  <ImageGenderCircle
                    genderValue={userElection.row.original.gender}
                    imagePath={userElection.row.original.image}
                  />
                ) : (
                  <div className="flex-shrink-0 avatar-xs me-2">
                    <div className="avatar-title bg-soft-success text-success rounded-circle fs-13">
                      {userElection.row.original.name.charAt(0)}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex-grow-1 ms-2 name">
                {userElection.row.original.name}{" "}
                {userElection.row.original.isWinner ? (
                  <Badge color="success" className="badge-label">
                    {" "}
                    <i className="mdi mdi-circle-medium"></i> Winner{" "}
                  </Badge>
                ) : null}
              </div>
            </div>
          </>
        ),
      },

      {
        Header: "Votes",
        accessor: "votes",
        filterable: false,
        Cell: (cellProps) => {
          return <p>{cellProps.row.original.votes}</p>;
        },
      },
      {
        Header: "Action",
        Cell: (cellProps) => {
          return (
            <div className="list-inline hstack gap-2 mb-0">
              <button
                to="#"
                className="btn btn-sm btn-soft-primary edit-list"
                onClick={() => {
                  const userElection = cellProps.row.original;
                  setUserElection(userElection);
                }}
              >
                <i className="ri-phone-line align-bottom" />
              </button>
              <button
                to="#"
                className="btn btn-sm btn-soft-success edit-list"
                onClick={() => {
                  const userElection = cellProps.row.original;
                  setUserElection(userElection);
                }}
              >
                <i className="ri-question-answer-line align-bottom" />
              </button>
              <button
                to="#"
                className="btn btn-sm btn-soft-warning edit-list"
                onClick={() => {
                  const userElection = cellProps.row.original;
                  setUserElection(userElection);
                }}
              >
                <i className="ri-eye-fill align-bottom" />
              </button>
              <button
                to="#"
                className="btn btn-sm btn-soft-info edit-list"
                onClick={() => {
                  const userElection = cellProps.row.original;
                  handleUserElectionClick(userElection);
                }}
              >
                <i className="ri-pencil-fill align-bottom" />
              </button>
              <button
                to="#"
                className="btn btn-sm btn-soft-danger remove-list"
                onClick={() => {
                  const userElection = cellProps.row.original;
                  onClickDelete(userElection);
                }}
              >
                <i className="ri-delete-bin-5-fill align-bottom" />
              </button>
            </div>
          );
        },
      },
      {
        Header: "ID",
        accessor: "user_id",
        filterable: true,
        enableGlobalFilter: false,
        Cell: (cellProps) => {
          return <p>{cellProps.row.original.id}</p>;
        },
        // id: "userId", // Make sure id property is defined here
      },
    ],
    [handleUserElectionClick, checkedAll]
  );

  // Export Modal
  const [isExportCSV, setIsExportCSV] = useState(false);

  return (
    <React.Fragment>
      <ExportCSVModal
        show={isExportCSV}
        onCloseClick={() => setIsExportCSV(false)}
        data={userElectionList}
      />
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteUserElection}
        onCloseClick={() => setDeleteModal(false)}
      />
      <DeleteModal
        show={deleteModalMulti}
        onDeleteClick={() => {
          deleteMultiple();
          setDeleteModalMulti(false);
        }}
        onCloseClick={() => setDeleteModalMulti(false)}
      />
      <UserElectionModal
        modal={modal} // boolean to control modal visibility
        setModal={setModal}
        isEdit={isEdit} // boolean to determine if editing
        toggle={toggle}
        userElection={userElection}
      />

      <Row>
        <Col>
          <div>
            <button
              className="btn btn-soft-success"
              onClick={() => setIsExportCSV(true)}
            >
              Export
            </button>
          </div>
          <Card id="userElectionList">
            <CardBody className="pt-0">
              <div>
                {userElectionList && userElectionList.length ? (
                  // Log the userElectionList array to the console
                  (console.log(userElectionList),
                    (
                      <TableContainer
                        // Data
                        columns={columns}
                        data2={userElectionList}
                        data={userElectionList || []}
                        customPageSize={50}

                        // Header
                        isTableContainerHeader={true}
                        ContainerHeaderTitle="User Users"
                        AddButton="Add User User"
                        setDeleteModalMulti={setDeleteModalMulti}
                        setIsEdit={setIsEdit}
                        toggle={toggle}

                        // Filters
                        isGlobalFilter={true}
                        isUserGenderFilter={true}
                        isMultiDeleteButton={isMultiDeleteButton}
                        SearchPlaceholder="Search for User Users..."
                        setUserElectionList={setUserElectionList}
                        // handleUserElectionClick={handleUserElectionClicks}

                        // Styling
                        divClass="table-responsive table-card mb-3"
                        tableClass="align-middle table-nowrap mb-0"
                        theadClass="table-light table-nowrap"
                        thClass="table-light text-muted"
                      />
                    ))
                ) : (
                  <Loader error={error} />
                )}
              </div>
              <ToastContainer closeButton={false} limit={1} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default UsersTab;
