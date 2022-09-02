import React, { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const Dashboard=lazy(()=>import("../pages/Dashboard"));
const About=lazy(()=>import("../pages/About"));
const Comment=lazy(()=>import("../pages/Comment"));
const Analytics=lazy(()=>import("../pages/Analytics"));
const Product=lazy(()=>import("../pages/Product"));
const ProductList=lazy(()=>import("../pages/ProductList"));

const RoutesComponent = () => {
  let routes=useRoutes([
    {
        path:'/',
        element:<Dashboard/>
    },
    {
        path:'/dashboard',
        element:<Dashboard/>
    },
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'/comment',
        element:<Comment/>
    },
    {
        path:'/analytics',
        element:<Analytics/>
    },
    {
        path:'/product',
        element:<Product/>
    },
    {
        path:'/productList',
        element:<ProductList/>
    }
  ]);
  return routes;
}

export default RoutesComponent