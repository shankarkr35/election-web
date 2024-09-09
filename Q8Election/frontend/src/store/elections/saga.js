import { call, put, takeEvery, all, fork, take } from "redux-saga/effects";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Election Redux States
import {
  GET_ELECTIONS,
  GET_ELECTION_DETAILS,
  ADD_ELECTION,
  UPDATE_ELECTION,
  DELETE_ELECTION,

  // Election Candidates
  GET_ELECTION_CANDIDATES,
  ADD_NEW_ELECTION_CANDIDATE,
  UPDATE_ELECTION_CANDIDATE,
  DELETE_ELECTION_CANDIDATE,
  UPDATE_ELECTION_CANDIDATE_VOTES,

  // Election Parties
  GET_ELECTION_PARTIES,
  ADD_ELECTION_PARTY,
  UPDATE_ELECTION_PARTY,
  DELETE_ELECTION_PARTY,
  UPDATE_ELECTION_PARTY_RESULTS,

  // Election Party Candidates
  GET_ELECTION_PARTY_CANDIDATES,
  ADD_ELECTION_PARTY_CANDIDATE,
  UPDATE_ELECTION_PARTY_CANDIDATE,
  DELETE_ELECTION_PARTY_CANDIDATE,
  UPDATE_ELECTION_PARTY_CANDIDATE_VOTES,

  // Election Committees
  GET_ELECTION_COMMITTEES,
  ADD_NEW_ELECTION_COMMITTEE,
  UPDATE_ELECTION_COMMITTEE,
  DELETE_ELECTION_COMMITTEE,

  // Election Committee Results
  UPDATE_ELECTION_RESULTS,

  // Election Campaign
  GET_ELECTION_CAMPAIGNS,
  ADD_NEW_ELECTION_CAMPAIGN,
  UPDATE_ELECTION_CAMPAIGN,
  DELETE_ELECTION_CAMPAIGN,
} from "./actionType";

import {
  // getElections, getElectionDetails, 
  // API Response
  ElectionApiResponseSuccess,
  ElectionApiResponseError,

  // Elections
  addElectionSuccess,
  addElectionFail,
  updateElectionSuccess,
  updateElectionFail,
  deleteElectionSuccess,
  deleteElectionFail,

  // Election Candidates
  addElectionCandidateSuccess,
  addElectionCandidateFail,
  updateElectionCandidateSuccess,
  updateElectionCandidateFail,
  deleteElectionCandidateSuccess,
  deleteElectionCandidateFail,
  updateElectionCandidateVotesSuccess,
  updateElectionCandidateVotesFail,

  // Election Parties
  addElectionPartySuccess,
  addElectionPartyFail,
  updateElectionPartySuccess,
  updateElectionPartyFail,
  deleteElectionPartySuccess,
  deleteElectionPartyFail,
  updateElectionPartyResultsSuccess,
  updateElectionPartyResultsFail,

  // Election Party Candidates
  addElectionPartyCandidateSuccess,
  addElectionPartyCandidateFail,
  updateElectionPartyCandidateSuccess,
  updateElectionPartyCandidateFail,
  deleteElectionPartyCandidateSuccess,
  deleteElectionPartyCandidateFail,
  updateElectionPartyCandidateVotesSuccess,
  updateElectionPartyCandidateVotesFail,

  // Election Committees
  addElectionCommitteeSuccess,
  addElectionCommitteeFail,
  updateElectionCommitteeSuccess,
  updateElectionCommitteeFail,
  deleteElectionCommitteeSuccess,
  deleteElectionCommitteeFail,

  // Election Committees Results
  updateElectionResultsSuccess,
  updateElectionResultsFail,

  // Election Campaigns
  addElectionCampaignSuccess,
  addElectionCampaignFail,
  updateElectionCampaignSuccess,
  updateElectionCampaignFail,
  deleteElectionCampaignSuccess,
  deleteElectionCampaignFail,

} from "./action";

