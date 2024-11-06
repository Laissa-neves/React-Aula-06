import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from '../pages/Feed';
import Posts from '../pages/Posts';
import Update from '../pages/Update';
import More from '../pages/More';
import Error from '../pages/Error';

export default function AppRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Feed/>} > </Route>
            <Route path='/posts' element={<Posts/>} > </Route>
            <Route path='/update/:id' element={<Update/>} > </Route>
            <Route path='/more/:id' element={<More/>} > </Route>
            <Route path='*' element={<Error/>} > </Route>

            
        </Routes>
    </div>
  )
}
