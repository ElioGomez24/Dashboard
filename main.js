(() => {
    function get(url){
      return Promise.resolve(
        fetch(url)
        .then((response) => response.json())
        .then((data) =>{
          dibujar(data)
        
          const graph = document.getElementById('grafico');
          
          titleArray = data.map((data) => data.title);
          console.log(titleArray)
          SaleArray = data.map((data => data.salePrice))
          console.log(SaleArray)
          normalArray = data.map((data) =>data.metacriticScore)
          
          
          console.log(normalArray)
          
          function dibujar (data){
            let contenedor = document.getElementById('contenedor')
            data.forEach((data) => {
              /*   <div class = "container">
                  <div class = "row">
                    <h5> ${data.title} </h5>
                    <div class = "col-md-3 mt-5">
                      <img src=${data.thumb} width=300/>
                    </div>  
                  </div>
                </div> */
      
              contenedor.innerHTML += `
              <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                  <div class="card">
                    <img src="${data.thumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${data.title}</h5>
                    </div>
                  </div>
                </div>
              </div>
              `
            })
          }    
        
          const myChart = new Chart(graph, {
            type: 'line',
            data: {
              labels: titleArray,
              datasets: [{
                label: 'Precio Oferta',
                data: SaleArray,
                borderWidth: 1,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
              },
              {
                label: 'Precio Normal',
                data: normalArray,
                borderColor: 'rgba(255,99,132,1)'
              }],
            }
          });  
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        })
      );
    }
  
    let normalArray = [];
    let titleArray = [];
    let SaleArray = [];
    
    get('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15')
    
 })();    