//Include Both Helper File with needed methods
import {
  // Elections
  getElections as getElectionsApi,
  getElectionDetails as getElectionDetailsApi,
  addElection,
  updateElection,
  deleteElection,

  // Election Candidates
  getElectionCandidates as getElectionCandidatesApi,
  addNewElectionCandidate,
  updateElectionCandidate,
  deleteElectionCandidate,
  updateElectionCandidateVotes,

  // Election Parties
  getElectionParties as getElectionPartiesApi,
  addElectionParty,
  updateElectionParty,
  deleteElectionParty,
  updateElectionPartyResults,

  // Election Party Candidates
  getElectionPartyCandidates as getElectionPartyCandidatesApi,
  addElectionPartyCandidate,
  updateElectionPartyCandidate,
  deleteElectionPartyCandidate,
  updateElectionPartyCandidateVotes,

  // Election Committees
  getElectionCommittees as getElectionCommitteesApi,
  addNewElectionCommittee,
  updateElectionCommittee,
  deleteElectionCommittee,
  updateElectionResults,

  // Election Campaigns
  getElectionCampaigns as getElectionCampaignsApi,
  addNewElectionCampaign,
  updateElectionCampaign,
  deleteElectionCampaign,
} from "../../helpers/backend_helper";

// Elections
function* getElections({ payload: view }) {
  try {
    const response = yield call(getElectionsApi, view);  // Pass view to the API call
    yield put(ElectionApiResponseSuccess(GET_ELECTIONS, response.data));
  } catch (error) {
    yield put(ElectionApiResponseError(GET_ELECTIONS, error));
  }
}

function* getElectionDetails({ payload: election, view }) {
  try {
    const response = yield call(getElectionDetailsApi, election, view);
    yield put(ElectionApiResponseSuccess(GET_ELECTION_DETAILS, response.data));
  } catch (error) {
    yield put(ElectionApiResponseError(GET_ELECTION_DETAILS, error));
  }
}

// function* getElectionDetails({ payload: election, view }) {
//   try {
//     const response = yield call(getElectionDetailsApi, election, view);
//     yield put(ElectionApiResponseSuccess(GET_ELECTION_DETAILS, response.data));
//   } catch (error) {
//     yield put(ElectionApiResponseError(GET_ELECTION_DETAILS, error));
//   }
// }

function* onAddElection({ payload: election }) {
  try {
    const response = yield call(addElection, election);
    yield put(addElectionSuccess(response));
    toast.success("تم إضافة الإنتخابات بنجاح", { autoClose: 2000 });
  } catch (error) {
    yield put(addElectionFail(error));
    toast.error("خطأ في إضافة الإنتخابات", { autoClose: 2000 });
  }
}

function* onUpdateElection({ payload: election }) {
  try {
    const response = yield call(updateElection, election);
    yield put(updateElectionSuccess(response));
    toast.success("تم تحديث الإنتخابات بنجاح", { autoClose: 2000 });
  } catch (error) {
    yield put(updateElectionFail(error));
    toast.error("خطأ في تحديث الإنتخابات", { autoClose: 2000 });
  }
}

function* onDeleteElection({ payload: election }) {
  try {
    const response = yield call(deleteElection, election);
    yield put(deleteElectionSuccess({ election, ...response }));
    toast.success("تم حذف الانتخابات بنجاح", { autoClose: 2000 });
  } catch (error) {
    yield put(deleteElectionFail(error));
    toast.error("Election Delete Failed", { autoClose: 2000 });
  }
}

// Election Candidates
function* getElectionCandidates({ payload: election }) {
  try {
    const response = yield call(getElectionCandidatesApi, election);
    yield put(
      ElectionApiResponseSuccess(GET_ELECTION_CANDIDATES, response.data)
    );
  } catch (error) {
    yield put(ElectionApiResponseError(GET_ELECTION_CANDIDATES, error));
  }
}

