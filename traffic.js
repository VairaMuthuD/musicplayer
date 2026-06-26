const lights = [
  { color: "Red", Time: 10 },
  { color: "Green", Time: 10 },
  { color: "Yellow", Time: 10 },
];

let count = 0;

for(let i=0; i<lights.length; i++){

    count += (lights[i].Time*1000);

    setTimeout(()=>{
        console.log(i)
        console.log(lights[i].color)
    },count)

}


