import "./PasswordGenerator.css";

function PasswordGenerator(){
     return (
        <div className="container">
            <h2 className="title">Password Generator</h2>
            <div className="password-wrapper">
                <div className="password-area">
                    <div className="password">
                        <input type="text" disabled/>
                       <button>Copy</button>
                    </div>
                </div>
            </div><br></br>
            <div className="setting">
                <h3>Customize your password</h3>
                <div className="left">
                    <div className="checkbox-field">
                        <input type="checkbox" name="lower" id="lower"/>
                        <label htmlFor="lower">Include Lower Case(a-z)</label>
                    </div>
                    <div className="checkbox-field">
                        <input type="checkbox" name="upper" id="upper"/>
                        <label htmlFor="upper">Include Upper Case(A-Z)</label>
                    </div>
                </div>
                <div className="right">
                <div className="checkbox-field">
                        <input type="checkbox" name="numbers" id="numbers"/>
                        <label htmlFor="numbers">Include Numbers(0-9)</label>
                    </div>
                    <div className="checkbox-field">
                        <input type="checkbox" name="symbols" id="symbols"/>
                        <label htmlFor="symbols">Include Symbols(&-#)</label>
                    </div>
                </div>
            </div>
        </div>
     )
}
export default PasswordGenerator;