function* onAddNewElectionCandidate({ payload: electionCandidate }) {
  try {
    const response = yield call(addNewElectionCandidate, electionCandidate);
    yield put(addElectionCandidateSuccess(response));
    toast.success("تم إضافة مرشح الانتخابات بنجاح", { autoClose: 2000 });
  } catch (error) {
    yield put(addElectionCandidateFail(error));
    toast.error("خطأ في إضافة مرشح الانتخابات", { autoClose: 2000 });
  }
}

function* onUpdateElectionCandidate({ payload: electionCandidate }) {
  try {
    const response = yield call(updateElectionCandidate, electionCandidate);
    yield put(updateElectionCandidateSuccess(response));
    toast.success("تم تحديث مرشح الانتخابات بنجاح", {
      autoClose: 2000,
    });
  } catch (error) {
    yield put(updateElectionCandidateFail(error));
    toast.error("خطأ في تحديث مرشح الانتخابات", { autoClose: 2000 });
  }
}

function* onDeleteElectionCandidate({ payload: electionCandidate }) {
  try {
    const response = yield call(deleteElectionCandidate, electionCandidate);
    yield put(
      deleteElectionCandidateSuccess({ electionCandidate, ...response })
    );
    toast.success("تم حذف مرشح الانتخابات بنجاح", { autoClose: 2000 });
  } catch (error) {
    yield put(deleteElectionCandidateFail(error));
    toast.error("خطأ في حذف مرشح الانتخابات", { autoClose: 2000 });
  }
}

// Election Candidate Votes
function* onUpdateElectionCandidateVotes({ payload: electionCandidateVotes }) {
  try {
    console.log("onUpdateElectionCandidateVotes saga started", electionCandidateVotes);
    const response = yield call(updateElectionCandidateVotes, electionCandidateVotes);
    console.log("Received response from update API:", response);
    yield put(updateElectionCandidateVotesSuccess(response));
    console.log("Dispatched updateElectionCandidateVotesSuccess");
    toast.success("تم تحديث نتائج الإنتخابات بنجاح", {
      autoClose: 2000,
    });
  } catch (error) {
    console.error("Caught an error in onUpdateElectionCandidateVotes:", error);
    yield put(updateElectionCandidateVotesFail(error));
    console.log("Dispatched updateElectionCandidateVotesFail");
    toast.error("خطأ في تحديث نتائج الإنتخابات", { autoClose: 2000 });
  }
}

// Election Parties
function* getElectionParties({ payload: election }) {
  try {
    const response = yield call(getElectionPartiesApi, election);
    yield put(
      ElectionApiResponseSuccess(GET_ELECTION_PARTIES, response.data)
    );
  } catch (error) {
    yield put(ElectionApiResponseError(GET_ELECTION_PARTIES, error));
  }
}

function* onAddNewElectionParty({ payload: electionParty }) {
  try {
    const response = yield call(addElectionParty, electionParty);
    yield put(addElectionPartySuccess(response));
    toast.success("تم إضافة مرشح الانتخابات بنجاح", { autoClose: 2000 });
  } catch (error) {
    yield put(addElectionPartyFail(error));
    toast.error("خطأ في إضافة مرشح الانتخابات", { autoClose: 2000 });
  }
}

function* onUpdateElectionParty({ payload: electionParty }) {
  try {
    const response = yield call(updateElectionParty, electionParty);
    yield put(updateElectionPartySuccess(response));
    toast.success("تم تحديث مرشح الانتخابات بنجاح", {
      autoClose: 2000,
    });
  } catch (error) {
    yield put(updateElectionPartyFail(error));
    toast.error("خطأ في تحديث مرشح الانتخابات", { autoClose: 2000 });
  }
}

