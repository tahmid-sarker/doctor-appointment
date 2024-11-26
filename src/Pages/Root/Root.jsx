import React, { createContext, Suspense } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet, useLoaderData, useNavigation } from "react-router";
import Loader from "../../components/Loader/Loader";
import DynamicTitle from "../../components/DynamicTitle/DynamicTitle";
import { ToastContainer } from 'react-toastify';

export const DataContext = createContext(null);

const Root = () => {
  const { doctors, blogs } = useLoaderData();
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <DataContext.Provider value={{ doctors, blogs }}>
      <DynamicTitle></DynamicTitle>
      <div className="min-h-screen max-w-7xl mx-auto">
        <Header></Header>
        <Suspense fallback={<h2 className="text-center text-9xl text-red-500">...Loading</h2>}>
          {isNavigating && <Loader></Loader>}
          <Outlet></Outlet>
        </Suspense>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </DataContext.Provider>
  );
};

export default Root;