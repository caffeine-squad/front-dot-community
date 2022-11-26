import React, { useState } from 'react';
import { useAuth } from '../context/useAuth';

export function GetToken() {
  const {token} = useAuth();

  return token;
}