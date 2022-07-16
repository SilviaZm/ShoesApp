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
                        <select class="select" name="" id="">
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
                        <select class="select">                            <option  class="selectModel" value="model">Model</option>
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

    function populateTable(arr) {
        let text = '';
    
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
                <input type="text" class="modelInput" value='${shoe.model}'>
            </div> 
            <div>
                <label for="">Tip</label>
                <input type="text" class="tipInput" value='${shoe.tip}'>
            </div>
            <div>
                <label for="">Culoare</label>
                <input type="text" class="culoareInput" value='${shoe.culoare}'>
            </div>
            <div>
                <label for="">Numar</label>
                <input type="text" class="numarInput" value='${shoe.numar}'>
            </div>
            <div>
                <label for="">Material</label>
                <input type="text" class="materialInput" value='${shoe.material}'>
            </div>
            <label for=""> </label>
            <div>
                <button class="button__primary createNewWatch">Update this shoe</button>
                <button class="button__primary cancelButton">Cancel</button>
            </div>
        </div>
    </div>
    `
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

        return -1;
    }
}
