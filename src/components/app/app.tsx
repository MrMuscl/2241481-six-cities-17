import {BrowserRouter, Routes, Route} from 'react-router-dom';
import OfferType from '../../types/offer-type';
import { AppRoute } from '../consts';
import MainPage from '../../pages/main/mainPage';
import FavoritesPage from '../../pages/favorites/favoritesPage';
import LoginPage from '../../pages/login/loginPage';
import OfferPage from '../../pages/offer/offerPage';
import PageNotFoundPage from '../../pages/not-found/not-found';
import PrivateRoute from '../privateRoute';

type AppProps = {
  offers: OfferType[];
  favorites: OfferType[];
}

function App({offers, favorites}: AppProps): JSX.Element{
  const filteredOffers = offers.filter((offer)=>(offer.city.name === 'Amsterdam'));
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root}>
          <Route index element={<MainPage offers={filteredOffers} />} />
          <Route path={AppRoute.LogIn} element={<LoginPage />}></Route>
          <Route
            path={AppRoute.Offer}
            element={
              <OfferPage
                nearByOffers={filteredOffers.slice(0, 4)}
                activeOfferId={filteredOffers[0].id}
              />
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute isRedirectRequired = {false} navigatePath={AppRoute.LogIn}>
                <FavoritesPage favorites={favorites}/>
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.NotFound} element={<PageNotFoundPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
