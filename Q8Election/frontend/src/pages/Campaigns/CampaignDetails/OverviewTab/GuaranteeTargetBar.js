import React, { useState, useEffect } from 'react';
import { Tooltip, Card, CardHeader, CardBody, Col, Row, Table, Progress } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const Marker = ({ percentage, color, label, total, height }) => {
    const [isComponentMounted, setComponentMounted] = useState(false);

    useEffect(() => {
        setComponentMounted(true);
    }, []);

    const uniqueId = `markerTooltip-${label.replace(/\s/g, '')}-${total}`;

    return (
        <div className="marker" style={{ position: 'absolute', right: `${percentage}%`, bottom: 0 }}>
            <div style={{ width: '36px', position: 'absolute', right: '-3px', bottom: `${height}px`, zIndex: 1000 }}>
                <div className={`bg-${color}`}  style={{ width: '8px', height: '8px', borderRadius: '50%', position: 'absolute', bottom: 0, right: 0 }} id={uniqueId}></div>
                {isComponentMounted && (
                    <Tooltip className="red" placement="top" isOpen={true} target={uniqueId} >
                        {label} ({total})
                    </Tooltip>
                )}
            </div>
            <div className={`bg-${color}`} style={{ width: '2px', height: `${height}px` }}></div>
        </div>
    );
};







const GuaranteeTargetBar = ({ campaign, results }) => {
    const firstWinnerVotes = campaign.election.previousElection.firstWinner.votes
    const medianWinnerVotes = campaign.election.previousElection.medianWinner
    const lastWinnerVotes = campaign.election.previousElection.lastWinner.votes
    const targetVotes = campaign.targetVotes

    const endOfBar = firstWinnerVotes + (firstWinnerVotes / 10);


    const totalGuarantees = results.totalGuarantees;
    const totalConfirmedGuarantees = results.totalConfirmedGuarantees;
    const totalConfirmedAttendees = results.totalConfirmedAttendees;

    const reductedConfirmedGuarantees = totalConfirmedGuarantees - totalConfirmedAttendees
    const reductedGuarantees = totalConfirmedGuarantees - totalConfirmedAttendees



    const calculatePercentage = (total) => ((total / endOfBar) * 100).toFixed(2);

    return (
        <React.Fragment>
            <Card>
                <CardHeader>
                    <h5 className="card-title">
                        <strong className="float-end text-success">{targetVotes}</strong>
                        <strong>هدف النجاح</strong>
                    </h5>
                </CardHeader>
                <CardBody className="p-3"> {/* Added p-3 for padding to the CardBody */}
                    <Row className="mb-4 p-3"> {/* Increased margin-bottom to mb-4 */}
                        <div className="d-flex align-items-center py-2 " style={{ height: '140px' }}>
                            <div className="flex-shrink-0 me-3">
                                <div className="avatar-xs">
                                    <div className="avatar-title bg-light rounded-circle text-muted fs-16">
                                        <i className=" ri-bar-chart-fill"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-grow-1 position-relative">
                                <Progress multi>
                                    <Progress bar
                                        value={calculatePercentage(reductedGuarantees)}
                                        color="success" className="animated-progess progress-xs progress-label" />
                                    <Progress bar
                                        value={calculatePercentage(reductedConfirmedGuarantees)}
                                        color="info" className="animated-progess progress-md progress-label" />
                                    <Progress bar
                                        value={calculatePercentage(totalGuarantees)}
                                        color="danger" className="animated-progess progress-xl progress-label" />
                                </Progress>

                                <div className="position-absolute top-0" style={{ width: '100%', height: '100%' }}>
                                    <Marker percentage={calculatePercentage(firstWinnerVotes)} color="success" label="الأول" total={firstWinnerVotes} height={12} />
                                    <Marker percentage={calculatePercentage(lastWinnerVotes)} color="danger" label="التاسع" total={lastWinnerVotes} height={12} />
                                    <Marker percentage={calculatePercentage(medianWinnerVotes)} color="info" label="المتوسط" total={medianWinnerVotes} height={12} />
                                    <Marker percentage={calculatePercentage(targetVotes)} color="primary" label="الهدف" total={targetVotes} height={56} />
                                </div>
                            </div>
                        </div>
                        <Col lg={6}>
                            <p><strong>مراكز النجاح في الانتخابات الأخيرة: </strong></p>
                            <div className="pb-3">
                                <Table>
                                    <tr>
                                        <td className="d-flex align-items-center">
                                            <i className="mdi mdi-circle align-middle me-2 text-success"></i>
                                            <span>الأول</span>
                                        </td>
                                        <td>{firstWinnerVotes}</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex align-items-center">
                                            <i className="mdi mdi-circle align-middle me-2 text-info"></i>
                                            <span>متوسط النجاح</span>
                                        </td>
                                        <td>{medianWinnerVotes}</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex align-items-center">
                                            <i className="mdi mdi-circle align-middle me-2 text-danger"></i>
                                            <span>التاسع</span>
                                        </td>
                                        <td>{lastWinnerVotes}</td>
                                    </tr>
                                </Table>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <p><strong>متابعة المضامين: </strong></p>

                            <Table>
                                <tr>
                                    <td className="d-flex align-items-center">
                                        <i className="mdi mdi-circle align-middle me-2 text-success"></i>
                                        <span>الحضور</span>
                                    </td>
                                    <td>
                                        {results.totalConfirmedAttendees}
                                    </td>
                                </tr>

                                <tr>
                                    <td className="d-flex align-items-center">
                                        <i className="mdi mdi-circle align-middle me-2 text-info"></i>
                                        <span>مؤكد حضوره</span>
                                    </td>
                                    <td>{results.totalConfirmedGuarantees}</td>
                                </tr>

                                <tr>
                                    <td className="d-flex align-items-center">
                                        <i className="mdi mdi-circle align-middle me-2 text-danger"></i>
                                        <span>لم يأكد حضوره</span>
                                    </td>
                                    <td>{results.totalGuarantees}</td>
                                </tr>
                            </Table>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </React.Fragment >
    )
}

export default GuaranteeTargetBar;
