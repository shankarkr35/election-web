import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from "reactstrap";
import { ImageGenderCircle, Loader, DeleteModal, ExportCSVModal, TableContainer, TableContainerHeader } from "shared/components";
import { electionSelector } from 'selectors';

// Components
import ElectionDetailsWidget from "./ElectionDetailsWidget";
//SimpleBar
import SimpleBar from "simplebar-react";

const ElectionDatabase = () => {

  const { election, electionCandidates, electionCampaigns, electionCommittees } = useSelector(electionSelector);

  const moderators = Array.isArray(election.moderators)
    ? election.moderators
    : [];

  return (
    <React.Fragment>
      <Card>
        <CardHeader className="align-items-center d-flex border-bottom-dashed">
          <h4 className="card-title mb-0 flex-grow-1">Database</h4>
          <div className="flex-shrink-0">
            <button type="button" className="btn btn-soft-info btn-sm">
              <i className="ri-upload-2-fill me-1 align-bottom"></i> Upload
            </button>
          </div>
        </CardHeader>

        <CardBody>
          <div className="vstack gap-2">
            <div className="border rounded border-dashed p-2">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar-sm">
                    <div className="avatar-title bg-light text-secondary rounded fs-24">
                      <i className="ri-folder-zip-line"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <h5 className="fs-13 mb-1">
                    <Link
                      to="#"
                      className="text-body text-truncate d-block"
                    >
                      App-pages.zip
                    </Link>
                  </h5>
                  <div>2.2MB</div>
                </div>
                <div className="flex-shrink-0 ms-2">
                  <div className="d-flex gap-1">
                    <button
                      type="button"
                      className="btn btn-icon text-muted btn-sm fs-18"
                    >
                      <i className="ri-download-2-line"></i>
                    </button>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        tag="button"
                        className="btn btn-icon text-muted btn-sm fs-18 dropdown"
                        type="button"
                      >
                        <i className="ri-more-fill"></i>
                      </DropdownToggle>
                      <DropdownMenu>
                        <li>
                          <DropdownItem>
                            <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                            Rename
                          </DropdownItem>
                        </li>
                        <li>
                          <DropdownItem>
                            <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>{" "}
                            Delete
                          </DropdownItem>
                        </li>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded border-dashed p-2">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar-sm">
                    <div className="avatar-title bg-light text-secondary rounded fs-24">
                      <i className="ri-file-ppt-2-line"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <h5 className="fs-13 mb-1">
                    <Link
                      to="#"
                      className="text-body text-truncate d-block"
                    >
                      Q8Tasweet-admin.ppt
                    </Link>
                  </h5>
                  <div>2.4MB</div>
                </div>
                <div className="flex-shrink-0 ms-2">
                  <div className="d-flex gap-1">
                    <button
                      type="button"
                      className="btn btn-icon text-muted btn-sm fs-18"
                    >
                      <i className="ri-download-2-line"></i>
                    </button>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        tag="button"
                        className="btn btn-icon text-muted btn-sm fs-18 dropdown"
                        type="button"
                      >
                        <i className="ri-more-fill"></i>
                      </DropdownToggle>
                      <DropdownMenu>
                        <li>
                          <DropdownItem>
                            <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                            Rename
                          </DropdownItem>
                        </li>
                        <li>
                          <DropdownItem>
                            <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>{" "}
                            Delete
                          </DropdownItem>
                        </li>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded border-dashed p-2">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar-sm">
                    <div className="avatar-title bg-light text-secondary rounded fs-24">
                      <i className="ri-folder-zip-line"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <h5 className="fs-13 mb-1">
                    <Link
                      to="#"
                      className="text-body text-truncate d-block"
                    >
                      Images.zip
                    </Link>
                  </h5>
                  <div>1.2MB</div>
                </div>
                <div className="flex-shrink-0 ms-2">
                  <div className="d-flex gap-1">
                    <button
                      type="button"
                      className="btn btn-icon text-muted btn-sm fs-18"
                    >
                      <i className="ri-download-2-line"></i>
                    </button>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        tag="button"
                        className="btn btn-icon text-muted btn-sm fs-18 dropdown"
                        type="button"
                      >
                        <i className="ri-more-fill"></i>
                      </DropdownToggle>
                      <DropdownMenu>
                        <li>
                          <DropdownItem>
                            <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                            Rename
                          </DropdownItem>
                        </li>
                        <li>
                          <DropdownItem>
                            <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>{" "}
                            Delete
                          </DropdownItem>
                        </li>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded border-dashed p-2">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar-sm">
                    <div className="avatar-title bg-light text-secondary rounded fs-24">
                      <i className="ri-image-2-line"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <h5 className="fs-13 mb-1">
                    <Link
                      to="#"
                      className="text-body text-truncate d-block"
                    >
                      bg-pattern.png
                    </Link>
                  </h5>
                  <div>1.1MB</div>
                </div>
                <div className="flex-shrink-0 ms-2">
                  <div className="d-flex gap-1">
                    <button
                      type="button"
                      className="btn btn-icon text-muted btn-sm fs-18"
                    >
                      <i className="ri-download-2-line"></i>
                    </button>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        tag="button"
                        className="btn btn-icon text-muted btn-sm fs-18 dropdown"
                        type="button"
                      >
                        <i className="ri-more-fill"></i>
                      </DropdownToggle>
                      <DropdownMenu>
                        <li>
                          <DropdownItem>
                            <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                            Rename
                          </DropdownItem>
                        </li>
                        <li>
                          <DropdownItem>
                            <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>{" "}
                            Delete
                          </DropdownItem>
                        </li>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2 text-center">
              <button type="button" className="btn btn-success">
                View more
              </button>
            </div>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default ElectionDatabase;
