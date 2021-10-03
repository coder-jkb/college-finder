import React from 'react'
// import '../css/Home.css'
import '../css/Home2.css'
import Result from './Result'
import Multiselect from 'multiselect-react-dropdown';

export default function Home() {
    return (
    <>
    <div className="home-container">
        <img className="college" src="college_cropped.png" alt="" srcSet="" />
        <div className="form-container">
            <div className="form-head">
                <p id="form-head-p1" >
                    Please enter correct details to get proper results    
                </p> 
                <span style={{}}>
                <strong>i</strong>
                </span>
                <p id="form-head-p2" >
                Don't worry! any of your details wont be saved.
                </p> 
            </div>
            <div className="form-body">
                <form action="">
                    <div className="form-items">
                        <label htmlFor="select-exam">Select Exam: </label>
                        <select className="form-input-select" name="SelectExam" id="select-exam" required>
                            <option value=""> --select-- </option>
                            <option value="all">ALL</option>
                            <option value="jeeMains">JEE Mains</option>
                            <option value="jeeAdv">JEE Adv.</option>
                            <option value="mhtcet">MHT CET</option>
                        </select>
                    </div>
                    <br />
                    <div className="form-items">
                        <label className="form-item" htmlFor="percentile">Percentile</label>
                        <input className="form-input-select" type="number" name="" id="" />
                    </div>
                    <div className="form-items">
                        <span style={{margin: "0px 2rem"}} >OR</span>
                    </div>
                    <div className="form-items">
                        <label htmlFor="rank">Rank</label>
                        <input className="form-input-select" type="number" name="" id=""/>
                    </div>
                    <br />
                    <div className="form-items">
                    <label htmlFor="select-state">Select State: </label>
                    <select className="form-input-select" name="SelectState" id="select-state" required>
                        <option value=""> --select-- </option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                        <option value="Daman and Diu">Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                    </select>
                    </div>
                    <div className="form-items">
                        <label htmlFor="rank">District: </label>
                        <input className="form-input-select" type="text" name="" id="" required/>
                    </div>
                    <br />
                    <div className="form-items">
                        <label htmlFor="select-exam"  required>Select branches in engineering that you prefer: </label>
                        <Multiselect
                        displayValue="key"
                        id="css_custom"
                        onRemove={function noRefCheck(){}}
                        onSearch={function noRefCheck(){}}
                        onSelect={function noRefCheck(){}}
                        options={[
                            {
                                cat: 'Tech',
                                key: 'Artificial Intelligence and Machine learnig'
                            },
                            {
                                cat: 'Core',
                                key: 'Bio-Medical'
                            },
                            {
                                cat: 'Core',
                                key: 'Chemical'
                            },
                            {
                                cat: 'Core',
                                key: 'Civil'
                            },
                            {
                                cat: 'Tech',
                                key: 'Computer'
                            },
                            {
                                cat: 'Tech',
                                key: 'Data Science'
                            },
                            {
                                cat: 'Core',
                                key: 'Electrical'
                            },
                            {
                                cat: 'Tech',
                                key: 'Electronics/Extc'
                            },
                            {
                                cat: 'Tech',
                                key: 'IT'
                            }, 
                            {
                                cat: 'Core',
                                key: 'Mechanical'
                            }
                        ]}
                        placeholder=""
                        style={{
                            chips: {
                            // background: '#c1f0f1',
                            background: '#598fa8',
                            color: "white",
                            'font-size': '1rem'
                            },
                            multiselectContainer: {
                            color: 'black',
                            searchBox: {
                            border: 'none',
                            'border-bottom': '1px solid blue',
                            'border-radius': '0px'
                            }
                        }}}
                    />
                    </div>
                    <button className="form-btn" id="form-submit" type="submit">Submit</button>
                    <button className="form-btn" id="form-reset" type="reset">Reset</button>
                </form>
            </div>
        </div>
    </div>
        {/* <div style={{position:"absolute", backgroundColor:"gray", border: "1px solid black", height: "5rem"}}></div> */}
        {/* <Result/> */}
    </>
        // <>
        //     <img className="college" src="college_cropped.png" alt="" srcSet="" />
        //     <div className="form-head">
        //         <p id="form-head-p1" >
        //             Please enter correct details to get proper results    
        //         </p> 
        //         <span style={{}}>
        //            <strong>i</strong>
        //         </span>
        //         <p id="form-head-p2" >
        //         Don't worry! any of your details wont be saved.
        //         </p> 
        //     </div>
        //     <div className="form-body">
        //         <form action="">
        //             <div className="form-items">
        //                 <label htmlFor="select-exam">Select Exam: </label>
        //                 <select className="form-input-select" name="SelectExam" id="select-exam" required>
        //                     <option value=""> --select-- </option>
        //                     <option value="all">ALL</option>
        //                     <option value="jeeMains">JEE Mains</option>
        //                     <option value="jeeAdv">JEE Adv.</option>
        //                     <option value="mhtcet">MHT CET</option>
        //                 </select>
        //             </div>
        //             <br />
        //             <div className="form-items">
        //                 <label className="form-item" htmlFor="percentile">Percentile</label>
        //                 <input className="form-input-select" type="number" name="" id="" />
        //             </div>
        //             <div className="form-items">
        //                 <span style={{margin: "0px 2rem"}} >OR</span>
        //             </div>
        //             <div className="form-items">
        //                 <label htmlFor="rank">Rank</label>
        //                 <input className="form-input-select" type="number" name="" id=""/>
        //             </div>
        //             <br />
        //             <div className="form-items">
        //             <label htmlFor="select-state">Select State: </label>
        //             <select className="form-input-select" name="SelectState" id="select-state" required>
        //                 <option value=""> --select-- </option>
        //                 <option value="Andhra Pradesh">Andhra Pradesh</option>
        //                 <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
        //                 <option value="Arunachal Pradesh">Arunachal Pradesh</option>
        //                 <option value="Assam">Assam</option>
        //                 <option value="Bihar">Bihar</option>
        //                 <option value="Chandigarh">Chandigarh</option>
        //                 <option value="Chhattisgarh">Chhattisgarh</option>
        //                 <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
        //                 <option value="Daman and Diu">Daman and Diu</option>
        //                 <option value="Delhi">Delhi</option>
        //                 <option value="Lakshadweep">Lakshadweep</option>
        //                 <option value="Puducherry">Puducherry</option>
        //                 <option value="Goa">Goa</option>
        //                 <option value="Gujarat">Gujarat</option>
        //                 <option value="Haryana">Haryana</option>
        //                 <option value="Himachal Pradesh">Himachal Pradesh</option>
        //                 <option value="Jammu and Kashmir">Jammu and Kashmir</option>
        //                 <option value="Jharkhand">Jharkhand</option>
        //                 <option value="Karnataka">Karnataka</option>
        //                 <option value="Kerala">Kerala</option>
        //                 <option value="Madhya Pradesh">Madhya Pradesh</option>
        //                 <option value="Maharashtra">Maharashtra</option>
        //                 <option value="Manipur">Manipur</option>
        //                 <option value="Meghalaya">Meghalaya</option>
        //                 <option value="Mizoram">Mizoram</option>
        //                 <option value="Nagaland">Nagaland</option>
        //                 <option value="Odisha">Odisha</option>
        //                 <option value="Punjab">Punjab</option>
        //                 <option value="Rajasthan">Rajasthan</option>
        //                 <option value="Sikkim">Sikkim</option>
        //                 <option value="Tamil Nadu">Tamil Nadu</option>
        //                 <option value="Telangana">Telangana</option>
        //                 <option value="Tripura">Tripura</option>
        //                 <option value="Uttar Pradesh">Uttar Pradesh</option>
        //                 <option value="Uttarakhand">Uttarakhand</option>
        //                 <option value="West Bengal">West Bengal</option>
        //             </select>
        //             </div>
        //             <div className="form-items">
        //                 <label htmlFor="rank">District: </label>
        //                 <input className="form-input-select" type="text" name="" id="" required/>
        //             </div>
        //             <br />
        //             <div className="form-items">
        //                 <label htmlFor="select-exam"  required>Select branches in engineering that you prefer: </label>
        //                 <Multiselect
        //                 displayValue="key"
        //                 id="css_custom"
        //                 onRemove={function noRefCheck(){}}
        //                 onSearch={function noRefCheck(){}}
        //                 onSelect={function noRefCheck(){}}
        //                 options={[
        //                     {
        //                         cat: 'Tech',
        //                         key: 'Artificial Intelligence and Machine learnig'
        //                     },
        //                     {
        //                         cat: 'Core',
        //                         key: 'Bio-Medical'
        //                     },
        //                     {
        //                         cat: 'Core',
        //                         key: 'Chemical'
        //                     },
        //                     {
        //                         cat: 'Core',
        //                         key: 'Civil'
        //                     },
        //                     {
        //                         cat: 'Tech',
        //                         key: 'Computer'
        //                     },
        //                     {
        //                         cat: 'Tech',
        //                         key: 'Data Science'
        //                     },
        //                     {
        //                         cat: 'Core',
        //                         key: 'Electrical'
        //                     },
        //                     {
        //                         cat: 'Tech',
        //                         key: 'Electronics/Extc'
        //                     },
        //                     {
        //                         cat: 'Tech',
        //                         key: 'IT'
        //                     }, 
        //                     {
        //                         cat: 'Core',
        //                         key: 'Mechanical'
        //                     }
        //                 ]}
        //                 placeholder=""
        //                 style={{
        //                     chips: {
        //                     // background: '#c1f0f1',
        //                     background: '#598fa8',
        //                     color: "white",
        //                     'font-size': '1rem'
        //                     },
        //                     multiselectContainer: {
        //                     color: 'black',
        //                     searchBox: {
        //                     border: 'none',
        //                     'border-bottom': '1px solid blue',
        //                     'border-radius': '0px'
        //                     }
        //                 }}}
        //             />
        //             </div>
        //         </form>
        //         <button className="form-btn" id="form-submit" type="submit">Submit</button>
        //         <button className="form-btn" id="form-reset" type="reset">Reset</button>
        //     </div>
        //     {/* <div style={{position:"absolute", backgroundColor:"gray", border: "1px solid black", height: "5rem"}}></div> */}
        //     {/* <Result/> */}
        // </>
    )
}

// img: top = -16rem and form-body: height 389.4px
// img: top = -13.5rem and form-body: height 427.8px
