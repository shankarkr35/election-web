// Selectors/campaignsSelectors.js
import { createSelector } from 'reselect';

const selectCampaignsState = state => state.Campaigns;

export const campaignSelector = createSelector(
  selectCampaignsState,
  (campaignsState) => ({

    // Campaign Selectors
    campaigns: campaignsState.campaigns,
    campaign: campaignsState.campaignDetails,
    campaignId: campaignsState.campaignDetails.id,
    campaignType: campaignsState.campaignDetails.campaignType,

    campaignDetails: campaignsState.campaignDetails,
    campaignMembers: campaignsState.campaignMembers,
    campaignGuarantees: campaignsState.campaignGuarantees,
    campaignAttendees: campaignsState.campaignAttendees,
    campaignNotifications: campaignsState.campaignNotifications,

    campaignSorting: campaignsState.campaignSorting,
    campaignElectionCommittees: campaignsState.campaignElectionCommittees,
    campaignElectionCandidates: campaignsState.campaignElectionCandidates,

    isCampaignSuccess: campaignsState.isCampaignSuccess,
    campaignError: campaignsState.error,

    // CurrentCampaignMember
    currentCampaignMember: campaignsState.currentCampaignMember,
    // currentCampaignMemberCommittee: campaignsState.currentCampaignMember.committee,
    electors: campaignsState.electors,

    campaignRoles: campaignsState.campaignRoles,

    // Election


  })
);
