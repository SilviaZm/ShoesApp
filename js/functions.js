let pantofi = [
    {
        model: 'JH32BH',
        tip: 'sneakers',
        culoare: 'negru',
        numar: 36,
        material: 'piele'
    },
    {
        model: 'HG4IO5',
        tip: 'cizme',
        culoare: 'maro',
        numar: 38,
        material: 'textil'
    },
    {
        model: '7Z7XFH',
        tip: 'papuci',
        culoare: 'negru',
        numar: 40,
        material: 'piele'
    },
    {
        model: 'ADD5VA',
        tip: 'botine',
        culoare: 'maro',
        numar: 37,
        material: 'piele'
    },
    {
        model: '4KHCWD',
        tip: 'sneakers',
        culoare: 'alb',
        numar: 36,
        material: 'textil'
    },
    {
        model: '5JGSBF',
        tip: 'pantofi',
        culoare: 'negru',
        numar: 37,
        material: 'piele intoarsa'
    },
    {
        model: 'SA75D3',
        tip: 'sneakers',
        culoare: 'alb',
        numar: 40,
        material: 'textil'
    },
    {
        model: 'CXVDF7',
        tip: 'botine',
        culoare: 'negru',
        numar: 38,
        material: 'piele'
    },
    {
        model: 'XCVF9E',
        tip: 'papuci',
        culoare: 'bej',
        numar: 37,
        material: 'piele intoarsa'
    },
    {
        model: '0XZCND',
        tip: 'pantofi',
        culoare: 'negru',
        numar: 36,
        material: 'textil'
    },
    {
        model: 'A7DN3L',
        tip: 'cizme',
        culoare: 'bej',
        numar: 39,
        material: 'textil'
    },
    {
        model: 'XCRW22',
        tip: 'sneakers',
        culoare: 'negru',
        numar: 39,
        material: 'piele intoarsa'
    },
    {
        model: '15GDR6',
        tip: 'sneakers',
        culoare: 'verde',
        numar: 38,
        material: 'piele'
    }
]

function populateTable(arr) {
    let text = '';
    let tableBody = document.querySelector('.bodyTable');

    for(let i=0; i<arr.length; i++) {
        text += `
            <tr>
                <td class="model">${arr[i].model}</td>
                <td>${arr[i].tip}</td>
                <td>${arr[i].culoare}</td>
                <td>${arr[i].numar}</td>
                <td>${arr[i].material}</td>
            </tr>
        `
    }

    tableBody.innerHTML = text;
    return text;
}
//variabile
let container = document.querySelector(".container");



//set functions
function setHome() {
   
    container.innerHTML = `
        <div class="home__container">
            <div>
                <div class="home__header">
                    <h3>Shoes</h3>
                    <div class="home__header__search">
                        <label>Search by model</label>
                        <input class="searchInput">
                    </div> 
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Model</th>
                            <th>Tip</th>
                            <th>Culoare</th>
                            <th>Numar</th>
                            <th>Material</th>   
                        </tr>
                    </thead>
                    <tbody class="bodyTable">
                        <tr>
                            <td>Titanic</td>
                            <td>150</td>
                            <td>romance</td>
                            <td>yes</td>
                        </tr>
                        <tr>
                            <td>Titanic</td>
                            <td>150</td>
                            <td>romance</td>
                            <td>yes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="sidebar">
                <h3>Filters</h3>
                <div class="sidebar__item">
                    <fieldset>
                        <label for="">Filter by color</label>
                        <select class="selectFilter" name="" id="">
                            <option value="">negru</option>
                            <option value="">maro</option>
                            <option value="">alb</option>
                            <option value="">bej</option>
                            <option value="">verde</option>
                        </select>
                    </fieldset>
                </div> 
                <div class="sidebar__item">
                    <fieldset>
                        <label for="">Order by</label>
                        <select class="selectSort">               
                             <option value="">-------</option>             
                            <option value="model" class="selectModel">Model</option>
                            <option value="tip" class="selectTip">Tip</option>
                            <option value="culoare" class="selectCuloare">Culoare</option>
                            <option value="numar" class="selectNumar">Numar</option>
                            <option value="material" class="selectMaterial">Material</option>
                        </select>
                    </fieldset>
                </div> 
            </div>
        </div>
        <button class="button__primary button__home__create">Create new Shoe</button>
        
    `

   
    let tableBody = document.querySelector('.bodyTable');
    let searchInput = document.querySelector('.searchInput');
    let selectSort = document.querySelector('.selectSort');
    let selectFilterByColor = document.querySelector('.selectFilter');
    
    populateTable(pantofi);

    //button create 
    let buttonCreate = document.querySelector(".button__home__create");
    buttonCreate.addEventListener('click', () => {
        setCreateShoe();
    })

    //update shoe by model
    tableBody.addEventListener("click",(e)=>{
 
        let obj = e.target;
    
        if(obj.classList.contains("model")){

            let model=obj.textContent;
             setUpdateShoe(returnShoeByModel(pantofi,model))
        }
    })


    searchInput.addEventListener('input', () => {

        let value = searchInput.value;

        let filteredObj= filterByModel(value, pantofi);

        populateTable(filteredObj);

    })

    selectFilterByColor.addEventListener('change', () => {

        let alegere = selectFilterByColor.value;
        console.log(alegere);
    
            let filtrare = filterByColor(pantofi, alegere);
        console.log(filtrare);
            populateTable(filtrare);
 
    
    
        //    alert(alegere);
    });

    selectSort.addEventListener('click', () => {
        
        if(selectSort.value==='model'){


            sortByModel();
        }

        if(selectSort.value==='tip'){


            sortByTip();
        }
    })

    // selectSort.addEventListener('click', () => {
    //     let option = selectSort.value;
    //     console.log(option);

    //     if(option.classList.includes("model")){

    //         sortBy(model);
    //     }
        
    // })
}