function* onDeleteElectionParty({ payload: electionParty }) {
  try {
    const response = yield call(deleteElectionParty, electionParty);
    yield put(
      deleteElectionPartySuccess({ electionParty, ...response })
    );
    toast.success("تم حذف مرشح الانتخابات بنجاح", { autoClose: 2000 });
  } catch (error) {
    yield put(deleteElectionPartyFail(error));
    toast.error("خطأ في حذف مرشح الانتخابات", { autoClose: 2000 });
  }
}

// Election Party Votes
function* onUpdateElectionPartyVotes({ payload: electionPartyResults }) {
  try {
    console.log("onUpdateElectionPartyVotes saga started", electionPartyResults);
    const response = yield call(updateElectionPartyResults, electionPartyResults);
    console.log("Received response from update API:", response);
    yield put(updateElectionPartyResultsSuccess(response));
    console.log("Dispatched updateElectionPartyResultsSuccess");
    toast.success("تم تحديث نتائج الإنتخابات بنجاح", {
      autoClose: 2000,
    });
  } catch (error) {
    console.error("Caught an error in onUpdateElectionPartyVotes:", error);
    yield put(updateElectionPartyResultsFail(error));
    console.log("Dispatched updateElectionPartyResultsFail");
    toast.error("خطأ في تحديث نتائج الإنتخابات", { autoClose: 2000 });
  }
}


// Election Party Candidates
function* getElectionPartyCandidates({ payload: election }) {
  try {
    const response = yield call(getElectionPartyCandidatesApi, election);
    yield put(
      ElectionApiResponseSuccess(GET_ELECTION_PARTY_CANDIDATES, response.data)
    );
  } catch (error) {
    yield put(ElectionApiResponseError(GET_ELECTION_PARTY_CANDIDATES, error));
  }
}

function* onAddNewElectionPartyCandidate({ payload: electionPartyCandidate }) {
  try {
    const response = yield call(addElectionPartyCandidate, electionPartyCandidate);
    yield put(addElectionPartyCandidateSuccess(response));
    toast.success("تم إضافة مرشح الانتخابات بنجاح", { autoClose: 2000 });
  } catch (error) {
    yield put(addElectionPartyCandidateFail(error));
    toast.error("خطأ في إضافة مرشح الانتخابات", { autoClose: 2000 });
  }
}

function* onUpdateElectionPartyCandidate({ payload: electionPartyCandidate }) {
  try {
    const response = yield call(updateElectionPartyCandidate, electionPartyCandidate);
    yield put(updateElectionPartyCandidateSuccess(response));
    toast.success("تم تحديث مرشح الانتخابات بنجاح", {
      autoClose: 2000,
    });
  } catch (error) {
    yield put(updateElectionPartyCandidateFail(error));
    toast.error("خطأ في تحديث مرشح الانتخابات", { autoClose: 2000 });
  }
}

function* onDeleteElectionPartyCandidate({ payload: electionPartyCandidate }) {
  try {
    const response = yield call(deleteElectionPartyCandidate, electionPartyCandidate);
    yield put(
      deleteElectionPartyCandidateSuccess({ electionPartyCandidate, ...response })
    );
    toast.success("تم حذف مرشح الانتخابات بنجاح", { autoClose: 2000 });
  } catch (error) {
    yield put(deleteElectionPartyCandidateFail(error));
    toast.error("خطأ في حذف مرشح الانتخابات", { autoClose: 2000 });
  }
}

// Election PartyCandidate Votes
function* onUpdateElectionPartyCandidateVotes({ payload: electionPartyCandidateVotes }) {
  try {
    console.log("onUpdateElectionPartyCandidateVotes saga started", electionPartyCandidateVotes);
    const response = yield call(updateElectionPartyCandidateVotes, electionPartyCandidateVotes);
    console.log("Received response from update API:", response);
    yield put(updateElectionPartyCandidateVotesSuccess(response));
    console.log("Dispatched updateElectionPartyCandidateVotesSuccess");
    toast.success("تم تحديث نتائج الإنتخابات بنجاح", {
      autoClose: 2000,
    });
  } catch (error) {
    console.error("Caught an error in onUpdateElectionPartyCandidateVotes:", error);
    yield put(updateElectionPartyCandidateVotesFail(error));
    console.log("Dispatched updateElectionPartyCandidateVotesFail");
    toast.error("خطأ في تحديث نتائج الإنتخابات", { autoClose: 2000 });
  }
}


