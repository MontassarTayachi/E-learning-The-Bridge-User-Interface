import  { useState,useEffect } from 'react';
import '../Styles/Cours.css'
import Cour from "./Cour";
export const Cours = () => {
       const [menuList, setmenuList] = useState([]);
       const [open, setOpen] = useState([true]);
       const linkStyle = {
              textDecoration: 'none',
              color: 'inherit',
             
            };
          

       const relodedataLIMIT = async () =>{
              let test=null
              try {            
                const response = await fetch("http://localhost:4000/select/coures/LIMIT");
                test = await response.json();
                
              
                // Clean up the "image" property in each item
                test = test.map(item => ({
                  ...item,
                  image: item.image.trim().replace(/^null/, '')
                }));
                
              } catch (err) {
                console.error(err.message);
                test = []; // Set a default value (empty array) in case of an error
              }
              setmenuList(prevState => test);
            }
            const relodedata = async () =>{
              let test=null
              try {            
                const response = await fetch("http://localhost:4000/select/coures");
                test = await response.json();
                
              
                // Clean up the "image" property in each item
                test = test.map(item => ({
                  ...item,
                  image: item.image.trim().replace(/^null/, '')
                }));
                
              } catch (err) {
                console.error(err.message);
                test = []; // Set a default value (empty array) in case of an error
              }
              setmenuList(prevState => test);
            }
            useEffect(() => {
              relodedataLIMIT();
              setOpen(true)
          }, []);
return<>
<div className="cours">
<div className="na">
<h1>Discover Our Courses</h1>
{open && <button onClick={()=>{relodedata();setOpen(false);}}> <a  style={linkStyle} href="#k" >View More</a> </button>}
{!open && <button onClick={()=>{relodedataLIMIT();setOpen(true);}}> <a  style={linkStyle} href="#jj" >View Less</a></button>}
</div>
<div className="menu">
<div id='jj' className="menuList">                     
        {menuList.map((menuItem, key) => {
          return (
            <Cour
              key={key}
              image={menuItem.image}
              name={menuItem.title}
              price={menuItem.price}
             
            />
          );
        })}
       
      </div>
<div id='k'></div>
 
</div>
<div >
{!open && <button className='tr' onClick={()=>{relodedataLIMIT();setOpen(true);}}> <a  style={linkStyle} href="#jj" >View Less</a></button>}

</div>
</div>

</>
}