function setCreateShoe() {
    container.innerHTML = `
    <div class="create-shoe__container">
        <h1>Create Shoe</h1>
        <div class="create-shoe__form">
            <div>
                <label for="">Model</label>
                <input type="text" class="modelInput">
            </div> 
            <div>
                <label for="">Tip</label>
                <input type="text" class="tipInput">
            </div>
            <div>
                <label for="">Culoare</label>
                <input type="text" class="culoareInput">
            </div>
            <div>
                <label for="">Numar</label>
                <input type="text" class="numarInput">
            </div>
            <div>
                <label for="">Material</label>
                <input type="text" class="materialInput">
            </div>
            <label for=""> </label>
            <div>
                <button class="button__primary createNewShoe">Create New Shoe</button>
                <button class="button__primary cancelCreateButton">Cancel</button>
            </div>
        </div>
    </div>
    `

    let createModelInput = document.querySelector(".modelInput");
    let createTipInput = document.querySelector(".tipInput");
    let createCuloareInput = document.querySelector(".culoareInput");
    let createNumarInput = document.querySelector(".numarInput");
    let createMaterialInput = document.querySelector(".materialInput");
    let createNewShoe = document.querySelector(".createNewShoe");
    let cancelCreateButton= document.querySelector(".cancelCreateButton");
    let errori = [];

    function check(){

        errori = [];
        if (createModelInput.value == "") {
            errori.push(" model ");
        };

        if (createTipInput.value == "") {
            errori.push(" tip ");
        };

        if (createCuloareInput.value == "") {
            errori.push(" culoare ");
        };

        if (createNumarInput.value == "") {
            errori.push(" numar ");
        };

        if (createMaterialInput.value == "") {
            errori.push(" material ");
        };

    }

    createNewShoe.addEventListener('click', () => {

        check();

        let newShoe = {
            model: createModelInput.value,
            tip: createTipInput.value,
            culoare: createCuloareInput.value,
            numar: createNumarInput.value,
            material: createMaterialInput.value
        };

        if (errori.length > 0) {

            alert("Please enter a" + errori +"");

        } else {
            pantofi.push(newShoe);

            setHome();
        }


    })

    cancelCreateButton.addEventListener('click', () => {
        setHome();
    })
}