// function* onUpdateElectionCandidate({ payload: electionCandidate }) {
//   try {
//     const response = yield call(updateElectionCandidate, electionCandidate);
//     yield put(updateElectionCandidateSuccess(response));
//     toast.success("تم تحديث مرشح الانتخابات بنجاح", {
//       autoClose: 2000,
//     });
//   } catch (error) {
//     yield put(updateElectionCandidateFail(error));
//     toast.error("خطأ في تحديث مرشح الانتخابات", { autoClose: 2000 });
//   }
// }

// Election Committees
function* getElectionCommittees({ payload: election }) {
  try {
    const response = yield call(getElectionCommitteesApi, election);
    yield put(
      ElectionApiResponseSuccess(GET_ELECTION_COMMITTEES, response.data)
    );
  } catch (error) {
    yield put(ElectionApiResponseError(GET_ELECTION_COMMITTEES, error));
  }
}

function* onAddNewElectionCommittee({ payload: electionCommittee }) {
  try {
    const response = yield call(addNewElectionCommittee, electionCommittee);
    yield put(addElectionCommitteeSuccess(response));
    toast.success("تم إضافة لجنة الانتخابات بنجاح", { autoClose: 2000 });
  } catch (error) {
    yield put(addElectionCommitteeFail(error));
    toast.error("خطأ في إضافة اللجنة الإنتخابية", { autoClose: 2000 });
  }
}

function* onDeleteElectionCommittee({ payload: electionCommittee }) {
  try {
    const response = yield call(deleteElectionCommittee, electionCommittee);
    yield put(
      deleteElectionCommitteeSuccess({ electionCommittee, ...response })
    );
    toast.success("تم حذف اللجنة الإنتخابية بنجاح", { autoClose: 2000 });
  } catch (error) {
    yield put(deleteElectionCommitteeFail(error));
    toast.error("خطأ في حذف اللجنة الإنتخابية", { autoClose: 2000 });
  }
}

function* onUpdateElectionCommittee({ payload: electionCommittee }) {
  try {
    const response = yield call(updateElectionCommittee, electionCommittee);
    yield put(updateElectionCommitteeSuccess(response));
    toast.success("تم تحديث اللجنة الإنتخابية بنجاح", {
      autoClose: 2000,
    });
  } catch (error) {
    yield put(updateElectionCommitteeFail(error));
    toast.error("خطأ في تحديث اللجنة الإنتخابية", { autoClose: 2000 });
  }
}


function* onUpdateElectionCommitteeResults({ payload: electionResult }) {
  try {
    console.log('Saga triggered with electionResult:', electionResult);
    const response = yield call(updateElectionResults, electionResult);
    console.log('API response:', response);
    yield put(updateElectionResultsSuccess(response));
    toast.success("تم تحديث النتائج بنجاح", {
      autoClose: 2000,
    });
  } catch (error) {
    console.error('Saga Error:', error); // Log any error that occurs
    yield put(updateElectionResultsFail(error));
    toast.error("خطأ في تحديث النتائج", { autoClose: 2000 });
  }
}

// Election Campaigns
function* getElectionCampaigns({ payload: election }) {
  try {
    const response = yield call(getElectionCampaignsApi, election);
    yield put(
      ElectionApiResponseSuccess(GET_ELECTION_CAMPAIGNS, response.data)
    );
  } catch (error) {
    yield put(ElectionApiResponseError(GET_ELECTION_CAMPAIGNS, error));
  }
}

