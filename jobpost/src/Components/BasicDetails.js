import React, { useState, useCallback } from 'react'
import './BasicDetails.css'
import AddIcon from '@mui/icons-material/Add'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import toast, { Toaster } from 'react-hot-toast'



const BasicDetails = () => {

    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [locations, setLocations] = useState([])
    const [description, setDescription] = useState('')
    const [minExperience, setMinExperience] = useState('')
    const [maxExperience, setMaxExperience] = useState('')
    const [category, setCategory] = useState([])
    const [area, setArea] = useState('')
    const [minBatch, setMinBatch] = useState('')
    const [maxBatch, setMaxBatch] = useState('')
    const [tag, setTag] = useState('')
    const [tags, setTags] = useState([])

    const addLocations = () => {
        setLocations([...locations, location])
        setLocation('')
    }

    const addTags = (e) => {
        setTags([...tags, tag])
        setTag('')
    }

    

    const onPostJob = () => {
        if(!title || !locations || !description || !minExperience || !maxExperience || !category || !area || !minBatch || !maxBatch || !tags){
            toast('All fields should be filled!!!')
        }  
        else{
            fetch('http://localhost:8001/v1jobs/job',{
                method:'post',
                headers:{
                    "content-Type":"application/json"
                },
                body: JSON.stringify({
                    title,
                    locations,
                    description,
                    minExperience,
                    maxExperience,
                    category,
                    area,
                    minBatch,
                    maxBatch,
                    tags
                })
            }).then(res=>res.json())           
            .then(data=>{
                if(data.error){
                    toast(data.error)
                }else{
                    
                    toast('Successfully posted..')
                }
            })
        } 
    }

    return (
        <div className='container'>
            <div></div>
            <div className="heading">
                <h2>Basic Details</h2>
            </div>
            <div className='formcontainer mb-5'>
                <form className='form'>
                    <div>
                        <label>Job Title*</label>
                    </div>
                    <div>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            className="form-control pb-3 "
                            id="jobtitle"
                            placeholder="Write a title that appropriately describes this job"
                        />
                    </div>
                    <div>
                        <label>Location*</label>
                    </div>
                    <div>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            value={location}
                            className="form-control pb-5"
                            onChange={(e) => setLocation(e.target.value)}
                            endAdornment={<InputAdornment position="end"><AddIcon onClick={addLocations} /></InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            startAdornment={<InputAdornment position='start' ><div className='tags' >{locations.map((entry,index) =>
                                <div key={index} className='tag' >{entry}</div>
                            )}
                            </div></InputAdornment>}
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        >
                        </OutlinedInput>
                    </div>
                    <div>
                        <label>Years of Experience*</label>
                    </div>
                    <div className=' row' >
                        <div className='col-6'>
                            <select value={minExperience} onChange={(e) => setMinExperience(e.target.value)} class="form-select pb-3" aria-label="Default select example">
                                <option selected>Select Minimum</option>
                                <option value="0">Zero</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                            </select>
                        </div>
                        <div className='col-6'>
                            <select value={maxExperience} onChange={(e) => setMaxExperience(e.target.value)} class="form-select pb-3" aria-label="Default select example">
                                <option selected > Select Maximum</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">four</option>
                                <option value="5">five</option>
                                <option value="6">six</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label>Job Description*</label>
                    </div>
                    <div>
                        <input
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            type="text"
                            className="form-control pb-5"
                            style={{ height: '150px' }}
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-lg"
                            placeholder='Describe the role and responsibilities, skills required for the job and help the candidates understand the role better'
                        />
                    </div>
                </form>
            </div>
            <div className="heading">
                <h2>Targeting</h2>
            </div>
            <div className='formcontainer mb-5'>
                <form className='form'>

                    <div className='row'>
                        <div className="col-6"><label>Category*</label></div>
                        <div className="col-6"><label>Functional Area*</label></div>
                    </div>
                    <div className=' row' >
                        <div className='col-6'>
                            <select value={category} onChange={(e) => setCategory(e.target.value)} class="form-select pb-3" aria-label="Default select example">
                                <option selected>Select </option>
                                <option value="ReactJs">ReactJs</option>
                                <option value="Node.js">Node.Js</option>
                                <option value="Flutter">Flutter</option>
                                <option value="Angular">Angular</option>
                            </select>
                        </div>
                        <div className='col-6'>
                            <select value={area} onChange={(e) => setArea(e.target.value)} class="form-select pb-3" aria-label="Default select example">
                                <option selected > Select </option>
                                <option value="Research and Developmet">Research and Developmet</option>
                                <option value="Programing">Programing</option>
                                <option value="Data Analyst">Data Analyst</option>
                                <option value="Artificial Intelligence">Artificial Intelligence</option>
                            </select>
                        </div>
                    </div>
                    <div >
                        <div ><label>Graduating Year*</label></div>
                    </div>
                    <div className=' row' >
                        <div className='col-6'>
                            <select value={minBatch} onChange={(e) => setMinBatch(e.target.value)} class="form-select pb-3" aria-label="Default select example">
                                <option selected> Min Batch</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                            </select>
                        </div>
                        <div className='col-6'>
                            <select value={maxBatch} onChange={(e) => setMaxBatch(e.target.value)} class="form-select pb-3" aria-label="Default select example">
                                <option selected >  Max Batch</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label>Tags*</label>
                    </div>
                    <div>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            value={tag}
                            className="form-control pb-5"
                            onChange={(e) => setTag(e.target.value)}
                            endAdornment={<InputAdornment position="end"><AddIcon onClick={addTags} /></InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            startAdornment={<InputAdornment position='start' ><div className='tags' >{tags.map((entry,index) =>
                                <div key={index} className='tag' >{entry}</div>
                            )}
                            </div></InputAdornment>}
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        >
                        </OutlinedInput>
                    </div>
                </form>
            </div>
            <div className='buttons'>
                <button type="button" className="postbutton mb-5 p-2" onClick={()=>onPostJob()} >Post Job</button>
                <Toaster position='top-right' toastOptions={{style:{background:'red',color:'white'}}} />
                <button type="button" className="addjobbutton mb-5 p-2">Post Job and add Another job</button>
                <button type="button" className="cancelbutton mb-5 p-2">Cancel</button>
            </div>

        </div>
    )
}

export default BasicDetails