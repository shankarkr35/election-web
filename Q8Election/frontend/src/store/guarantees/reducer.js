import {
  API_RESPONSE_SUCCESS,
  API_RESPONSE_ERROR,

  GET_ALL_CAMPAIGN_GUARANTEES,
  ADD_NEW_CAMPAIGN_GUARANTEEN_SUCCESS,
  ADD_NEW_CAMPAIGN_GUARANTEEN_FAIL,
  UPDATE_CAMPAIGN_GUARANTEE_SUCCESS,
  UPDATE_CAMPAIGN_GUARANTEE_FAIL,
  DELETE_CAMPAIGN_GUARANTEE_SUCCESS,
  DELETE_CAMPAIGN_GUARANTEE_FAIL,
} from "./actionType";

const initialState = {
  campaignCampaignGuarantees: [],
  subCampaignGuarantees: [],
  error: {},
};

const CampaignGuarantees = (state = initialState, action) => {

  switch (action.type) {
    case API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {

        case GET_ALL_CAMPAIGN_GUARANTEES:
          return {
            ...state,
            campaignCampaignGuarantees: action.payload.data.campaignCampaignGuarantees,
            subCampaignGuarantees: action.payload.data.subCampaignGuarantees,
          };
        default:
          return { ...state };
      }
    case API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case GET_ALL_CAMPAIGN_GUARANTEES:
          return {
            ...state,
            error: action.payload.error,
          };
        default:
          return { ...state };
      }

    case ADD_NEW_CAMPAIGN_GUARANTEEN_SUCCESS:
      return {
        ...state,
        campaignCampaignGuaranteeList: [...state.campaignCampaignGuaranteeList, action.payload],
      };

    case ADD_NEW_CAMPAIGN_GUARANTEEN_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case UPDATE_CAMPAIGN_GUARANTEE_SUCCESS:
      return {
        ...state,
        campaignCampaignGuaranteeList: state.campaignCampaignGuaranteeList.map(campaignCampaignGuarantee =>
          campaignCampaignGuarantee.id.toString() === action.payload.id.toString()
            ? { ...campaignCampaignGuarantee, ...action.payload }
            : campaignCampaignGuarantee
        ),
      };

    case UPDATE_CAMPAIGN_GUARANTEE_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case DELETE_CAMPAIGN_GUARANTEE_SUCCESS:
      return {
        ...state,
        campaignCampaignGuaranteeList: state.campaignCampaignGuaranteeList.filter(
          campaignCampaignGuarantee => campaignCampaignGuarantee.id.toString() !== action.payload.id.toString()
        ),
      };

    case DELETE_CAMPAIGN_GUARANTEE_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return { ...state };
  }
};

export default CampaignGuarantees;