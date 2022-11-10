import React, { useContext } from 'react';
import './Redy.css'
import { useForm } from 'react-hook-form';
import { useHistory, Redirect } from 'react-router-dom';
import { UserContext } from '../../App';
import Swal from 'sweetalert2';

const Redy = () => {
  let history = useHistory();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const onSubmit = data => {
    fetch('https://iaudio.vercel.app/islavoshows', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'সফলভাবে পেমেন্ট হয়েছে',
            showConfirmButton: false,
            timer: 2000
          })
          history.push('/clicknow')
        }
      })
  }

  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <div className='body'>

      <div className="container">
        <div className='title'>show </div>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div class="user-details">
            <div className="input-box">

              <input {...register('title', { required: true })} placeholder=' শোর নাম ও ইপিসোড' />
            </div>

            <div className="input-box">

              <input {...register('artist', { required: true })} placeholder=' আর্টিস্ট' />
            </div>
            <div className="input-box">

              <input {...register('url', { required: true })} placeholder=' অডিও ' />
            </div>
            <div className="input-box">

              <input {...register('serialnumber', { required: true })} placeholder=' সিরিয়াল নাম্বার ' />
            </div>
          </div>


          <button type='submit' className="btn">ক্লিক করুন</button>


        </form>
      </div>

    </div>
  );
};

export default Redy;
