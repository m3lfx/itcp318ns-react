import React from 'react'
import { BrowserRouter as Router , Routes, Route, Navigate } from 'react-router-dom';
import Create from './Create';
import App from './App';
import SinglePost from './SinglePost';
import UpdatePost from './UpdatePost';
import PrivateRoute from './PrivateRoute';
const RoutedApp = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact="true" element={<App />} />
                <Route path="/create" exact="true"
                    element={
                     <PrivateRoute redirectTo="/">
                         <Create />
                      </PrivateRoute>
                    }
                  />
                {/* <Route path="/create" exact="true" element={<Create />} /> */}
                <Route path="/post/:id" exact="true"
                    element={
                     <PrivateRoute redirectTo="/">
                        <SinglePost />
                      </PrivateRoute>
                    }
                  />
                  <Route path="/post/update/:id" exact="true"
                    element={
                     <PrivateRoute redirectTo="/">
                        <UpdatePost />
                      </PrivateRoute>
                    }
                  />
                {/* <Route path="/post/:id" exact="true"  element={<SinglePost />} /> */}
                {/* <Route path="/post/update/:id" exact="true"
                    element={<UpdatePost />}
                  /> */}
                  <Route path="*" exact="true" element={<Navigate to='/' />} />

            </Routes>
        </Router>
    )
}
export default RoutedApp