function* onAddNewElectionCampaign({ payload: electionCampaign }) {
  try {
    const response = yield call(addNewElectionCampaign, electionCampaign);
    yield put(addElectionCampaignSuccess(response));
    toast.success("تم إضافة الحملة الإنتخابية بنجاح", { autoClose: 2000 });
  } catch (error) {
    yield put(addElectionCampaignFail(error));
    toast.error("خطأ في إضافة الحملة الإنتخابية", { autoClose: 2000 });
  }
}

function* onDeleteElectionCampaign({ payload: electionCampaign }) {
  try {
    const response = yield call(deleteElectionCampaign, electionCampaign);
    yield put(deleteElectionCampaignSuccess({ electionCampaign, ...response }));
    toast.success("تم حذف الحملة الإنتخابية بنجاح", { autoClose: 2000 });
  } catch (error) {
    yield put(deleteElectionCampaignFail(error));
    toast.error("خطأ في حذف الحملة الإنتخابية", { autoClose: 2000 });
  }
}

function* onUpdateElectionCampaign({ payload: electionCampaign }) {
  try {
    const response = yield call(updateElectionCampaign, electionCampaign);
    yield put(updateElectionCampaignSuccess(response));
    toast.success("تم تحديث الحملة الإنتخابية بنجاح", {
      autoClose: 2000,
    });
  } catch (error) {
    yield put(updateElectionCampaignFail(error));
    toast.error("خطأ في تحديث الحملة الإنتخابية", { autoClose: 2000 });
  }
}



// Watchers
export function* watchGetElections() {
  yield takeEvery(GET_ELECTIONS, getElections);
}

export function* watchAddNewElection() {
  yield takeEvery(ADD_ELECTION, onAddElection);
}

export function* watchUpdateElection() {
  yield takeEvery(UPDATE_ELECTION, onUpdateElection);
}

export function* watchDeleteElection() {
  yield takeEvery(DELETE_ELECTION, onDeleteElection);
}


export function* watchGetElectionDetails() {
  yield takeEvery(GET_ELECTION_DETAILS, getElectionDetails);
}

// Election Candidates Watchers
export function* watchGetElectionCandidates() {
  yield takeEvery(GET_ELECTION_CANDIDATES, getElectionCandidates);
}

export function* watchAddNewElectionCandidate() {
  yield takeEvery(ADD_NEW_ELECTION_CANDIDATE, onAddNewElectionCandidate);
}

export function* watchUpdateElectionCandidate() {
  yield takeEvery(UPDATE_ELECTION_CANDIDATE, onUpdateElectionCandidate);
}

export function* watchDeleteElectionCandidate() {
  yield takeEvery(DELETE_ELECTION_CANDIDATE, onDeleteElectionCandidate);
}

export function* watchUpdateElectionCandidateVotes() {
  yield takeEvery(UPDATE_ELECTION_CANDIDATE_VOTES, onUpdateElectionCandidateVotes);
}

// Election Parties Watchers
export function* watchGetElectionParties() {
  yield takeEvery(GET_ELECTION_PARTIES, getElectionParties);
}

export function* watchAddNewElectionParty() {
  yield takeEvery(ADD_ELECTION_PARTY, onAddNewElectionParty);
}

export function* watchUpdateElectionParty() {
  yield takeEvery(UPDATE_ELECTION_PARTY, onUpdateElectionParty);
}

export function* watchDeleteElectionParty() {
  yield takeEvery(DELETE_ELECTION_PARTY, onDeleteElectionParty);
}

export function* watchUpdateElectionPartyVotes() {
  yield takeEvery(UPDATE_ELECTION_PARTY_RESULTS, onUpdateElectionPartyVotes);
}

// Election Party Candidates Watchers
export function* watchGetElectionPartyCandidates() {
  yield takeEvery(GET_ELECTION_PARTY_CANDIDATES, getElectionPartyCandidates);
}

