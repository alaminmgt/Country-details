const container =document.getElementById("container");
const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/name/bangladesh");
request.send();

// get the resposnse
request.addEventListener("load", function () {
   const [data] =  JSON.parse(this.responseText);
   console.log(data);
    const htmlData = `
    <div id="card">
        <article class="card">
            <div class="card-body">
                <img src="${data.flags.png}" alt="" class="card-body-img">
                <h1 class="card-body-title" style="margin-left: 95px;">
                    ${data.name.common}<span></span>
                </h1>
                <p class="card-body-text" style="margin-left: 104px;font-weight: bold;" >Capital :${data.capital[0]} </p>
            </div>
            <hr>
            <div class="card-footer">
                <div class="card-footer-social" style="float: left;margin-left: 6px;">
                    <h3>${data.languages.ben}</h3>
                    <p>Languages</p>
                </div>
                <div class="card-footer-social" style="float: left;margin-left: 27px;">
                    <h3>${data.population}</h3>
                    <p style="margin-left: 7px;">Population</p>
                </div>
                <div class="card-footer-social" style="float: left;margin-left: 30px;">
                    <h3>${data.demonyms.eng.f}</h3>
                    <p style="margin-left: 9px;">Demonyms</p>
                </div>
            </div>
        </article>
    </div>
    ` 
      
    container.insertAdjacentHTML("afterbegin",htmlData);
});