import React from 'react'
import { useEffect, useState} from 'react'
import { useLocation, useNavigate } from 'react-router';

import { verifyUserAccount } from '../apiCalls/apiCall-verifyUserAccount';
import VerifyingAccountMsg from '../components/messages/VerifyingAccountMsg';
import AccountVerifedMsg from '../components/messages/AccountVerifedMsg';
import VerifyingAccountErrorMsg from '../components/messages/VerifyingAccountErrorMsg';

export default function VerifyAccount() {
  const navigate = useNavigate()
  const location = useLocation()

  const [verifyingUser, setVerifyingUser] = useState(false)
  const [error, setError] = useState(false)
 
  const urlSearchString = location.search;
  const params = new URLSearchParams(urlSearchString);
  const token = params.get('token')

  useEffect(()=> {
    const apiCall = async()=> {
      try {
        if(!token) navigate('/')
        if(!verifyingUser)
          await verifyUserAccount(token)
          setVerifyingUser(true) 
      } catch (error) {
        setError(true)
      }
    }

    apiCall()
  },[token]);

  return (
    <div id="verifying-account-page" className='app columns-1 bg-main min-h-[74vh] w-full overflow-hidden border-r text-center flex flex-col justify-center items-center pt-4 pb-4 md:pt-10 md:pb-10'>
      <div id="verifying-account-msg-container" className='absolute z-10 flex flex-col items-center justify-center bg-second md:w-1/4 px-12 py-6 mx-12 rounded-2xl shadow-[20px_25px_40px_-15px_#414529]'>
        { error ? <VerifyingAccountErrorMsg /> : !verifyingUser ? <VerifyingAccountMsg /> : <AccountVerifedMsg />  }
      </div>
    </div>
  )
}