export function* watchAddNewElectionPartyCandidate() {
  yield takeEvery(ADD_ELECTION_PARTY_CANDIDATE, onAddNewElectionPartyCandidate);
}

export function* watchUpdateElectionPartyCandidate() {
  yield takeEvery(UPDATE_ELECTION_PARTY_CANDIDATE, onUpdateElectionPartyCandidate);
}

export function* watchDeleteElectionPartyCandidate() {
  yield takeEvery(DELETE_ELECTION_PARTY_CANDIDATE, onDeleteElectionPartyCandidate);
}

export function* watchUpdateElectionPartyCandidateVotes() {
  yield takeEvery(UPDATE_ELECTION_PARTY_CANDIDATE_VOTES, onUpdateElectionPartyCandidateVotes);
}

// Election Committees Watchers
export function* watchGetElectionCommittees() {
  yield takeEvery(GET_ELECTION_COMMITTEES, getElectionCommittees);
}

export function* watchAddNewElectionCommittee() {
  yield takeEvery(ADD_NEW_ELECTION_COMMITTEE, onAddNewElectionCommittee);
}

export function* watchUpdateElectionCommittee() {
  yield takeEvery(UPDATE_ELECTION_COMMITTEE, onUpdateElectionCommittee);
}

export function* watchDeleteElectionCommittee() {
  yield takeEvery(DELETE_ELECTION_COMMITTEE, onDeleteElectionCommittee);
}

// Election Committees Results Watchers
export function* watchUpdateElectionCommitteeResults() {
  yield takeEvery(UPDATE_ELECTION_RESULTS, onUpdateElectionCommitteeResults);
}

// Election Campaigns Watchers
export function* watchGetElectionCampaigns() {
  yield takeEvery(GET_ELECTION_CAMPAIGNS, getElectionCampaigns);
}

export function* watchAddNewElectionCampaign() {
  yield takeEvery(ADD_NEW_ELECTION_CAMPAIGN, onAddNewElectionCampaign);
}

export function* watchUpdateElectionCampaign() {
  yield takeEvery(UPDATE_ELECTION_CAMPAIGN, onUpdateElectionCampaign);
}

export function* watchDeleteElectionCampaign() {
  yield takeEvery(DELETE_ELECTION_CAMPAIGN, onDeleteElectionCampaign);
}



function* electionSaga() {
  yield all([

    // Elections
    fork(watchGetElections),
    fork(watchAddNewElection),
    fork(watchUpdateElection),
    fork(watchDeleteElection),
    fork(watchGetElectionDetails),

    // ElectionCandidates
    fork(watchGetElectionCandidates),
    fork(watchAddNewElectionCandidate),
    fork(watchUpdateElectionCandidate),
    fork(watchDeleteElectionCandidate),
    fork(watchUpdateElectionCandidateVotes),

    // ElectionParties
    fork(watchGetElectionParties),
    fork(watchAddNewElectionParty),
    fork(watchUpdateElectionParty),
    fork(watchDeleteElectionParty),
    fork(watchUpdateElectionPartyVotes),

    // ElectionCandidates
    fork(watchGetElectionPartyCandidates),
    fork(watchAddNewElectionPartyCandidate),
    fork(watchUpdateElectionPartyCandidate),
    fork(watchDeleteElectionPartyCandidate),
    fork(watchUpdateElectionPartyCandidateVotes),

    // ElectionCommittees
    fork(watchGetElectionCommittees),
    fork(watchAddNewElectionCommittee),
    fork(watchUpdateElectionCommittee),
    fork(watchDeleteElectionCommittee),

    // ElectionCommitteeResults
    fork(watchUpdateElectionCommitteeResults),

    // ElectionCampiagns
    fork(watchGetElectionCampaigns),
    fork(watchAddNewElectionCampaign),
    fork(watchUpdateElectionCampaign),
    fork(watchDeleteElectionCampaign),
  ]);
}

export default electionSaga;