function setUpdateShoe(shoe) {
    container.innerHTML = `
    <div class="update-shoe__container">
        <h1>Update Shoe</h1>
        <div class="update-shoe__form">
            <div>
                <label for="">Model</label>
                <input type="text" class="updateModelInput" value='${shoe.model}'>
            </div> 
            <div>
                <label for="">Tip</label>
                <input type="text" class="updateTipInput" value='${shoe.tip}'>
            </div>
            <div>
                <label for="">Culoare</label>
                <input type="text" class="updateCuloareInput" value='${shoe.culoare}'>
            </div>
            <div>
                <label for="">Numar</label>
                <input type="text" class="updateNumarInput" value='${shoe.numar}'>
            </div>
            <div>
                <label for="">Material</label>
                <input type="text" class="updateMaterialInput" value='${shoe.material}'>
            </div>
            <label for=""> </label>
            <div>
                <button class="button__primary updateShoeButton">Update this shoe</button>
                <button class="button__primary deleteShoeButton">Delete this shoe</button>
                <button class="button__primary cancelUpdateButton">Cancel</button>
            </div>
        </div>
    </div>
    `
    let updateShoeButton = document.querySelector(".updateShoeButton");
    let deleteShoeButton = document.querySelector(".deleteShoeButton");
    let cancelUpdateButton = document.querySelector(".cancelUpdateButton");
    let updateModelInput = document.querySelector(".updateModelInput");
    let updateTipInput = document.querySelector(".updateTipInput");
    let updateCuloareInput = document.querySelector(".updateCuloareInput");
    let updateNumarInput = document.querySelector(".updateNumarInput");
    let updateMaterialInput = document.querySelector(".updateMaterialInput");
    let eroriUpdate = [];

    function checkEroriUpdate(){
      
        
        if (updateModelInput.value == "") {
            eroriUpdate.push(" modelul ");
        };

        if (updateTipInput.value == "") {
            eroriUpdate.push(" tipul ");
        };

        if (updateCuloareInput.value == "") {
            eroriUpdate.push(" culoarea ");
        };

        if (updateNumarInput.value == "") {
            eroriUpdate.push(" numarul ");
        };

        if (updateMaterialInput.value == "") {
            eroriUpdate.push(" materialul ");
        };

    }

    updateShoeButton.addEventListener('click', () => {
      
        let updatedShoe = {

            model: updateModelInput.value,
            tip: updateTipInput.value,
            culoare: updateCuloareInput.value,
            numar: updateNumarInput.value,
            material: updateMaterialInput.value
        }
      

        checkEroriUpdate();


        if(eroriUpdate.length == 0) {
        
            setHome();
        }

        else {
            initAlert("Nu ati introdus" + eroriUpdate); 
        }

        
    })

    deleteShoeButton.addEventListener('click', () => {
        let deletedShoe = {

            model: updateModelInput.value,
            tip: updateTipInput.value,
            culoare: updateCuloareInput.value,
            numar: updateNumarInput.value,
            material: updateMaterialInput.value
        }

        deleteShoe(deletedShoe);
        setHome();
    })



    cancelUpdateButton.addEventListener('click', () => {
        setHome();
    })

}



//other functions


function updateShoe(shoe) {
    for(let i=0; i<pantofi.length; i++) {
        if(pantofi[i].model.includes(shoe.model)) {
            pantofi[i].tip = shoe.tip
            pantofi[i].culoare = shoe.culoare
            pantofi[i].numar = shoe.numar
            pantofi[i].material = shoe.material
        }
    }
}

function returnShoeByModel(arr, model) {

    for(let i=0; i<arr.length; i++) {

       
        if(arr[i].model == model) {
            return arr[i];
        }

       
    }
    return -1;
}

function deleteShoe(shoe) {

    let arr = [];

    for(let i=0; i<pantofi.length; i++) {
        if(pantofi[i].model !== shoe.model) {
            
            arr.push(pantofi[i]);
        }
    }

 
    pantofi=arr;

}

//primeste text si returneaza alerta

function initAlert(text) {
    container.innerHTML += `
    <div class="alert">
        <div class="alert__item">${text}
            <span class="alert__item__close">+</span>
        </div>
    </div>
    `
    let closeUpdateButton = document.querySelector(".alert__item__close");
    let alertItem = document.querySelector(".alert__item");
     
    closeUpdateButton.addEventListener('click', () => {

        console.log("aici");
        alertItem.style.display = 'none';

    })
}

function filterByModel(model,arr) {

    let filtered = [];

    for(let i=0; i<arr.length; i++) {

        if(arr[i].model.includes(model)) {
            filtered.push(arr[i]);
        }
    }

    return filtered;
}

function sortByModel() {

    for(let i=0; i<pantofi.length-1; i++) {

        for(let j=i+1; j<pantofi.length; j++) {

            if(pantofi[i].model > pantofi[j].model) {
                let x = pantofi[i];
                pantofi[i] = pantofi[j];
                pantofi[j]= x;

            }
        }
    }

    populateTable(pantofi);
}

function sortByTip() {

    for(let i=0; i<pantofi.length-1; i++) {

        for(let j=i+1; j<pantofi.length; j++) {

            if(pantofi[i].tip > pantofi[j].tip) {
                let x = pantofi[i];
                pantofi[i] = pantofi[j];
                pantofi[j]= x;

            }
        }
    }

    populateTable(pantofi);
}

// function sortBy(sortCondition) {
//     for(let i=0; i<pantofi.length-1; i++) {

//         for(let j=i+1; j<pantofi.length; j++) {

//             if(pantofi[i].sortCondition > pantofi[j].sortCondition) {
//                 let x = pantofi[i];
//                 pantofi[i] = pantofi[j];
//                 pantofi[j]= x;

//             }
//         }
//     }

//     populateTable(pantofi);
// }

function filterByColor(arr, color) {

    let sameColor = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].culoare === color) {
            sameColor.push(arr[i]);
        }
    }

    return sameColor;
}