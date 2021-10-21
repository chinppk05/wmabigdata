const getBtn = document.getElementById("test");
const getdo00 = document.getElementById("test");


const getdata = () => {
  axios
    
    .get("http://localhost:3000/data")
    .then((response) => {
      console.log(response.data);
     // console.log(data);
      getdo00.innerHTML = response.data.data[0].ph;
   
      
    });
};

/*getBtn.addEventListener("click", getdata);
*/

getdata()