import React, { useContext } from 'react';
import {  Navigate } from "react-router-dom";
import { AuthContext } from './auth';

export default function PrivateRoute({ children }) {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? children : <Navigate to="/dashboard" />;
}