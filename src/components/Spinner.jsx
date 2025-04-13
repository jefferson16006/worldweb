import SyncLoader from 'react-spinners/SyncLoader'
import React from 'react'

const override = {
    display: "block",
    margin: "80px auto 10px",
    textAlign: 'center',
    borderColor: "red",
  };

const Spinner = ({loading}) => {
  return (
    <>
        <SyncLoader 
            color='#8707F4'
            loading={loading}
            cssOverride={override}
            size={15}
        />
        <h1 className='text-center text-2xl'>Processing...</h1>
    </>
  )
}

export default Spinner