import React from 'react';
import ReactDOM from 'react-dom/client';
import './main-asset/css/index.css';
import App from './App';
import Contract from './components/card/contract-card/Contract';
import About from './components/page/about/About';
import Testimonial from './components/card/testimonial-card/Testimonial';
import Services from './components/page/services/Services';
import FaqCard from './components/card/faq-card/FaqCard';
import BlogContainerCard from './components/card/blog-card/BlogContainerCard';
import VideoBlogContainerCard from './components/card/blog-card/video-blog-card/VideoBlogContainerCard';
import PostBlogContainer from './components/card/blog-card/post-blog-card/PostBlogContainer';
import VideoRender from './components/card/blog-card/video-blog-card/VideoRender';
import SingleProduct from './components/card/blog-card/post-blog-card/SingleProduct';
import Home from './components/home/Home';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate } from 'react-router-dom';
import { AppProvider } from './components/card/blog-card/post-blog-card/BlogContext';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import {store} from './auth/app/store';
import UsersLogin from './auth/user/UsersLogin';
import Registration from './auth/user/Registration';
import SendPasswordResetEmail from './auth/user/SendPasswordResetEmail';

// function Token(token){
// }
// const { token } = useSelector(state => state.auth);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home />} />
      <Route path='/contract' element={<Contract />} />
      <Route path='/about' element={<About />} />
      <Route path='/testimonial' element={<Testimonial />} />
      <Route path='/services' element={<Services />} />
      <Route path='/faq' element={<FaqCard />} />
      <Route path='/blog' element={<BlogContainerCard />} />
      <Route path='/video-blog-content' element={<VideoBlogContainerCard />} />
      <Route path='/post-Blog-Content' element={<PostBlogContainer />} />
      <Route path='/:videolist' element={<VideoRender />} />
      <Route path='/singleproduct/:id' element={<SingleProduct />} />
      <Route path='/user-account' element={<UsersLogin />} />
      <Route path='/create-account' element={<Registration />} />
      <Route path='/send-email-reset-password' element={<SendPasswordResetEmail />} />

      {/* <Route path="login" element={!token ? <UsersLogin /> : <Navigate to="/dashboard" />} />
      <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
      <Route path="auth/user/reset/:token" element={<ResetPassword />} /> */}
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </AppProvider>
  </React.StrictMode>
);