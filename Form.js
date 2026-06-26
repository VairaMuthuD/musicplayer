//  const forms = document.getElementById('form')

//  const displayInputs = document.getElementById('formValues')

//  const displayValues1 = document.createElement('h2')
//  const displayValues2 = document.createElement('h2')
//  const displayValues3 = document.createElement('h2')
//  const displayValues4 = document.createElement('h2')

//     // const submitBtn = document.getElementById('btn')

//     let inputDatas = {}

// const name= document.getElementById('name')

// forms.addEventListener('submit', function(e){

//     e.preventDefault()

//     const d = new FormData(forms)

//     // console.log(name.value)

//     console.log(Object.fromEntries([...d]))
//     console.log(d.get("name"))
//     console.log(d.getAll("education"))

//     const data = {
//         name: d.get('name'),
//         dob: d.get('dob')? (new Date(d.get('dob'))).toLocaleDateString() : 'Select DOB' ,
//         gender: d.get('gender') || 'Select Gender' ,
//         education: d.getAll('education').length ? d.getAll('education').join(", ") : 'Select Education' ,
//     }

// displayValues1.textContent = `Name:${data.name}`
// displayInputs.appendChild(displayValues1)

// displayValues2.textContent = `DOB:${data.dob}`
// displayInputs.appendChild(displayValues2)

// displayValues3.textContent = `Gender:${data.gender}`
// displayInputs.appendChild(displayValues3)

// displayValues4.textContent = `Education: ${data.education}`
// displayInputs.appendChild(displayValues4)


// displayInputs.style.cssText = `
//     display:flex;
//     align-items:center;
//     justify-content:center;
//     position: absolute;
//     top:15%;
//     left:40%;
//     right:50%;
//     height:300px;
//     width:500px;
//     z-index: 1000;
//     display:block;
//     background-color:blue;
// `



//     // displayInputs.innerHTML = `<h4>Name:${data.name}</h4>`
//     // displayInputs.innerHTML = `<h4>DOB:${data.dob}</h4>`
//     // displayInputs.innerHTML = `<h4>Gender:${data.gender}</h4>`
//     // displayInputs.innerHTML = `<span>Education:</span> ${data.education.map((item)=>item)} `

// })

// displayInputs.addEventListener('click', function(){
//     displayInputs.style.cssText = ``
// })


const obj = {
  value: 42,
  getValue() { return this.value; }
};

let fn = obj.getValue
console.log(fn.call(obj))