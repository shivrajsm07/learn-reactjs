import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Java() {
  return (
    <>
        <NavLink to='/java'><button>JAVA</button></NavLink><br></br>
        <NavLink to='/sql'><button>SQL</button></NavLink><br></br>
        <NavLink to='/html'><button>HTML</button></NavLink><br></br>      
    
        <div>
        <h2>Welcome to Quiz App</h2>
        <p>5 Select quiz :</p>

          <form>
            <label>Q.1 . What tool is employed in the compilation, testing and execution of Java programs?</label><br></br>
            <input type='radio' name='q1' value='A'></input>EI<br></br>
            <input type='radio' name='q1' value='B'></input>EVM<br></br>
            <input type='radio' name='q1' value='C'></input>JDK<br></br>
            <input type='radio' name='q1' value='D'></input>JRE<br></br>  
            <br></br>
            <label>Q.2 . What is the use of 'java command? </label><br></br>
            <input type='radio' name='q2' value='A'></input>Execute a java program<br></br>
            <input type='radio' name='q2' value='B'></input>Debug a java program<br></br>
            <input type='radio' name='q2' value='C'></input>Interpret a java program<br></br>
            <input type='radio' name='q2' value='D'></input>Compile a java program<br></br>
            <br></br>
            <label>Q.3 . Parent class of all java classes is _____?</label><br></br>
            <input type='radio' name='q3' value='A'></input>Java.lang.system<br></br>
            <input type='radio' name='q3' value='B'></input>Java.lang.object<br></br>
            <input type='radio' name='q3' value='C'></input>Java.lang.class<br></br>
            <input type='radio' name='q3' value='D'></input>Java.lang.reflect.object<br></br>
            <br></br>
            <label>Q.4 . Which of the following is/are the rules to declare variables in Java?</label><br></br>
            <input type='radio' name='q4' value='A'></input>Java keywords cannot be used as variable names<br></br>
            <input type='radio' name='q4' value='B'></input>All of the options<br></br>
            <input type='radio' name='q4' value='C'></input>Variable names are case-sensitive<br></br>
            <input type='radio' name='q4' value='D'></input>The first character must be a letter<br></br>
            <br></br>
            <label>Q.5 . Which of the following in NOT a java primitive type?</label><br></br>
            <input type='radio' name='q5' value='A'></input>short<br></br>
            <input type='radio' name='q5' value='B'></input>long<br></br>
            <input type='radio' name='q5' value='C'></input>long double<br></br>
            <input type='radio' name='q5' value='D'></input>boolean<br></br>
          
            <input type='submit'></input><br></br>

          </form>
      </div>
    </>   
)
}
