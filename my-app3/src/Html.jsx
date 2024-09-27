import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Html() {
  return (
    <>
    
        <NavLink to='/java'><button>JAVA</button></NavLink><br></br>
        <NavLink to='/sql'><button>SQL</button></NavLink><br></br>
        <NavLink to='/html'><button>HTML</button></NavLink><br></br>      
    
      <div>
        <h2>Welcome to Quiz App</h2>
        <p>5 Select quiz :</p>

        <form>
            <label>Q.1 . HTML document is saved in _____?</label><br></br>
            <input type='radio' name='q1' value='A'></input>ASCII text<br></br>
            <input type='radio' name='q1' value='B'></input>Machine language codes<br></br>
            <input type='radio' name='q1' value='C'></input>Special binary format<br></br>
            <input type='radio' name='q1' value='D'></input>BCD codes<br></br>
            <br></br>
            <label>Q.2 . _____ is used to modify the way the browser displays the object</label><br></br>
            <input type='radio' name='q2' value='A'></input>Tags<br></br>
            <input type='radio' name='q2' value='B'></input>Arguments<br></br>
            <input type='radio' name='q2' value='C'></input>Attributes<br></br>
            <input type='radio' name='q2' value='D'></input>Parameters<br></br>
            <br></br>
            <label>Q.3 . The HTML element used to enter a scrolling area of text is ____?</label><br></br>
            <input type='radio' name='q3' value='A'></input>Marquee<br></br>
            <input type='radio' name='q3' value='B'></input>Scroll<br></br>
            <input type='radio' name='q3' value='C'></input>Text<br></br>
            <input type='radio' name='q3' value='D'></input>Move<br></br>
            <br></br>
            <label>Q.4 . Which of the following is the directory commonly used to store a website?</label><br></br>
            <input type='radio' name='q4' value='A'></input>/public<br></br>
            <input type='radio' name='q4' value='B'></input>/home<br></br>
            <input type='radio' name='q4' value='C'></input>/public_html<br></br>
            <input type='radio' name='q4' value='D'></input>/home/public<br></br>
            <br></br>
            <label>Q.5 . Which of the following provides a set of choices to an user?</label><br></br>
            <input type='radio' name='q5' value='A'></input>Button<br></br>
            <input type='radio' name='q5' value='B'></input>Text<br></br>
            <input type='radio' name='q5' value='C'></input>List<br></br>
            <input type='radio' name='q5' value='D'></input>Combo<br></br>
          
            <input type='submit'></input><br></br>

          </form>

      </div>
    </>
    
)
  
}
