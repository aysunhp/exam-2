import React, { useEffect } from 'react'
import "./../ourMenu/ourMenu.scss"
import { fetchData, addBasket,addWishlist } from '../../redux/slice/mealSlice'
import { useSelector, useDispatch } from 'react-redux'


const OurMenu = () => {
    const dispatch= useDispatch()
    const data= useSelector((state)=>state.meal.data)
    useEffect(()=>{
        dispatch(fetchData())
    },[dispatch])
    console.log(data)

  return (
<div className="ourMenu">
    <div className="container">
    <div className="menu-heading-section">
           <svg xmlns="http://www.w3.org/2000/svg" height="70" width="70" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" fill='white'/></svg>
              <div className="menu-heading">
              <div className="line"></div>
               <h1>Welcome</h1>
               <div className="line"></div>
              </div>
           </div>

           <ul className="meal-times">
        <li style={{color:"white"}}>Breakfast</li>
        <li style={{color:"white"}}>Brunch</li>
        <li style={{color:"white"}}>Lunch</li>
        <li style={{color:"white"}}>Dinner</li>
    </ul>

    
    <div className="menu-wrapper">
        {
            data && data.map(item=>{
                return  <div className="menu-item" key={item._id}>
                <div className="menu-title">{item.name}</div>
                <div className="menu-content">
                    <div className="menu-ingredients">{item.ingredients}</div>
                    <div className="side-divider">.................................</div>
                    <div className="menu-price">{item.price}</div>
                   <button onClick={()=>{
                       dispatch(addWishlist(item))
                   }}> <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" fill='white'/></svg></button>
                 <button onClick={()=>{
                       dispatch(addBasket(item))
                   }}>   <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z" fill='white'/></svg></button>
                </div>
            </div>
            })
        }
       
    </div>
    </div>


</div>
  )
}

export default OurMenu