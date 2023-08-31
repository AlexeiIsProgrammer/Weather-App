import React, { useState } from 'react';

import apiCalendar, { getAllEvents } from '../../API/calendar';
import Button from '../UI/Button';

import { SignButtonProps } from './types/types';

function SignButton({ setEvents }: SignButtonProps) {
  const [isSignIn, setIsSignIn] = useState<boolean>();

  const signInHandle = async () => {
    await apiCalendar.handleAuthClick();
    const responseEvents = await getAllEvents();

    if (!responseEvents.length) {
      alert('Поздравляю, событий на сегодня не запланировано !');
    }

    setEvents(responseEvents);
    setIsSignIn(true);
  };

  const signOutHandle = () => {
    apiCalendar.handleSignoutClick();
    setIsSignIn(false);
    setEvents([]);
  };

  return (
    <>
      {!isSignIn ? <Button onClick={signInHandle}>Sign in</Button> : null}

      {isSignIn ? <Button onClick={signOutHandle}>Sign out</Button> : null}
    </>
  );
}

export default SignButton;
