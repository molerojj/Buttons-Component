/* eslint-disable react/no-unescaped-entities */
import style from './Button.module.css';

const ButtonComponent = () => {
   return (
      <div className={style.container}>
         <h1>Buttons</h1>
         <div className={style.buttons}>
            <div className={style.column}>
               <div>
                  <p className='text'>Button</p>
                  <button className='btn btn-default'>Default</button>
               </div>
               <div>
                  <p className='text'>Button variant="outline"</p>
                  <button className='btn btn-variant-outline'>Default</button>   
               </div>
               <div>
                  <p className='text'>Button variant="text"</p>
                  <button className='btn btn-variant-text'>Default</button>
               </div>
               <div>
                  <p className='text'>Button disableShadow</p>
                  <button className='btn btn-disable-shadow'>Default</button> 
               </div>
               <div>
                  <p className='text'>Button disabled</p>
                  <button className='btn btn-disabled'>Disabled</button>
               </div>
               <div>
                  <p className='text'>Button starIcon</p>
                  <button className='btn btn-icon'>
                     <span className="material-symbols-outlined">shopping_cart_checkout</span>
                     Default
                  </button>
               </div>
            </div>

            <div className={style.column}>
               <div>
                  <p className='text2'>&:hover, &:focus</p>
                  <button className='btn btn-default-hover'>Default</button>     
               </div>
               <div>
                  <p className='text2'>&:hover, &:focus</p>
                  <button className='btn btn-variant-outline-hover'>Default</button>   
               </div>
               <div>
                  <p className='text2'>&:hover, &:focus</p>
                  <button className='btn btn-variant-text-hover'>Default</button>
               </div>
               <div className='btn-hidden'>
                  <p className='text2 btn-hidden'>Hidden</p>
                  <button className='btn btn-hidden'>Hidden</button> 
               </div>
               <div>
                  <p className='text'>Button variant="text" disabled</p>
                  <button className='btn btn-variant-text-disable'>Disabled</button>
               </div>
               <div>
                  <p className='text'>Button endIcon</p>
                  <button className='btn btn-icon'>
                     Default
                     <span className="material-symbols-outlined">shopping_cart_checkout</span>
                  </button>
               </div>
            </div>
         </div>

         <div className={style.buttons}>
            <div className={style.column}>
               <div>
                  <p className='text'>Button size="sm"</p>
                  <button className='btn btn-icon btn-sm'>Default</button>
               </div>
               <div>
                  <p className='text'>Button color="default"</p>
                  <button className='btn btn-default'>Default</button>
               </div>
               <div>
                  <p className='text2'>&:hover, &:focus"</p>
                  <button className='btn btn-default-hover'>Default</button>
               </div>
            </div>
            <div className={style.column}>
               <div>
                  <p className='text'>Button size="md"</p>
                  <button className='btn btn-icon'>Default</button>
               </div>
               <div>
                  <p className='text'>Button color="primary"</p>
                  <button className='btn btn-icon'>Default</button>
               </div>
               <div>
                  <p className='text'>Button color="primary"</p>
                  <button className='btn btn-icon btn-dark'>Default</button>
               </div>
            </div>
            <div className={style.column}>
               <div>
                  <p className='text'>Button size="lg"</p>
                  <button className='btn btn-icon btn-lg'>Default</button>
               </div>
               <div>
                  <p className='text'>Button color="Secundary"</p>
                  <button className='btn btn-secundary'>Secundary</button>
               </div>
               <div>
                  <p className='text btn-hidden'>Button</p>
                  <button className='btn btn-secundary-dark'>Secundary</button>
               </div>
            </div>
            <div className={style.column}>
               <div className='btn-hidden'>
                  <p className='text btn-hidden'>Hidden</p>
                  <button className='btn btn-icon btn-lg btn-hidden'>Hidden</button>
               </div>
               <div>
                  <p className='text'>Button color="Danger"</p>
                  <button className='btn btn-danger'>Danger</button>
               </div>
               <div>
                  <p className='text btn-hidden'>Button</p>
                  <button className='btn btn-danger-dark'>Danger</button>
               </div>
            </div>
         </div>
         <h3>Created by <b>Jonathan Molero</b> - devChallenges.io </h3>
      </div>
   )
}

export default ButtonComponent;