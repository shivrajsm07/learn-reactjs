import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Sql() {
  return (
    <>
       
        <NavLink to='/java'><button>JAVA</button></NavLink><br></br>
        <NavLink to='/sql'><button>SQL</button></NavLink><br></br>
        <NavLink to='/html'><button>HTML</button></NavLink><br></br>      
    
        <div>
        <h2>Welcome to Quiz App</h2>
        <p>5 Select quiz :</p>

        <form>
            <label>Q.1 . The statement in SQL that deletes the table structure and relationship is _____ ?</label><br></br>
            <input type='radio' name='q1' value='A'></input>REVOKE<br></br>
            <input type='radio' name='q1' value='B'></input>DROP<br></br>
            <input type='radio' name='q1' value='C'></input>DELETE<br></br>
            <input type='radio' name='q1' value='D'></input>TRUNCATE<br></br>
            <br></br>
            <label>Q.2 . In SQL, which command is used to change data in table?</label><br></br>
            <input type='radio' name='q2' value='A'></input>UPDATE<br></br>
            <input type='radio' name='q2' value='B'></input>INSERT<br></br>
            <input type='radio' name='q2' value='C'></input>BROWSE<br></br>
            <input type='radio' name='q2' value='D'></input>More than one of the above<br></br>
            <br></br>
            <label>Q.3 . Which of the following connective can be used to test tuples for membership in a relation?</label><br></br>
            <input type='radio' name='q3' value='A'></input>UNION<br></br>
            <input type='radio' name='q3' value='B'></input>IN<br></br>
            <input type='radio' name='q3' value='C'></input>INTERSECTION<br></br>
            <input type='radio' name='q3' value='D'></input>LIKE<br></br>
            <br></br>
            <label>Q.4 . in SQL, which of the following is not a Data Manipualtion Language Command?</label><br></br>
            <input type='radio' name='q4' value='A'></input>DELETE<br></br>
            <input type='radio' name='q4' value='B'></input>SELECT<br></br>
            <input type='radio' name='q4' value='C'></input>UPDATE<br></br>
            <input type='radio' name='q4' value='D'></input>CREATE<br></br>
            <br></br>
            <label>Q.5 . The SQL ALERT TABLE statement is used to?</label><br></br>
            <input type='radio' name='q5' value='A'></input>Delete existing records in a table<br></br>
            <input type='radio' name='q5' value='B'></input>Insert or modify records in a table<br></br>
            <input type='radio' name='q5' value='C'></input>Drop an existing table in a database<br></br>
            <input type='radio' name='q5' value='D'></input>Add, delete or modify columns in an existing table<br></br>
          
            <input type='submit'></input><br></br>

          </form>

      </div>
    </>
)
  
}
