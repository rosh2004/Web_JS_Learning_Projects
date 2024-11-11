import React, { Fragment, PropsWithChildren } from 'react'
import { User } from '../types/user';
import { useAuth } from './AuthProvider';

type ProtectedRouteProps = PropsWithChildren & {
  allowedRoles?: User['role'][];
};

function ProtectedRoute({allowedRoles, children}: ProtectedRouteProps) {
  const {currentUser} = useAuth();
  if(currentUser === undefined) {
    return <div>Loading...</div>
  }
  if(currentUser && allowedRoles?.includes(currentUser.role)){
    return children
  }

  return (
    <div>Permission Denied</div>
  )
}

export default ProtectedRoute