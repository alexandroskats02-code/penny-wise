import React, { useState } from 'react'

const BudgetingPage = () => {
   const [budgetData,setBudgetData] = useState ({
      quenstion:"", 
      targetAmount:"", 
      goal:"", 
      media:"", 
      reward:"",

  
    })

    function handleSumbit (){
    e.prevent.Default()
  }
  function handleChange(e){
     let newVariale = e.target.name
     let newValue = e.target.value
    setBudgetData({...budgetData,[newVariale]:newValue})
  }
  function handleFile(e){
      let newFile = e.target.files[0]
     setBudgetData({...budgetData,["media"]: newFile})
  }
  return (

    <form onSubmit={handleSumbit}>
    <label htmlFor='quenstion'>quenstion</label>
    <input type='text' name='quenstion' id='quenstion' value={budgetData.quenstion} onChange={handleChange} />
    <label htmlFor='targetAmount'>targetAmount</label>
    <input type='number' name='targetAmount' id='targetAmount' value={budgetData.targetAmount} onChange={handleChange} required min={0} /> 
    <label htmlFor='goal'>goal</label>
    <input type='text' name='goal' id='goal' value={budgetData.goal} onChange={handleChange} required/>
    <label htmlFor='media'>media</label>
    <input type='file' name='media' id='media'onChange={handleFile}  required/>
    <label htmlFor='reward'>reward</label>
    <input type='number' name='reward' id='reward' value={budgetData.reward} onChange={handleChange} required min={0}/> 
    <button type='submit'>Save</button>
    </form>
  )
}

export default BudgetingPage
