import React, { useState } from 'react';
import apiCalendar, { getAllEvents } from '@API/calendar';
import Button from '@components/UI/Button';

import { SignButtonProps } from './types/types';

function SignButton({ setEvents }: SignButtonProps) {
  const [isSignIn, setIsSignIn] = useState<boolean>();
  console.log('sign in buttons');
  const signInHandle = async () => {
    try {
      await apiCalendar.handleAuthClick();
      const responseEvents = await getAllEvents();

      if (!responseEvents.length) {
        alert('Поздравляю, событий на сегодня не запланировано !');
      }

      setEvents(responseEvents);
      setIsSignIn(true);
    } catch (error) {
      console.log(error);
    }
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

export default React.memo(SignButton);
