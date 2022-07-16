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

let tableBody = document.querySelector('.bodyTable');


function populateTable(arr) {
    let text = '';

    for(let i=0; i<arr.length; i++) {
        text += `
            <tr>
                <td>${arr[i].model}</td>
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