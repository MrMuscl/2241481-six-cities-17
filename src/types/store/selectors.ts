import { AppState } from '.';

const selectOffers = (state: AppState) => state.offers;
const selectSortingType = (state: AppState) => state.sortingType;
const selectCurrentCity = (state: AppState) => state.currentCity;
const selectIsOfferDataLoading = (state: AppState) => state.isOfferDataLoading;
const selectIsOffersDataLoading = (state: AppState) => state.isOffersDataLoading;
const selectIsNearByDataLoading = (state: AppState) => state.isNearByDataLoading;
const selectIsReviewsDataLoading = (state: AppState) => state.isReviewsDataLoading;
const selectAuthorizationStatus = (state: AppState) => state.authorizationStatus;
const selectCurrentUser = (state: AppState) => state.currentUser;
const selectOffer = (state: AppState) => state.offer;
const selectNearBys = (state: AppState) => state.nearBys;
const selectReviews = (state: AppState) => state.reviews;

export {
  selectOffers,
  selectSortingType,
  selectCurrentCity,
  selectIsOfferDataLoading,
  selectIsOffersDataLoading,
  selectIsNearByDataLoading,
  selectIsReviewsDataLoading,
  selectAuthorizationStatus,
  selectCurrentUser,
  selectOffer,
  selectNearBys,
  selectReviews
};
