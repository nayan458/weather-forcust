
    const cityName = document.getElementById('cityName');
    const subBtn = document.getElementById('subBtn');
    const temp = document.getElementById('temp');
    const temp_status = document.getElementById('temp_status');
    
    const getInfo = async(event)=>{
        const inpVal = cityName.value;
        event.preventDefault();
        if(inpVal === ""){
            temp.innerText = "no Value entered"
        }else{
            try {
                const url = `http://api.openweathermap.org/data/2.5/weather?q=${inpVal}&appid=76a7fc8a52a722b527586357b1e320d8`;
                const urlData = await fetch(url);
                const getdata = await urlData.json();
                const dataArr = [getdata];
                temp_K = dataArr[0].main.temp;
                temp_c = temp_K - 273.15;
                // console.log(dataArr);
                temp.innerHTML = `${temp_c}&deg;C`;
                temp_status.innerText = dataArr[0].weather[0].main
                
            } catch{
                temp.innerText = "Server Error. Enter correct city name"
                temp_status.innerText = "404"
            }
        }
    }
    subBtn.addEventListener('click',getInfo);
